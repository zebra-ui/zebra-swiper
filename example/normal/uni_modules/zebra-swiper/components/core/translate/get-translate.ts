import { getTranslate } from '../../shared/utils'
import type { GetTranslate } from '../../../types/components/core/translate/get-translate'
import type { SwiperInterface } from '../../../types/swiper-class'

const getSwiperTranslate: GetTranslate = function (
  this: SwiperInterface,
  axis = this.isHorizontal() ? 'x' : 'y'
) {
  const swiper = this

  const { params, rtlTranslate: rtl, translate, wrapperEl } = swiper

  if (params.virtualTranslate) {
    return rtl ? -translate : translate
  }

  if (params.cssMode) {
    return translate
  }

  let currentTranslate = getTranslate(wrapperEl, axis, swiper)
  currentTranslate += swiper.cssOverflowAdjustment()

  if (rtl) currentTranslate = -currentTranslate

  return currentTranslate || 0
}

export default getSwiperTranslate
