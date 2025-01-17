import type { PropType } from 'vue'
import type { SwiperModule } from '../../types/shared'

const props = {
  list: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  virtualList: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  customStyle: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({})
  },
  modules: {
    type: Array as PropType<SwiperModule[]>,
    default: () => []
  },
  init: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal'
  },
  oneWayMovement: {
    type: Boolean,
    default: false
  },
  swiperElementNodeName: {
    type: String,
    default: 'SWIPER-CONTAINER'
  },
  touchEventsTarget: {
    type: String,
    default: 'wrapper'
  },
  initialSlide: {
    type: Number,
    default: 0
  },
  speed: {
    type: Number,
    default: 300
  },
  cssMode: {
    type: Boolean,
    default: false
  },
  updateOnWindowResize: {
    type: Boolean,
    default: true
  },
  resizeObserver: {
    type: Boolean,
    default: true
  },
  nested: {
    type: Boolean,
    default: false
  },
  focusableElements: {
    type: String,
    default: 'input, select, option, textarea, button, video, label'
  },
  width: {
    type: Number,
    default: null
  },
  height: {
    type: Number,
    default: null
  },
  preventInteractionOnTransition: {
    type: Boolean,
    default: false
  },
  userAgent: {
    type: String,
    default: null
  },
  url: {
    type: String,
    default: null
  },
  edgeSwipeDetection: {
    type: [Boolean, String],
    default: false
  },
  edgeSwipeThreshold: {
    type: Number,
    default: 20
  },
  autoHeight: {
    type: Boolean,
    default: false
  },
  setWrapperSize: {
    type: Boolean,
    default: false
  },
  virtualTranslate: {
    type: Boolean,
    default: false
  },
  effect: {
    type: String,
    default: 'slide'
  },
  breakpoints: {
    type: Object as PropType<Record<string, any>>,
    default: undefined
  },
  breakpointsBase: {
    type: String,
    default: 'window'
  },
  spaceBetween: {
    type: [Number, String],
    default: 0
  },
  slidesPerView: {
    type: [Number, String],
    default: 1
  },
  maxBackfaceHiddenSlides: {
    type: Number,
    default: 10
  },
  slidesPerGroup: {
    type: Number,
    default: 1
  },
  slidesPerGroupSkip: {
    type: Number,
    default: 0
  },
  slidesPerGroupAuto: {
    type: Boolean,
    default: false
  },
  centeredSlides: {
    type: Boolean,
    default: false
  },
  centeredSlidesBounds: {
    type: Boolean,
    default: false
  },
  slidesOffsetBefore: {
    type: Number,
    default: 0
  },
  slidesOffsetAfter: {
    type: Number,
    default: 0
  },
  normalizeSlideIndex: {
    type: Boolean,
    default: true
  },
  centerInsufficientSlides: {
    type: Boolean,
    default: false
  },
  watchOverflow: {
    type: Boolean,
    default: true
  },
  roundLengths: {
    type: Boolean,
    default: false
  },
  touchRatio: {
    type: Number,
    default: 1
  },
  touchAngle: {
    type: Number,
    default: 45
  },
  simulateTouch: {
    type: Boolean,
    default: true
  },
  shortSwipes: {
    type: Boolean,
    default: true
  },
  longSwipes: {
    type: Boolean,
    default: true
  },
  longSwipesRatio: {
    type: Number,
    default: 0.5
  },
  longSwipesMs: {
    type: Number,
    default: 300
  },
  followFinger: {
    type: Boolean,
    default: true
  },
  allowTouchMove: {
    type: Boolean,
    default: true
  },
  threshold: {
    type: Number,
    default: 5
  },
  touchMoveStopPropagation: {
    type: Boolean,
    default: false
  },
  touchStartPreventDefault: {
    type: Boolean,
    default: true
  },
  touchStartForcePreventDefault: {
    type: Boolean,
    default: false
  },
  touchReleaseOnEdges: {
    type: Boolean,
    default: false
  },
  uniqueNavElements: {
    type: Boolean,
    default: true
  },
  resistance: {
    type: Boolean,
    default: true
  },
  resistanceRatio: {
    type: Number,
    default: 0.85
  },
  watchSlidesProgress: {
    type: Boolean,
    default: false
  },
  grabCursor: {
    type: Boolean,
    default: false
  },
  preventClicks: {
    type: Boolean,
    default: true
  },
  preventClicksPropagation: {
    type: Boolean,
    default: true
  },
  slideToClickedSlide: {
    type: Boolean,
    default: false
  },
  loop: {
    type: Boolean,
    default: false
  },
  loopedSlides: {
    type: Number,
    default: undefined
  },
  loopPreventsSliding: {
    type: Boolean,
    default: true
  },
  rewind: {
    type: Boolean,
    default: false
  },
  allowSlidePrev: {
    type: Boolean,
    default: true
  },
  allowSlideNext: {
    type: Boolean,
    default: true
  },
  swipeHandler: {
    type: String,
    default: null
  },
  noSwiping: {
    type: Boolean,
    default: true
  },
  noSwipingClass: {
    type: String,
    default: 'swiper-no-swiping'
  },
  noSwipingSelector: {
    type: String,
    default: null
  },
  passiveListeners: {
    type: Boolean,
    default: true
  },
  containerModifierClass: {
    type: String,
    default: 'swiper-'
  },
  slideClass: {
    type: String,
    default: 'swiper-slide'
  },
  slideActiveClass: {
    type: String,
    default: 'swiper-slide-active'
  },
  slideVisibleClass: {
    type: String,
    default: 'swiper-slide-visible'
  },
  slideFullyVisibleClass: {
    type: String,
    default: 'swiper-slide-fully-visible'
  },
  slideBlankClass: {
    type: String,
    default: 'swiper-slide-blank'
  },
  slideNextClass: {
    type: String,
    default: 'swiper-slide-next'
  },
  slidePrevClass: {
    type: String,
    default: 'swiper-slide-prev'
  },
  wrapperClass: {
    type: String,
    default: 'swiper-wrapper'
  },
  lazyPreloaderClass: {
    type: String,
    default: 'swiper-lazy-preloader'
  },
  lazyPreloadPrevNext: {
    type: Number,
    default: 0
  },
  runCallbacksOnInit: {
    type: Boolean,
    default: true
  },
  observer: {
    type: Boolean,
    default: undefined
  },
  observeParents: {
    type: Boolean,
    default: undefined
  },
  observeSlideChildren: {
    type: Boolean,
    default: undefined
  },
  a11y: {
    type: [Boolean, Object],
    default: undefined
  },
  autoplay: {
    type: [Boolean, Object],
    default: undefined
  },
  controller: {
    type: Object,
    default: undefined
  },
  coverflowEffect: {
    type: Object,
    default: undefined
  },
  cubeEffect: {
    type: Object,
    default: undefined
  },
  fadeEffect: {
    type: Object,
    default: undefined
  },
  flipEffect: {
    type: Object,
    default: undefined
  },
  creativeEffect: {
    type: Object,
    default: undefined
  },
  cardsEffect: {
    type: Object,
    default: undefined
  },
  customEffect: {
    type: Object,
    default: undefined
  },
  hashNavigation: {
    type: [Boolean, Object],
    default: undefined
  },
  history: {
    type: [Boolean, Object],
    default: undefined
  },
  keyboard: {
    type: [Boolean, Object],
    default: undefined
  },
  mousewheel: {
    type: [Boolean, Object],
    default: undefined
  },
  navigation: {
    type: [Boolean, Object],
    default: undefined
  },
  pagination: {
    type: [Boolean, Object],
    default: undefined
  },
  parallax: {
    type: [Boolean, Object],
    default: undefined
  },
  scrollbar: {
    type: [Boolean, Object],
    default: undefined
  },
  thumbs: {
    type: Object,
    default: undefined
  },
  virtual: {
    type: [Boolean, Object],
    default: undefined
  },
  zoom: {
    type: [Boolean, Object],
    default: undefined
  },
  grid: {
    type: Object,
    default: undefined
  },
  freeMode: {
    type: [Boolean, Object],
    default: undefined
  },
  enabled: {
    type: Boolean,
    default: true
  }
}

export default props
