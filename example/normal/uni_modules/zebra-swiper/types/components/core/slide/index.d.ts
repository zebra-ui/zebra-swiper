import type { SlideNext } from './slide-next'
import type { SlidePrev } from './slide-prev'
import type { SlideReset } from './slide-reset'
import type { SlideTo } from './slide-to'
import type { SlideToClickedSlide } from './slide-to-clicked-slide'
import type { SlideToClosest } from './slide-to-closest'
import type { SlideToLoop } from './slide-to-loop'

export interface SlideMethods {
  slideTo: SlideTo
  slideToLoop: SlideToLoop
  slideNext: SlideNext
  slidePrev: SlidePrev
  slideReset: SlideReset
  slideToClosest: SlideToClosest
  slideToClickedSlide: SlideToClickedSlide
}
