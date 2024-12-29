import type {
  CheckOverflow,
  CheckOverflowModule
} from '../../../types/components/core/check-overflow/index'
import type { SwiperInterface } from '../../../types/swiper-class'

const checkOverflow: CheckOverflow = function (this: SwiperInterface) {
  const swiper = this
  const { isLocked: wasLocked, params } = swiper
  const { slidesOffsetBefore } = params

  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1
    const lastSlideRightEdge =
      swiper.slidesGrid[lastSlideIndex] +
      swiper.slidesSizesGrid[lastSlideIndex] +
      slidesOffsetBefore * 2
    swiper.isLocked = swiper.size > lastSlideRightEdge
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1
  }

  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked
  }

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false
  }

  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock')
  }
}

const overflow: CheckOverflowModule = {
  checkOverflow
}

export default overflow
