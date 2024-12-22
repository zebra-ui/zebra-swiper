import type { SwiperInterface } from '../../../swiper-class'

export interface LoopFixOptions {
  slideRealIndex?: number
  slideTo?: boolean
  direction?: 'prev' | 'next'
  setTranslate?: boolean
  activeSlideIndex?: number
  byController?: boolean
  byMousewheel?: boolean
}

export interface LoopFix {
  (
    this: SwiperInterface & { __preventObserver__?: boolean },
    options?: LoopFixOptions
  ): void
}
