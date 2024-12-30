import type { SwiperOptions } from '../../swiper-options'
import type { SwiperModule } from '../../shared'
import type { EventHandler } from './events-emitter'
import type Swiper from '../../swiper-class'

export interface SwiperCore {
  new (el?: string | HTMLElement, params?: SwiperOptions): SwiperClass
  prototype: SwiperClass & {
    __modules__?: SwiperModule[]
  }
  extendDefaults(newDefaults: SwiperOptions): void
  installModule(mod: SwiperModule): void
  use(module: SwiperModule | SwiperModule[]): typeof SwiperCore
  extendedDefaults: SwiperOptions
  defaults: SwiperOptions
  __modules__: SwiperModule[]
}

export interface SwiperClass extends Swiper {
  __swiper__: boolean
  support: any
  device: any
  browser: any
  eventsListeners: Record<string, EventHandler[]>
  eventsAnyListeners: EventHandler[]
  modules: SwiperModule[]
  params: SwiperOptions
  originalParams: SwiperOptions
  passedParams: SwiperOptions
  enabled: boolean
  el: HTMLElement | string
  wrapperEl: HTMLElement
  slidesEl: HTMLElement
  classNames: string[]
  slides: HTMLElement[]
  slidesGrid: number[]
  snapGrid: number[]
  slidesSizesGrid: number[]
  isHorizontal(): boolean
  isVertical(): boolean
  activeIndex: number
  realIndex: number
  isBeginning: boolean
  isEnd: boolean
  translate: number
  previousTranslate: number
  progress: number
  velocity: number
  animating: boolean
  cssOverflowAdjustment(): number
  allowSlideNext: boolean
  allowSlidePrev: boolean
  touchEventsData: {
    isTouched?: boolean
    isMoved?: boolean
    allowTouchCallbacks?: boolean
    touchStartTime?: number
    isScrolling?: boolean
    currentTranslate?: number
    startTranslate?: number
    allowThresholdMove?: boolean
    focusableElements: string
    lastClickTime: number
    clickTimeout?: any
    velocities: any[]
    allowMomentumBounce?: boolean
    startMoving?: boolean
    pointerId: number | null
    touchId: number | null
  }
  allowClick: boolean
  allowTouchMove: boolean
  touches: {
    startX: number
    startY: number
    currentX: number
    currentY: number
    diff: number
  }
  imagesToLoad: HTMLElement[]
  imagesLoaded: number
  isElement: boolean
  hostEl: HTMLElement
  rtlTranslate: boolean
  wrongRTL: boolean
  destroyed: boolean
  mounted: boolean

  init(el?: HTMLElement, adapterEl?: any): SwiperClass
  destroy(deleteInstance?: boolean, cleanStyles?: boolean): null
  emit(event: string, ...args: any[]): void
  update(): void
  mount(element?: HTMLElement | string, adapterEl?: any): boolean
  unmount(): void
  addClasses(): void
  removeClasses(): void
  getSlideIndex(slideEl: HTMLElement): number
  getSlideIndexByData(index: number): number
  recalcSlides(): void
  enable(): void
  disable(): void
  setProgress(progress: number, speed?: number): void
  emitContainerClasses(): void
  getSlideClasses(slideEl: HTMLElement): string
  emitSlidesClasses(): void
  slidesPerViewDynamic(view?: 'current' | 'previous', exact?: boolean): number
  changeDirection(
    newDirection: 'horizontal' | 'vertical',
    needUpdate?: boolean
  ): SwiperClass
  changeLanguageDirection(direction: 'rtl' | 'ltr'): void
  getDirectionLabel(property: string): string
}
