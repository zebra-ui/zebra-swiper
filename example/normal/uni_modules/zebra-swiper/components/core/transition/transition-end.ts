import transitionEmit from './transition-emit'
import type { TransitionEnd } from '../../../types/components/core/transition/transition-end'
import type { SwiperInterface } from '../../../types/swiper-class'

const transitionEnd: TransitionEnd = function (
  this: SwiperInterface,
  runCallbacks = true,
  direction
) {
  const swiper = this
  const { params } = swiper
  swiper.animating = false
  if (params.cssMode) return

  swiper.setTransition(0)

  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  })
}

export default transitionEnd
