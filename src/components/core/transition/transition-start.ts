import transitionEmit from './transition-emit'
import type { TransitionStart } from '../../../types/components/core/transition/transition-start'
import type { SwiperInterface } from '../../../types/swiper-class'

const transitionStart: TransitionStart = function (
  this: SwiperInterface,
  runCallbacks = true,
  direction
) {
  const swiper = this
  const { params } = swiper
  if (params.cssMode) return

  if (params.autoHeight) {
    swiper.updateAutoHeight()
  }

  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  })
}

export default transitionStart
