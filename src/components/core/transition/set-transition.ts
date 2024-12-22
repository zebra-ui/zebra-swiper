import type { SetTransition } from '../../../types/components/core/transition/set-transition'
import type { SwiperInterface } from '../../../types/swiper-class'

const setTransition: SetTransition = function (
  this: SwiperInterface,
  duration: number,
  byController?: boolean
) {
  const swiper = this

  if (!swiper.params.cssMode && swiper.wrapperEl) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? '0ms' : ''
  }

  swiper.emit('setTransition', duration, byController)
}

export default setTransition
