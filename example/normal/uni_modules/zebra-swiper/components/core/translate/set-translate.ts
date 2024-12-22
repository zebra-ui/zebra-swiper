import type { SetTranslate } from '../../../types/components/core/translate/set-translate'
import type { SwiperInterface } from '../../../types/swiper-class'
import type { SwiperEvents } from '../../../types/swiper-events'

const setTranslate: SetTranslate = function (
  this: SwiperInterface,
  translate: number,
  byController?: boolean
) {
  const swiper = this
  const { rtlTranslate: rtl, params, wrapperEl, progress } = swiper
  let x = 0
  let y = 0
  const z = 0

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate
  } else {
    y = translate
  }

  if (params.roundLengths) {
    x = Math.floor(x)
    y = Math.floor(y)
  }

  swiper.previousTranslate = swiper.translate
  swiper.translate = swiper.isHorizontal() ? x : y

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
      swiper.isHorizontal() ? -x : -y
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment()
    } else {
      y -= swiper.cssOverflowAdjustment()
    }
    if (wrapperEl) {
      wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`
    }
  }

  // Check if we need to update progress
  let newProgress: number
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate()
  if (translatesDiff === 0) {
    newProgress = 0
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate)
  }

  swiper.emit(
    'setTranslate' as keyof SwiperEvents,
    swiper.translate,
    byController
  )
}

export default setTranslate
