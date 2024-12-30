import { elementChildren, nextTick } from '../../shared/utils'
import type { SlideToClickedSlide } from '../../../types/components/core/slide/slide-to-clicked-slide'
import type { SwiperInterface } from '../../../types/swiper-class'

const slideToClickedSlide: SlideToClickedSlide = function (
  this: SwiperInterface
) {
  const swiper = this
  if (swiper.destroyed) return

  const { params, slidesEl } = swiper

  const slidesPerView =
    params.slidesPerView === 'auto'
      ? swiper.slidesPerViewDynamic()
      : Number(params.slidesPerView)

  let slideToIndex = swiper.clickedIndex
  let realIndex: number

  const slideSelector = swiper.isElement
    ? `swiper-slide`
    : `.${params.slideClass}`

  if (params.loop) {
    if (swiper.animating) return
    realIndex = parseInt(
      swiper.clickedSlide.getAttribute('data-swiper-slide-index') || '0',
      10
    )

    if (params.centeredSlides) {
      if (
        slideToIndex < (swiper.loopedSlides || 0) - slidesPerView / 2 ||
        slideToIndex >
          swiper.slides.length - (swiper.loopedSlides || 0) + slidesPerView / 2
      ) {
        // @ts-ignore
        swiper.loopFix()
        slideToIndex = swiper.getSlideIndex(
          elementChildren(
            slidesEl,
            `${slideSelector}[data-swiper-slide-index="${realIndex}"]`
          )[0]
        )

        nextTick(() => {
          swiper.slideTo(slideToIndex)
        })
      } else {
        swiper.slideTo(slideToIndex)
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      // @ts-ignore
      swiper.loopFix()
      slideToIndex = swiper.getSlideIndex(
        elementChildren(
          slidesEl,
          `${slideSelector}[data-swiper-slide-index="${realIndex}"]`
        )[0]
      )

      nextTick(() => {
        swiper.slideTo(slideToIndex)
      })
    } else {
      swiper.slideTo(slideToIndex)
    }
  } else {
    swiper.slideTo(slideToIndex)
  }
}

export default slideToClickedSlide
