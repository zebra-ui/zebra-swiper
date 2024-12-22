import type { SlideReset } from '../../../types/components/core/slide/slide-reset'
import type { SwiperInterface } from '../../../types/swiper-class'

const slideReset: SlideReset = function (
  this: SwiperInterface,
  speed?: number,
  runCallbacks = true,
  internal?: boolean
) {
  const swiper = this

  if (swiper.destroyed) return

  if (typeof speed === 'undefined') {
    // eslint-disable-next-line
    speed = swiper.params.speed
  }

  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal)
}

export default slideReset
