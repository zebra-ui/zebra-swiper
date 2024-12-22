import slideTo from './slide-to'
import slideToLoop from './slide-to-loop'
import slideNext from './slide-next'
import slidePrev from './slide-prev'
import slideReset from './slide-reset'
import slideToClosest from './slide-to-closest'
import slideToClickedSlide from './slide-to-clicked-slide'
import type { SlideMethods } from '../../../types/components/core/slide'

const slide: SlideMethods = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
}

export default slide
