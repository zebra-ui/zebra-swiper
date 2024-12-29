import type { PropType } from 'vue'
import type { SwiperModule } from '../../shared'

export interface SwiperEffect {
  [key: string]: any
}

export interface SwiperGrid {
  rows?: number
  fill?: string
}

export type SwiperProps = Partial<{
  list: PropType<any[]>
  virtualList: PropType<any[]>
  customStyle: PropType<Record<string, any>>
  modules: {
    type: PropType<SwiperModule[]>
    default: undefined
  }
  init: boolean
  direction: 'horizontal' | 'vertical' | string
  oneWayMovement: boolean
  swiperElementNodeName: string | null
  touchEventsTarget: string
  initialSlide: number
  speed: number
  cssMode: boolean
  updateOnWindowResize: boolean
  resizeObserver: boolean
  nested: boolean
  focusableElements: string
  width: number | null
  height: number | null
  preventInteractionOnTransition: boolean
  userAgent: string | null
  url: string | null
  edgeSwipeDetection: boolean | string
  edgeSwipeThreshold: number
  autoHeight: boolean
  setWrapperSize: boolean
  virtualTranslate: boolean
  effect: string
  breakpoints: Record<string, any>
  breakpointsBase: string
  spaceBetween: number | string
  slidesPerView: number | 'auto'
  maxBackfaceHiddenSlides: number
  slidesPerGroup: number
  slidesPerGroupSkip: number
  slidesPerGroupAuto: boolean
  centeredSlides: boolean
  centeredSlidesBounds: boolean
  slidesOffsetBefore: number
  slidesOffsetAfter: number
  normalizeSlideIndex: boolean
  centerInsufficientSlides: boolean
  watchOverflow: boolean
  roundLengths: boolean
  touchRatio: number
  touchAngle: number
  simulateTouch: boolean
  shortSwipes: boolean
  longSwipes: boolean
  longSwipesRatio: number
  longSwipesMs: number
  followFinger: boolean
  allowTouchMove: boolean
  threshold: number
  touchMoveStopPropagation: boolean
  touchStartPreventDefault: boolean
  touchStartForcePreventDefault: boolean
  touchReleaseOnEdges: boolean
  uniqueNavElements: boolean
  resistance: boolean
  resistanceRatio: number
  watchSlidesProgress: boolean
  grabCursor: boolean
  preventClicks: boolean
  preventClicksPropagation: boolean
  slideToClickedSlide: boolean
  loop: boolean
  loopedSlides: number
  loopPreventsSliding: boolean
  rewind: boolean
  allowSlidePrev: boolean
  allowSlideNext: boolean
  swipeHandler: boolean | null
  noSwiping: boolean
  noSwipingClass: string
  noSwipingSelector: string | null
  passiveListeners: boolean
  containerModifierClass: string
  slideClass: string
  slideActiveClass: string
  slideVisibleClass: string
  slideFullyVisibleClass: string
  slideBlankClass: string
  slideNextClass: string
  slidePrevClass: string
  wrapperClass: string
  lazyPreloaderClass: string
  lazyPreloadPrevNext: number
  runCallbacksOnInit: boolean
  observer: boolean
  observeParents: boolean
  observeSlideChildren: boolean
  a11y: boolean | Record<string, any>
  autoplay: boolean | Record<string, any>
  controller: Record<string, any>
  coverflowEffect: SwiperEffect
  cubeEffect: SwiperEffect
  fadeEffect: SwiperEffect
  flipEffect: SwiperEffect
  creativeEffect: SwiperEffect
  cardsEffect: SwiperEffect
  customEffect: SwiperEffect
  hashNavigation: boolean | Record<string, any>
  history: boolean | Record<string, any>
  keyboard: boolean | Record<string, any>
  mousewheel: boolean | Record<string, any>
  navigation: boolean | Record<string, any>
  pagination: boolean | Record<string, any>
  parallax: boolean | Record<string, any>
  scrollbar: boolean | Record<string, any>
  thumbs: Record<string, any>
  virtual: boolean | Record<string, any>
  zoom: boolean | Record<string, any>
  grid: SwiperGrid
  freeMode: boolean | Record<string, any>
  enabled: boolean
  createElements: boolean
  eventsPrefix: string
  loopAddBlankSlides: boolean
  loopAdditionalSlides: number
  _emitClasses: boolean
  resetWrapperHeight: boolean
}>
