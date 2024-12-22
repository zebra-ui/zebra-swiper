import type { OnScroll } from '../../../types/components/core/events/on-scroll'
import type { SwiperInterface } from '../../../types/swiper-class'

const onScroll: OnScroll = function (this: SwiperInterface) {
  const swiper = this as SwiperInterface & { previousTranslate?: number }
  const { wrapperEl, rtlTranslate, enabled } = swiper

  if (!enabled) return

  swiper.previousTranslate = swiper.translate

  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft
  } else {
    swiper.translate = -wrapperEl.scrollTop
  }

  // eslint-disable-next-line
  if (swiper.translate === 0) swiper.translate = 0

  swiper.updateActiveIndex()
  swiper.updateSlidesClasses()

  let newProgress: number
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate()

  if (translatesDiff === 0) {
    newProgress = 0
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate)
  }

  swiper.emit('setTranslate', swiper.translate, false)
}

export default onScroll
