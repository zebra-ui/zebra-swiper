import { isWeb, simulateRequestAnimationFrame } from '../../shared/utils'
import type { SlideNext } from '../../../types/components/core/slide/slide-next'
import type { SwiperInterface } from '../../../types/swiper-class'

const slideNext: SlideNext = function (
  this: SwiperInterface,
  speed?: number,
  runCallbacks = true,
  internal?: boolean
) {
  const swiper = this
  const { enabled, params, animating } = swiper

  if (!enabled || swiper.destroyed) return swiper

  if (typeof speed === 'undefined') {
    // eslint-disable-next-line
    speed = params.speed
  }

  let perGroup = params.slidesPerGroup
  if (
    params.slidesPerView === 'auto' &&
    params.slidesPerGroup === 1 &&
    params.slidesPerGroupAuto
  ) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1)
  }

  const increment =
    swiper.activeIndex < (params.slidesPerGroupSkip || 0) ? 1 : perGroup

  const isVirtual =
    swiper.virtual &&
    params.virtual &&
    typeof params.virtual === 'object' &&
    params.virtual.enabled

  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false
    swiper.loopFix({
      direction: 'next'
    })
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft

    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      if (isWeb()) {
        requestAnimationFrame(() => {
          swiper.slideTo(
            swiper.activeIndex + (increment || 0),
            speed,
            runCallbacks,
            internal
          )
        })
      } else {
        simulateRequestAnimationFrame(() => {
          swiper.slideTo(
            swiper.activeIndex + (increment || 0),
            speed,
            runCallbacks,
            internal
          )
        })
      }
      return true
    }
  }

  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal)
  }

  if (isWeb()) {
    return swiper.slideTo(
      swiper.activeIndex + (increment || 0),
      speed,
      runCallbacks,
      internal
    )
  } else {
    simulateRequestAnimationFrame(() => {
      swiper.slideTo(
        swiper.activeIndex + (increment || 0),
        speed,
        runCallbacks,
        internal
      )
    })
  }
  return true
}

export default slideNext
