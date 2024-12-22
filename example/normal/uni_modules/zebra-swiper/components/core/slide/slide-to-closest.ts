import type { SlideToClosest } from '../../../types/components/core/slide/slide-to-closest'
import type { SwiperInterface } from '../../../types/swiper-class'

const slideToClosest: SlideToClosest = function (
  this: SwiperInterface,
  speed?: number,
  runCallbacks = true,
  internal?: boolean,
  threshold = 0.5
) {
  const swiper = this
  if (swiper.destroyed) return

  if (typeof speed === 'undefined') {
    // eslint-disable-next-line
    speed = swiper.params.speed
  }

  let index = swiper.activeIndex
  const skip = Math.min(swiper.params.slidesPerGroupSkip || 0, index)
  const snapIndex =
    skip + Math.floor((index - skip) / (swiper.params.slidesPerGroup || 1))

  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex]
    const nextSnap = swiper.snapGrid[snapIndex + 1]
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup || 1
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1]
    const currentSnap = swiper.snapGrid[snapIndex]
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup || 1
    }
  }

  index = Math.max(index, 0)
  index = Math.min(index, swiper.slidesGrid.length - 1)

  return swiper.slideTo(index, speed, runCallbacks, internal)
}

export default slideToClosest
