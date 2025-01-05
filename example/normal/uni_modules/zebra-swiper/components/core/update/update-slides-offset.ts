import { isWeb } from '../../shared/utils'
import type { UpdateSlidesOffset } from '../../../types/components/core/update/update-slides-offset'
import type { SwiperInterface } from '../../../types/swiper-class'
import type { SwiperItemInstance } from '../../../types/swiper-item-instance.d.ts'

const updateSlidesOffset: UpdateSlidesOffset = function (
  this: SwiperInterface
) {
  const swiper = this
  const { slides, isElement, isHorizontal, wrapperEl } = swiper

  const minusOffset = isElement
    ? isHorizontal()
      ? wrapperEl.offsetLeft
      : wrapperEl.offsetTop
    : 0

  for (let i = 0; i < slides.length; i += 1) {
    if (isWeb()) {
      ;(slides[i] as SwiperItemInstance).swiperSlideOffset =
        (isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) -
        minusOffset -
        swiper.cssOverflowAdjustment()
    } else {
      const isVirtual =
        swiper.virtual &&
        typeof swiper.params.virtual === 'object' &&
        swiper.params.virtual.enabled
      const calcOffsetDiff = isVirtual ? swiper.virtual.offset : 0
      const calcOffset =
        ((slides[i] as SwiperItemInstance).swiperSlideSize +
          Number(swiper.params.spaceBetween)) *
          i +
        calcOffsetDiff
      const slideOffsetLeft =
        (slides[i] as SwiperItemInstance).swiperItemRect?.left || calcOffset
      const slideOffsetTop =
        (slides[i] as SwiperItemInstance).swiperItemRect?.top || calcOffset

      ;(slides[i] as SwiperItemInstance).swiperSlideOffset =
        (isHorizontal() ? slideOffsetLeft : slideOffsetTop) -
        minusOffset -
        swiper.cssOverflowAdjustment()
    }
  }
}

export default updateSlidesOffset
