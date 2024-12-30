import {
  extend,
  deleteProps,
  createElement,
  elementChildren,
  elementStyle,
  elementIndex,
  isWeb
} from '../shared/utils'
import { getSupport } from '../shared/get-support'
import { getDevice } from '../shared/get-device'
import { getBrowser } from '../shared/get-browser'

import Resize from './modules/resize/resize'
import Observer from './modules/observer/observer'

import eventsEmitter from './events-emitter'
import update from './update'
import translate from './translate'
import transition from './transition'
import slide from './slide'
import loop from './loop'
import grabCursor from './grab-cursor'
import events from './events'
import breakpoints from './breakpoints'
import checkOverflow from './check-overflow'
import classes from './classes'

import defaults from './defaults'
import moduleExtendParams from './module-extend-params'
import { processLazyPreloader, preload } from '../shared/process-lazy-preloader'

import type { SwiperClass } from '../../types/components/core/core'
import type { SwiperOptions } from '../../types/swiper-options'
import type { SwiperModule } from '../../types/shared'
import type { SwiperItemInstance } from '../../types/swiper-item-instance'
import type { SwiperInterface } from '../../types/swiper-class'
import type { VirtualOptions } from '../../types/modules/virtual'

const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events,
  breakpoints,
  checkOverflow,
  classes
}

const extendedDefaults: SwiperOptions = {}

class Swiper {
  [x: string]: any

  constructor(...args: [HTMLElement | string | SwiperOptions, SwiperOptions?]) {
    let el: HTMLElement | string | undefined
    let params: SwiperOptions

    if (
      args.length === 1 &&
      args[0].constructor &&
      Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object'
    ) {
      params = args[0] as SwiperOptions
    } else {
      ;[el, params] = args as [HTMLElement | string, SwiperOptions]
    }

    if (!params) params = {}

    params = extend({}, params)
    if (el && !params.el) params.el = el

    if (
      params.el &&
      typeof params.el === 'string' &&
      document.querySelectorAll(params.el).length > 1
    ) {
      const swipers: Swiper[] = []
      document.querySelectorAll(params.el).forEach((containerEl) => {
        const newParams = extend({}, params, { el: containerEl as HTMLElement })
        swipers.push(new Swiper(newParams))
      })
      // eslint-disable-next-line no-constructor-return
      // @ts-ignore
      return swipers
    }

    const swiper = this
    swiper.__swiper__ = true
    swiper.support = getSupport()
    swiper.device = getDevice({ userAgent: params.userAgent as string })
    swiper.browser = getBrowser()

    swiper.eventsListeners = {}
    swiper.eventsAnyListeners = []
    if (typeof swiper.modules === 'undefined') {
      swiper.modules = []
    }
    swiper.modules = [...(swiper as any).__modules__]
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules)
    }

    const allModulesParams: Record<string, any> = {}
    swiper.modules.forEach((mod: any) => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      })
    })

    // Extend defaults with modules params
    const swiperParams = extend({}, defaults, allModulesParams)

    // Extend defaults with passed params
    swiper.params = extend({}, swiperParams, extendedDefaults, params)
    swiper.originalParams = extend({}, swiper.params)
    swiper.passedParams = extend({}, params)

    // add event listeners
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach((eventName) => {
        // @ts-ignore
        swiper.on(eventName, swiper.params.on[eventName])
      })
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny)
    }

    // Extend Swiper
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal'
      },
      isVertical() {
        return swiper.params.direction === 'vertical'
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        // Returns 0 unless `translate` is > 2**23
        // Should be subtracted from css values to prevent overflow
        return Math.trunc(swiper.translate / 2 ** 23) * 2 ** 23
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        startMoving: undefined,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,

      // Touches
      allowTouchMove: swiper.params.allowTouchMove,

      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },

      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    })

    swiper.emit('_swiper')

    // Init
    if (swiper.params.init) {
      swiper.init(el as HTMLElement)
    }

    return swiper
  }

  getDirectionLabel(property: string): string {
    const swiper = this
    if (swiper.isHorizontal()) {
      return property
    }
    // prettier-ignore
    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom',
    }[property] as string
  }

  getSlideIndex(slideEl: HTMLElement): number {
    const swiper = this
    const { slidesEl, params } = swiper
    const slides = elementChildren(
      slidesEl,
      `.${params.slideClass}, swiper-slide`
    )
    const firstSlideIndex = elementIndex(slides[0], slidesEl)
    // @ts-ignore
    return elementIndex(slideEl, slidesEl) - Number(firstSlideIndex)
  }

  getSlideIndexByData(index: number): number {
    if (isWeb()) {
      return this.getSlideIndex(
        this.slides.filter(
          (slideEl: HTMLElement) =>
            Number(slideEl.getAttribute('data-swiper-slide-index')) * 1 ===
            index
        )[0]
      )
    }
    return this.getSlideIndex(
      this.slides.filter(
        (slideEl: HTMLElement) =>
          Number(slideEl.getAttribute('data-swiper-slide-index')) * 1 === index
      )[0]
    )
  }

  recalcSlides(): void {
    const swiper = this
    const { slidesEl, params } = swiper
    swiper.slides = elementChildren(
      slidesEl,
      `.${params.slideClass}, swiper-slide`
    )
  }

  enable(): void {
    const swiper = this
    if (swiper.enabled) return
    swiper.enabled = true
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor()
    }
    swiper.emit('enable')
  }

  disable(): void {
    const swiper = this
    if (!swiper.enabled) return
    swiper.enabled = false
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor()
    }
    swiper.emit('disable')
  }

  setProgress(progress: number, speed?: number): void {
    const swiper = this
    progress = Math.min(Math.max(progress, 0), 1)
    const min = swiper.minTranslate()
    const max = swiper.maxTranslate()
    const current = (max - min) * progress + min
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed)
    swiper.updateActiveIndex()
    swiper.updateSlidesClasses()
  }

  emitContainerClasses(): void {
    const swiper = this
    if (!swiper.params._emitClasses || !swiper.el) return
    const cls = (swiper.el as HTMLElement).className
      .split(' ')
      .filter((className) => {
        return (
          className.indexOf('swiper') === 0 ||
          className.indexOf(swiper.params.containerModifierClass as string) ===
            0
        )
      })
    swiper.emit('_containerClasses', cls.join(' '))
  }

  getSlideClasses(slideEl: HTMLElement): string {
    const swiper = this
    if (swiper.destroyed) return ''
    return slideEl.className
      .split(' ')
      .filter((className) => {
        return (
          className.indexOf('swiper-slide') === 0 ||
          className.indexOf(swiper.params.slideClass as string) === 0
        )
      })
      .join(' ')
  }

  emitSlidesClasses(): void {
    const swiper = this
    if (!swiper.params._emitClasses || !swiper.el) return
    const updates: Array<{ slideEl: HTMLElement; classNames: string }> = []
    swiper.slides.forEach((slideEl: HTMLElement) => {
      const classNames = swiper.getSlideClasses(slideEl)
      updates.push({ slideEl, classNames })
      swiper.emit('_slideClass', slideEl, classNames)
    })
    swiper.emit('_slideClasses', updates)
  }

  slidesPerViewDynamic(view = 'current', exact = false): number {
    const swiper = this
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper
    let spv = 1

    if (typeof params.slidesPerView === 'number') return params.slidesPerView

    if (params.centeredSlides) {
      let slideSize = slides[activeIndex]
        ? Math.ceil(
            (slides[activeIndex] as unknown as SwiperItemInstance)
              .swiperSlideSize
          )
        : 0
      let breakLoop
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(
            (slides[i] as unknown as SwiperItemInstance).swiperSlideSize
          )
          spv += 1
          if (slideSize > swiperSize) breakLoop = true
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += (slides[i] as unknown as SwiperItemInstance)
            .swiperSlideSize
          spv += 1
          if (slideSize > swiperSize) breakLoop = true
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact
            ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] <
              swiperSize
            : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize
          if (slideInView) {
            spv += 1
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView =
            slidesGrid[activeIndex] - slidesGrid[i] < swiperSize
          if (slideInView) {
            spv += 1
          }
        }
      }
    }
    return spv
  }

  update() {
    const swiper = this
    if (!swiper || swiper.destroyed) return
    const { snapGrid, params } = swiper
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint()
    }

    if (isWeb()) {
      Array.from(
        (swiper.el as HTMLElement).querySelectorAll('[loading="lazy"]')
      ).forEach((imageEl) => {
        if ((imageEl as HTMLImageElement).complete) {
          processLazyPreloader(
            swiper as unknown as SwiperInterface,
            imageEl as HTMLElement
          )
        }
      })
    }

    swiper.updateSize()
    swiper.updateSlides()
    swiper.updateProgress()
    swiper.updateSlidesClasses()

    function setTranslate() {
      const translateValue = swiper.rtlTranslate
        ? swiper.translate * -1
        : swiper.translate
      const newTranslate = Math.min(
        Math.max(translateValue, swiper.maxTranslate()),
        swiper.minTranslate()
      )
      swiper.setTranslate(newTranslate)
      swiper.updateActiveIndex()
      swiper.updateSlidesClasses()
    }
    let translated: boolean | undefined
    if (
      params.freeMode &&
      typeof params.freeMode === 'object' &&
      params.freeMode.enabled &&
      !params.cssMode
    ) {
      setTranslate()
      if (params.autoHeight) {
        swiper.updateAutoHeight()
      }
    } else {
      if (
        (params.slidesPerView === 'auto' ||
          (params.slidesPerView && params.slidesPerView > 1)) &&
        swiper.isEnd &&
        !params.centeredSlides
      ) {
        const slides =
          swiper.virtual &&
          typeof params.virtual === 'object' &&
          params.virtual.enabled
            ? (swiper.virtual as VirtualOptions<any>).slides
            : swiper.slides
        translated = swiper.slideTo((slides || []).length - 1, 0, false, true)
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true)
      }
      if (!translated) {
        setTranslate()
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow()
    }
    swiper.emit('update')
  }

  changeDirection(
    newDirection: 'horizontal' | 'vertical',
    needUpdate = true
  ): SwiperClass {
    const swiper = this
    const currentDirection = swiper.params.direction
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection =
        currentDirection === 'horizontal' ? 'vertical' : 'horizontal'
    }
    if (
      newDirection === currentDirection ||
      (newDirection !== 'horizontal' && newDirection !== 'vertical')
    ) {
      return swiper as unknown as SwiperClass
    }

    ;(swiper.el as HTMLElement).classList.remove(
      `${swiper.params.containerModifierClass}${currentDirection}`
    )
    ;(swiper.el as HTMLElement).classList.add(
      `${swiper.params.containerModifierClass}${newDirection}`
    )
    swiper.emitContainerClasses()

    swiper.params.direction = newDirection

    swiper.slides.forEach((slideEl: HTMLElement) => {
      if (newDirection === 'vertical') {
        slideEl.style.width = ''
      } else {
        slideEl.style.height = ''
      }
    })

    swiper.emit('changeDirection')
    if (needUpdate) swiper.update()

    return swiper as unknown as SwiperClass
  }

  changeLanguageDirection(direction: 'rtl' | 'ltr'): void {
    const swiper = this
    if (
      (swiper.rtl && direction === 'rtl') ||
      (!swiper.rtl && direction === 'ltr')
    )
      return
    swiper.rtl = direction === 'rtl'
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl
    if (swiper.rtl) {
      ;(swiper.el as HTMLElement).classList.add(
        `${swiper.params.containerModifierClass}rtl`
      )
      ;(swiper.el as HTMLElement).dir = 'rtl'
    } else {
      ;(swiper.el as HTMLElement).classList.remove(
        `${swiper.params.containerModifierClass}rtl`
      )
      ;(swiper.el as HTMLElement).dir = 'ltr'
    }
    swiper.update()
  }

  mount(element?: HTMLElement | string, adapterEl?: any): boolean {
    const swiper = this
    if (swiper.mounted) return true

    // Find el
    let el = element || swiper.params.el
    if (isWeb() && typeof el === 'string') {
      el = document.querySelector(el) as HTMLElement
    }
    if (!el) {
      return false
    }

    // @ts-ignore
    el.swiper = swiper
    if (
      isWeb() &&
      (el as HTMLElement).parentNode &&
      // @ts-ignore
      (el as HTMLElement).parentNode?.host &&
      // @ts-ignore
      (el as HTMLElement).parentNode?.host.nodeName ===
        swiper.params.swiperElementNodeName?.toUpperCase()
    ) {
      swiper.isElement = true
    }

    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`
    }

    const getWrapper = () => {
      if (isWeb()) {
        if (
          el &&
          (el as HTMLElement).shadowRoot &&
          !!(el as HTMLElement).shadowRoot?.querySelector
        ) {
          const res = (el as HTMLElement).shadowRoot?.querySelector(
            getWrapperSelector()
          )
          // Children needs to return slot items
          return res
        }
        return elementChildren(el, getWrapperSelector())[0]
      }
      // @ts-ignore
      return el.wrapperEl
    }

    // Find Wrapper
    let wrapperEl = getWrapper()
    if (isWeb() && !wrapperEl && swiper.params.createElements) {
      wrapperEl = createElement('div', swiper.params.wrapperClass)
      ;(el as HTMLElement).append(wrapperEl)
      elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
        wrapperEl.append(slideEl)
      })
    }

    Object.assign(swiper, {
      el,
      wrapperEl,
      adapterEl,
      slidesEl:
        swiper.isElement &&
        // @ts-ignore
        !(el as HTMLElement).parentNode.host.slideSlots
          ? // @ts-ignore
            (el as HTMLElement).parentNode?.host
          : wrapperEl,
      hostEl: swiper.isElement
        ? // @ts-ignore
          (el as HTMLElement).parentNode?.host
        : el,
      mounted: true,

      // RTL
      rtl:
        isWeb() &&
        // @ts-ignore
        (el.dir.toLowerCase() === 'rtl' ||
          elementStyle(el, 'direction') === 'rtl'),
      rtlTranslate:
        isWeb() &&
        swiper.params.direction === 'horizontal' &&
        // @ts-ignore
        (el.dir.toLowerCase() === 'rtl' ||
          elementStyle(el, 'direction') === 'rtl'),
      wrongRTL: isWeb() && elementStyle(wrapperEl, 'display') === '-webkit-box'
    })

    return true
  }

  init(el?: HTMLElement, adapterEl?: any): SwiperClass {
    const swiper = this
    if (swiper.initialized) return swiper as unknown as SwiperClass

    const mounted = swiper.mount(el, adapterEl)
    if (mounted === false) return swiper as unknown as SwiperClass

    swiper.emit('beforeInit')

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint()
    }

    // Add Classes
    swiper.addClasses()

    // Update size
    swiper.updateSize()
    // Update slides
    swiper.updateSlides()

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow()
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor()
    }

    // Slide To Initial Slide
    if (
      swiper.params.loop &&
      swiper.virtual &&
      typeof swiper.params.virtual === 'object' &&
      swiper.params.virtual.enabled
    ) {
      swiper.slideTo(
        swiper.params.initialSlide +
          // @ts-ignore
          (swiper.virtual as VirtualOptions<any>).slidesBefore,
        0,
        swiper.params.runCallbacksOnInit,
        false,
        true
      )
    } else {
      swiper.slideTo(
        Number(swiper.params.initialSlide),
        0,
        swiper.params.runCallbacksOnInit,
        false,
        true
      )
    }

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate()
    }

    // Attach events
    swiper.attachEvents()
    if (isWeb()) {
      const lazyElements = Array.from(
        (swiper.el as HTMLElement).querySelectorAll('[loading="lazy"]')
      )
      if (swiper.isElement) {
        lazyElements.push(
          ...Array.from(
            (swiper.hostEl as HTMLElement).querySelectorAll('[loading="lazy"]')
          )
        )
      }
      lazyElements.forEach((imageEl) => {
        if ((imageEl as HTMLImageElement).complete) {
          processLazyPreloader(
            swiper as unknown as SwiperInterface,
            imageEl as HTMLElement
          )
        } else {
          ;(imageEl as HTMLImageElement).addEventListener('load', (e) => {
            processLazyPreloader(
              swiper as unknown as SwiperInterface,
              e.target as HTMLElement
            )
          })
        }
      })
      preload(swiper as unknown as SwiperInterface)
    }

    // Init Flag
    swiper.initialized = true
    if (isWeb()) {
      preload(swiper as unknown as SwiperInterface)
    }

    // Emit
    swiper.emit('init')
    swiper.emit('afterInit')

    return swiper as unknown as SwiperClass
  }

  destroy(deleteInstance = true, cleanStyles = true): null {
    const swiper = this
    const { params, el, wrapperEl, slides } = swiper

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null
    }

    swiper.emit('beforeDestroy')

    // Init Flag
    swiper.initialized = false

    // Detach events
    swiper.detachEvents()

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy()
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses()
      if (el && typeof el !== 'string') {
        el.removeAttribute('style')
      }
      if (wrapperEl) {
        wrapperEl.removeAttribute('style')
      }
      if (slides && slides.length) {
        slides.forEach((slideEl: HTMLElement) => {
          slideEl.classList.remove(
            params.slideVisibleClass as string,
            params.slideFullyVisibleClass as string,
            params.slideActiveClass as string,
            params.slideNextClass as string,
            params.slidePrevClass as string
          )
          slideEl.removeAttribute('style')
          slideEl.removeAttribute('data-swiper-slide-index')
        })
      }
    }

    swiper.emit('destroy')

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach((eventName) => {
      swiper.off(eventName)
    })

    if (deleteInstance !== false) {
      if (swiper.el && typeof swiper.el !== 'string') {
        // @ts-ignore
        swiper.el.swiper = null
      }
      deleteProps(swiper)
    }
    swiper.destroyed = true

    return null
  }

  static extendDefaults(newDefaults: SwiperOptions): void {
    extend(extendedDefaults, newDefaults)
  }

  static get extendedDefaults(): SwiperOptions {
    return extendedDefaults
  }

  static get defaults(): SwiperOptions {
    // @ts-ignore
    return defaults
  }

  static installModule(mod: SwiperModule): void {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = []
    const modules = Swiper.prototype.__modules__

    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod)
    }
  }

  static use(module: SwiperModule | SwiperModule[]): typeof Swiper {
    if (Array.isArray(module)) {
      module.forEach((m) => Swiper.installModule(m))
      return Swiper
    }
    Swiper.installModule(module)
    return Swiper
  }
}

// Add prototypes
Object.keys(prototypes).forEach((prototypeGroup) => {
  // @ts-ignore
  Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
    // @ts-ignore
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod]
  })
})

// @ts-ignore
Swiper.use([Resize, Observer])

export default Swiper
