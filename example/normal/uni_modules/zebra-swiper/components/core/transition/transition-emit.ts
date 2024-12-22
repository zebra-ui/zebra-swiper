import type { TransitionEmit } from '../../../types/components/core/transition/transition-emit'
import type { SwiperEvents } from '../../../types/swiper-events'

const transitionEmit: TransitionEmit = function ({
  swiper,
  runCallbacks,
  direction,
  step
}) {
  const { activeIndex, previousIndex } = swiper
  let dir = direction

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next'
    else if (activeIndex < previousIndex) dir = 'prev'
    else dir = 'reset'
  }

  swiper.emit(`transition${step}` as keyof SwiperEvents)

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}` as keyof SwiperEvents)
      return
    }
    swiper.emit(`slideChangeTransition${step}` as keyof SwiperEvents)
    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}` as keyof SwiperEvents)
    } else {
      swiper.emit(`slidePrevTransition${step}` as keyof SwiperEvents)
    }
  }
}

export default transitionEmit
