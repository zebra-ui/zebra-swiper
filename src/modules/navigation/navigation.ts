import createElementIfNotDefined from '../../components/shared/create-element-if-not-defined'
import { isWeb, makeElementsArray } from '../../components/shared/utils'
import type { NavigationOptions } from '../../types/modules/navigation'
import type { SwiperInterface } from '../../types/swiper-class'
import type { PaginationOptions } from '../../types/modules/pagination'

export default function Navigation({
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
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    } as NavigationOptions
  })

  swiper.navigation = {
    // @ts-ignore
    nextEl: null,
    // @ts-ignore
    prevEl: null
  }

  function getEl(
    el: string | HTMLElement | null
  ): HTMLElement | HTMLElement[] | null {
    let res: HTMLElement | HTMLElement[] | null = null

    if (el && typeof el === 'string' && swiper.isElement) {
      res =
        ((swiper.el as HTMLElement).querySelector(el) as HTMLElement) ||
        ((swiper.hostEl as HTMLElement).querySelector(el) as HTMLElement)
      if (res) return res
    }

    if (el) {
      if (typeof el === 'string') {
        res = Array.from(document.querySelectorAll(el)) as HTMLElement[]
      }
      if (
        swiper.params.uniqueNavElements &&
        typeof el === 'string' &&
        Array.isArray(res) &&
        res.length > 1 &&
        (swiper.el as HTMLElement).querySelectorAll(el).length === 1
      ) {
        res = (swiper.el as HTMLElement).querySelector(el) as HTMLElement
      } else if (Array.isArray(res) && res.length === 1) {
        res = res[0]
      }
    }

    return el && !res ? (el as HTMLElement) : (res as HTMLElement)
  }

  function toggleEl(el: HTMLElement | HTMLElement[] | null, disabled: boolean) {
    const params = swiper.params.navigation as NavigationOptions
    el = makeElementsArray(el) as HTMLElement[]

    el.forEach((subEl) => {
      if (subEl) {
        subEl.classList[disabled ? 'add' : 'remove'](
          ...(params.disabledClass as string).split(' ')
        )
        if (subEl.tagName === 'BUTTON') {
          ;(subEl as HTMLButtonElement).disabled = disabled
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? 'add' : 'remove'](
            params.lockClass as string
          )
        }
      }
    })
  }

  function update() {
    // Update Navigation Buttons
    const { nextEl, prevEl } = swiper.navigation

    if (swiper.params.loop) {
      toggleEl(prevEl, false)
      toggleEl(nextEl, false)
      return
    }

    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind)
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind)
  }

  function onPrevClick(e: Event) {
    e.preventDefault()
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
      return
    swiper.slidePrev()
    emit('navigationPrev')
  }

  function onNextClick(e: Event) {
    e.preventDefault()
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return
    swiper.slideNext()
    emit('navigationNext')
  }

  function init() {
    const params = swiper.params.navigation as NavigationOptions

    if (isWeb()) {
      swiper.params.navigation = createElementIfNotDefined(
        swiper,
        swiper.originalParams.navigation as Record<string, any>,
        swiper.params.navigation as Record<string, any>,
        {
          nextEl: 'swiper-button-next',
          prevEl: 'swiper-button-prev'
        }
      )
    }

    if (!(params.nextEl || params.prevEl)) return

    let nextEl = getEl(params.nextEl as string | HTMLElement | null)
    let prevEl = getEl(params.prevEl as string | HTMLElement | null)

    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    })

    nextEl = makeElementsArray(nextEl as HTMLElement | HTMLElement[])
    prevEl = makeElementsArray(prevEl as HTMLElement | HTMLElement[])

    const initButton = (el: HTMLElement, dir: 'next' | 'prev') => {
      if (el) {
        if (isWeb()) {
          el.addEventListener(
            'click',
            dir === 'next' ? onNextClick : onPrevClick
          )
        } else {
          el.addEventListener(
            'click',
            // @ts-ignore
            dir === 'next' ? onNextClick.bind(this) : onPrevClick.bind(this),
            // @ts-ignore
            'onClick'
          )
        }
      }
      if (!swiper.enabled && el) {
        el.classList.add(...(params.lockClass as string).split(' '))
      }
    }

    nextEl.forEach((el) => initButton(el, 'next'))
    prevEl.forEach((el) => initButton(el, 'prev'))
  }

  function destroy() {
    let { nextEl, prevEl } = swiper.navigation
    nextEl = makeElementsArray(nextEl) as HTMLElement[]
    prevEl = makeElementsArray(prevEl) as HTMLElement[]

    const destroyButton = (el: HTMLElement, dir: 'next' | 'prev') => {
      if (isWeb()) {
        el.removeEventListener(
          'click',
          dir === 'next' ? onNextClick : onPrevClick
        )
      } else {
        el.removeEventListener(
          'click',
          // @ts-ignore
          dir === 'next' ? onNextClick.bind(this) : onPrevClick.bind(this),
          // @ts-ignore
          'onClick'
        )
      }
      el.classList.remove(
        ...(
          (swiper.params.navigation as NavigationOptions)
            .disabledClass as string
        ).split(' ')
      )
    }

    nextEl.forEach((el) => destroyButton(el, 'next'))
    prevEl.forEach((el) => destroyButton(el, 'prev'))
  }

  on('init', () => {
    if ((swiper.params.navigation as NavigationOptions).enabled === false) {
      disable()
    } else {
      init()
      update()
    }
  })

  on('toEdge fromEdge lock unlock', () => {
    update()
  })

  on('destroy', () => {
    destroy()
  })

  on('enable disable', () => {
    let { nextEl, prevEl } = swiper.navigation
    nextEl = makeElementsArray(nextEl)
    prevEl = makeElementsArray(prevEl)

    if (swiper.enabled) {
      update()
      return
    }
    ;[...nextEl, ...prevEl]
      .filter((el) => !!el)
      .forEach((el) =>
        el.classList.add(
          (swiper.params.navigation as NavigationOptions).lockClass as string
        )
      )
  })

  on('click', (_s: any, e: Event & { path?: HTMLElement[] }) => {
    let { nextEl, prevEl } = swiper.navigation
    nextEl = makeElementsArray(nextEl)
    prevEl = makeElementsArray(prevEl)

    const targetEl = e.target as HTMLElement
    let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl)

    if (swiper.isElement && !targetIsButton) {
      const path = e.path || (e.composedPath && e.composedPath())
      if (path) {
        targetIsButton = !!path.find(
          (pathEl) =>
            nextEl.includes(pathEl as HTMLElement) ||
            prevEl.includes(pathEl as HTMLElement)
        )
      }
    }

    if (
      (swiper.params.navigation as NavigationOptions).hideOnClick &&
      !targetIsButton
    ) {
      if (
        swiper.pagination &&
        swiper.params.pagination &&
        (swiper.params.pagination as PaginationOptions).clickable &&
        (swiper.pagination.el === targetEl ||
          swiper.pagination.el.contains(targetEl))
      )
        return

      let isHidden
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(
          (swiper.params.navigation as NavigationOptions).hiddenClass as string
        )
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(
          (swiper.params.navigation as NavigationOptions).hiddenClass as string
        )
      }

      if (isHidden === true) {
        emit('navigationShow')
      } else {
        emit('navigationHide')
      }
      ;[...nextEl, ...prevEl]
        .filter((el) => !!el)
        .forEach((el) =>
          el.classList.toggle(
            (swiper.params.navigation as NavigationOptions)
              .hiddenClass as string
          )
        )
    }
  })

  const enable = () => {
    swiper.el.classList.remove(
      ...(
        (swiper.params.navigation as NavigationOptions)
          .navigationDisabledClass as string
      ).split(' ')
    )
    init()
    update()
  }

  const disable = () => {
    swiper.el.classList.add(
      ...(
        (swiper.params.navigation as NavigationOptions)
          .navigationDisabledClass as string
      ).split(' ')
    )
    destroy()
  }

  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  })
}
