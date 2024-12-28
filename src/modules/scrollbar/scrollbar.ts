import {
  elementOffset,
  isWeb,
  makeElementsArray,
  createElement,
  extractTranslateValue
} from '../../components/shared/utils'
import createElementIfNotDefined from '../../components/shared/create-element-if-not-defined'
import classesToSelector from '../../components/shared/classes-to-selector'
import type { ScrollbarOptions } from '../../types/modules/scrollbar'
import type { SwiperInterface } from '../../types/swiper-class'
import classesToTokens from '../../components/shared/classes-to-tokens'

export default function Scrollbar({
  swiper,
  extendParams,
  on,
  emit
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
  emit: (event: string, ...args: any[]) => void
}): void {
  let isTouched = false
  let timeout: number | null = null
  let dragTimeout: number | null = null
  let dragStartPos: number
  let dragSize: number
  let trackSize: number
  let divider: number

  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: 'swiper-scrollbar-horizontal',
      verticalClass: 'swiper-scrollbar-vertical'
    } as ScrollbarOptions
  })

  //   @ts-ignore
  swiper.scrollbar = {
    el: null,
    dragEl: null
  }

  function setTranslate() {
    if (
      !(swiper.params.scrollbar as ScrollbarOptions)?.el ||
      !swiper.scrollbar.el
    )
      return

    const { scrollbar, rtlTranslate: rtl } = swiper
    const { dragEl, el } = scrollbar
    const params = swiper.params.scrollbar as ScrollbarOptions
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress

    let newSize = dragSize
    let newPos = (trackSize - dragSize) * progress

    if (rtl) {
      newPos = -newPos
      if (newPos > 0) {
        newSize = dragSize - newPos
        newPos = 0
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos
      newPos = 0
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos
    }

    if (swiper.isHorizontal()) {
      ;(dragEl as HTMLElement).style.transform =
        `translate3d(${newPos}px, 0, 0)`
      ;(dragEl as HTMLElement).style.width = `${newSize}px`
    } else {
      ;(dragEl as HTMLElement).style.transform =
        `translate3d(0px, ${newPos}px, 0)`
      ;(dragEl as HTMLElement).style.height = `${newSize}px`
    }

    if (params.hide) {
      clearTimeout(timeout as number)
      ;(el as HTMLElement).style.opacity = '1'
      timeout = setTimeout(() => {
        ;(el as HTMLElement).style.opacity = '0'
        ;(el as HTMLElement).style.transitionDuration = '400ms'
      }, 1000)
    }
  }

  function setTransition(duration: number) {
    if (
      !(swiper.params.scrollbar as ScrollbarOptions)?.el ||
      !swiper.scrollbar.el
    )
      return
    ;(swiper.scrollbar.dragEl as HTMLElement).style.transitionDuration =
      `${duration}ms`
  }

  function updateSize() {
    if (
      !(swiper.params.scrollbar as ScrollbarOptions)?.el ||
      !swiper.scrollbar.el
    )
      return

    const { scrollbar } = swiper
    const { dragEl, el } = scrollbar

    ;(dragEl as HTMLElement).style.width = ''
    ;(dragEl as HTMLElement).style.height = ''
    if (isWeb()) {
      trackSize = swiper.isHorizontal()
        ? (el as HTMLElement).offsetWidth
        : (el as HTMLElement).offsetHeight
    } else {
      trackSize = swiper.isHorizontal() ? swiper.width : swiper.height
    }

    divider =
      swiper.size /
      (swiper.virtualSize +
        (swiper.params.slidesOffsetBefore as number) -
        (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0))

    if ((swiper.params.scrollbar as ScrollbarOptions).dragSize === 'auto') {
      dragSize = trackSize * divider
    } else {
      dragSize = parseInt(
        (swiper.params.scrollbar as ScrollbarOptions).dragSize as string,
        10
      )
    }

    if (swiper.isHorizontal()) {
      ;(dragEl as HTMLElement).style.width = `${dragSize}px`
    } else {
      ;(dragEl as HTMLElement).style.height = `${dragSize}px`
    }

    if (divider >= 1) {
      ;(el as HTMLElement).style.display = 'none'
    } else {
      ;(el as HTMLElement).style.display = ''
    }

    if ((swiper.params.scrollbar as ScrollbarOptions).hide) {
      ;(el as HTMLElement).style.opacity = '0'
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      ;(scrollbar.el as HTMLElement).classList[
        swiper.isLocked ? 'add' : 'remove'
      ]((swiper.params.scrollbar as ScrollbarOptions).lockClass as string)
    }
  }

  function getPointerPosition(
    e: TouchEvent | MouseEvent | PointerEvent
  ): number {
    if (isWeb()) {
      return swiper.isHorizontal()
        ? (e as MouseEvent).clientX
        : (e as MouseEvent).clientY
    }
    return swiper.isHorizontal()
      ? (e as TouchEvent).touches[0].clientX
      : (e as TouchEvent).touches[0].clientY
  }

  function setDragPosition(e: TouchEvent | MouseEvent | PointerEvent): void {
    const { scrollbar, rtlTranslate: rtl } = swiper
    const { el } = scrollbar

    let positionRatio: number
    if (isWeb()) {
      positionRatio =
        (getPointerPosition(e) -
          (
            elementOffset(el as HTMLElement) as {
              left: number
              top: number
            }
          )[swiper.isHorizontal() ? 'left' : 'top'] -
          (dragStartPos !== null ? dragStartPos : dragSize / 2)) /
        (trackSize - dragSize)
    } else {
      // @ts-ignore
      const currentTransform = el.scrollbarRect.left || 0
      positionRatio =
        (getPointerPosition(e) -
          currentTransform -
          (dragStartPos !== null ? dragStartPos : dragSize / 2)) /
        (trackSize - dragSize)
    }

    positionRatio = Math.max(Math.min(positionRatio, 1), 0)
    if (rtl) {
      positionRatio = 1 - positionRatio
    }

    const position =
      swiper.minTranslate() +
      (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio

    swiper.updateProgress(position)
    swiper.setTranslate(position)
    swiper.updateActiveIndex()
    swiper.updateSlidesClasses()
  }

  function isInRange(value: number, start: number, end: number): boolean {
    if (start > end) {
      ;[start, end] = [end, start]
    }
    return value >= start && value <= end
  }

  function onDragStart(e: TouchEvent | MouseEvent | PointerEvent): void {
    const params = swiper.params.scrollbar as ScrollbarOptions
    const { scrollbar, wrapperEl } = swiper
    const { el, dragEl } = scrollbar
    isTouched = true
    if (isWeb()) {
      // @ts-ignore
      dragStartPos =
        e.target === dragEl
          ? getPointerPosition(e) -
            (e.target as HTMLElement).getBoundingClientRect()[
              swiper.isHorizontal() ? 'left' : 'top'
            ]
          : null
      e.preventDefault()
      e.stopPropagation()
    } else {
      const axis = swiper.isHorizontal() ? 'x' : 'y'
      const currentTransform = extractTranslateValue(
        // @ts-ignore
        (el as HTMLElement).dragElRef.style.transform,
        axis
      )
      if (
        isInRange(
          getPointerPosition(e),
          currentTransform as number,
          (currentTransform as number) + dragSize
        )
      ) {
        dragStartPos = getPointerPosition(e) - (currentTransform as number)
      } else {
        // @ts-ignore
        dragStartPos = null
      }
    }

    wrapperEl.style.transitionDuration = '100ms'
    ;(dragEl as HTMLElement).style.transitionDuration = '100ms'
    setDragPosition(e)

    clearTimeout(dragTimeout as number)
    ;(el as HTMLElement).style.transitionDuration = '0ms'
    if (params.hide) {
      ;(el as HTMLElement).style.opacity = '1'
    }
    if (swiper.params.cssMode) {
      // @ts-ignore
      ;(swiper.wrapperEl as HTMLElement).style['scroll-snap-type'] = 'none'
    }
    emit('scrollbarDragStart', e)
  }

  function onDragMove(e: TouchEvent | MouseEvent | PointerEvent): void {
    const { scrollbar, wrapperEl } = swiper
    const { el, dragEl } = scrollbar

    if (!isTouched) return
    if (e.preventDefault) e.preventDefault()
    else e.returnValue = false
    setDragPosition(e)
    wrapperEl.style.transitionDuration = '0ms'
    ;(el as HTMLElement).style.transitionDuration = '0ms'
    ;(dragEl as HTMLElement).style.transitionDuration = '0ms'
    emit('scrollbarDragMove', e)
  }

  function onDragEnd(e: TouchEvent | MouseEvent | PointerEvent): void {
    const params = swiper.params.scrollbar as ScrollbarOptions
    const { scrollbar, wrapperEl } = swiper
    const { el } = scrollbar

    if (!isTouched) return
    isTouched = false
    if (swiper.params.cssMode) {
      // @ts-ignore
      swiper.wrapperEl.style['scroll-snap-type'] = ''
      wrapperEl.style.transitionDuration = ''
    }
    if (params.hide) {
      clearTimeout(dragTimeout as number)
      dragTimeout = setTimeout(() => {
        ;(el as HTMLElement).style.opacity = '0'
        ;(el as HTMLElement).style.transitionDuration = '400ms'
      }, 1000)
    }
    emit('scrollbarDragEnd', e)
    if (params.snapOnRelease) {
      swiper.slideToClosest()
    }
  }

  function events(method: 'on' | 'off'): void {
    const { scrollbar, params } = swiper
    const { el } = scrollbar
    if (!el) return
    const target = el
    const activeListener = params.passiveListeners
      ? { passive: false, capture: false }
      : false
    const passiveListener = params.passiveListeners
      ? { passive: true, capture: false }
      : false
    if (!target) return
    const eventMethod =
      method === 'on' ? 'addEventListener' : 'removeEventListener'
    if (isWeb()) {
      target[eventMethod](
        'pointerdown',
        onDragStart as EventListener,
        activeListener
      )
      document[eventMethod](
        'pointermove',
        onDragMove as EventListener,
        activeListener
      )
      document[eventMethod](
        'pointerup',
        onDragEnd as EventListener,
        passiveListener
      )
    } else {
      // @ts-ignore
      target[eventMethod]('touchstart', onDragStart.bind(this), 'touchstart')
      // @ts-ignore
      target[eventMethod]('touchmove', onDragMove.bind(this), 'touchmove')
      // @ts-ignore
      target[eventMethod]('touchend', onDragEnd.bind(this), 'touchend')
    }
  }

  function enableDraggable(): void {
    if (
      !(swiper.params.scrollbar as ScrollbarOptions)?.el ||
      !swiper.scrollbar.el
    )
      return
    events('on')
  }

  function disableDraggable(): void {
    if (
      !(swiper.params.scrollbar as ScrollbarOptions)?.el ||
      !swiper.scrollbar.el
    )
      return
    events('off')
  }

  function init(): void {
    const { scrollbar, el: swiperEl } = swiper
    swiper.params.scrollbar = createElementIfNotDefined(
      swiper,
      swiper.originalParams.scrollbar as Record<string, any>,
      swiper.params.scrollbar as Record<string, any>,
      { el: 'swiper-scrollbar' }
    )
    const params = swiper.params.scrollbar as ScrollbarOptions
    if (!params.el) return

    let el: HTMLElement | null = null
    if (typeof params.el === 'string' && swiper.isElement) {
      el = (swiper.el as HTMLElement).querySelector(params.el)
    }
    if (!el && typeof params.el === 'string') {
      el = document.querySelectorAll(params.el)[0] as HTMLElement
      if (!el) return
    } else if (!el) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      el = params.el as any
    }

    if (
      swiper.params.uniqueNavElements &&
      typeof params.el === 'string' &&
      // @ts-ignore
      (el as HTMLElement[]).length > 1 &&
      (swiperEl as HTMLElement).querySelectorAll(params.el).length === 1
    ) {
      el = (swiperEl as HTMLElement).querySelector(params.el)
    }
    // @ts-ignore
    if (el.length > 0) el = el[0]

    el?.classList.add(
      swiper.isHorizontal()
        ? (params.horizontalClass as string)
        : (params.verticalClass as string)
    )

    let dragEl: HTMLElement

    if (el) {
      if (isWeb()) {
        dragEl = el.querySelector(
          classesToSelector(swiper.params.scrollbar.dragClass)
        ) as HTMLElement
        if (!dragEl) {
          dragEl = createElement(
            'div',
            swiper.params.scrollbar.dragClass
          ) as HTMLElement
          el.append(dragEl)
        }
      } else {
        // @ts-ignore
        dragEl = el.dragElRef
      }
    }

    Object.assign(scrollbar, {
      el,
      // @ts-ignore
      dragEl
    })

    if (params.draggable) {
      enableDraggable()
    }

    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](
        ...classesToTokens(swiper.params.scrollbar.lockClass)
      )
    }
  }

  function destroy(): void {
    const params = swiper.params.scrollbar as ScrollbarOptions
    const { el } = swiper.scrollbar
    if (el) {
      el.classList.remove(
        ...classesToTokens(
          swiper.isHorizontal() ? params.horizontalClass : params.verticalClass
        )
      )
    }
    disableDraggable()
  }

  on('changeDirection', () => {
    if (!swiper.scrollbar || !swiper.scrollbar.el) return
    const params = swiper.params.scrollbar
    let { el } = swiper.scrollbar
    // @ts-ignore
    el = makeElementsArray(el) as HTMLElement[]
    // @ts-ignore
    el.forEach((subEl) => {
      subEl.classList.remove(
        (params as ScrollbarOptions).horizontalClass,
        (params as ScrollbarOptions).verticalClass
      )
      subEl.classList.add(
        swiper.isHorizontal()
          ? (params as ScrollbarOptions).horizontalClass
          : (params as ScrollbarOptions).verticalClass
      )
    })
  })

  on('init', () => {
    if ((swiper.params.scrollbar as ScrollbarOptions).enabled === false) {
      disable()
    } else {
      init()
      updateSize()
      setTranslate()
    }
  })

  on('update resize observerUpdate lock unlock changeDirection', () => {
    updateSize()
  })

  on('setTranslate', () => {
    setTranslate()
  })

  on('setTransition', (_s: any, duration: number) => {
    setTransition(duration)
  })

  on('enable disable', () => {
    const { el } = swiper.scrollbar
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](
        ...classesToTokens(
          (swiper.params.scrollbar as ScrollbarOptions).lockClass
        )
      )
    }
  })

  on('destroy', () => {
    destroy()
  })

  const enable = () => {
    swiper.el.classList.remove(
      ...classesToTokens(
        (swiper.params.scrollbar as ScrollbarOptions).scrollbarDisabledClass
      )
    )
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(
        ...classesToTokens(
          (swiper.params.scrollbar as ScrollbarOptions).scrollbarDisabledClass
        )
      )
    }
    init()
    updateSize()
    setTranslate()
  }

  const disable = () => {
    swiper.el.classList.add(
      ...classesToTokens(
        (swiper.params.scrollbar as ScrollbarOptions).scrollbarDisabledClass
      )
    )
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(
        ...classesToTokens(
          (swiper.params.scrollbar as ScrollbarOptions).scrollbarDisabledClass
        )
      )
    }
    destroy()
  }

  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  })
}
