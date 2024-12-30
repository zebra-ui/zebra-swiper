import { isWeb, simulateRequestAnimationFrame } from '../../shared/utils'
import type { SlideToLoop } from '../../../types/components/core/slide/slide-to-loop'
import type { SwiperInterface } from '../../../types/swiper-class'

const slideToLoop: SlideToLoop = function (
  this: SwiperInterface,
  index = 0,
  speed?: number,
  runCallbacks = true,
  internal?: boolean
) {
  if (typeof index === 'string') {
    index = parseInt(index, 10)
  }

  const swiper = this
  if (swiper.destroyed) return

  if (typeof speed === 'undefined') {
    // eslint-disable-next-line
    speed = swiper.params.speed
  }

  const gridEnabled =
    swiper.grid &&
    swiper.params.grid &&
    typeof swiper.params.grid === 'object' &&
    (swiper.params.grid.rows || 0) > 1

  let newIndex = index

  if (swiper.params.loop) {
    if (
      swiper.virtual &&
      swiper.params.virtual &&
      typeof swiper.params.virtual === 'object' &&
      swiper.params.virtual.enabled
    ) {
      // eslint-disable-next-line
      newIndex = newIndex + (swiper.virtual.slidesBefore || 0)
    } else {
      let targetSlideIndex: number
      if (gridEnabled) {
        const slideIndex = newIndex * (swiper.params.grid?.rows || 1)
        targetSlideIndex = swiper.slides.filter(
          (slideEl) =>
            Number(slideEl.getAttribute('data-swiper-slide-index')) ===
            slideIndex
          // @ts-ignore
        )[0]?.column
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex)
      }

      const cols = gridEnabled
        ? Math.ceil(swiper.slides.length / (swiper.params.grid?.rows || 1))
        : swiper.slides.length

      const { centeredSlides } = swiper.params
      let { slidesPerView } = swiper.params
      if (slidesPerView === 'auto') {
        slidesPerView = swiper.slidesPerViewDynamic()
      } else {
        slidesPerView = Math.ceil(Number(slidesPerView))
        if (centeredSlides && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1
        }
      }

      let needLoopFix = cols - targetSlideIndex < slidesPerView

      if (centeredSlides) {
        needLoopFix =
          needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2)
      }

      if (
        internal &&
        centeredSlides &&
        swiper.params.slidesPerView !== 'auto' &&
        !gridEnabled
      ) {
        needLoopFix = false
      }

      if (needLoopFix) {
        const direction = centeredSlides
          ? targetSlideIndex < swiper.activeIndex
            ? 'prev'
            : 'next'
          : targetSlideIndex - (swiper.activeIndex || 0) - 1 <
              Number(swiper.params.slidesPerView)
            ? 'next'
            : 'prev'

        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex:
            direction === 'next'
              ? targetSlideIndex + 1
              : targetSlideIndex - cols + 1,
          slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
        })
      }

      if (gridEnabled) {
        const slideIndex = newIndex * (swiper.params.grid?.rows || 1)
        newIndex = swiper.slides.filter(
          (slideEl) =>
            Number(slideEl.getAttribute('data-swiper-slide-index')) ===
            slideIndex
          // @ts-ignore
        )[0]?.column
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex)
      }
    }
  }

  if (isWeb()) {
    requestAnimationFrame(() => {
      swiper.slideTo(newIndex, speed, runCallbacks, internal)
    })
  } else {
    simulateRequestAnimationFrame(() => {
      swiper.slideTo(newIndex, speed, runCallbacks, internal)
    })
  }

  return swiper
}

export default slideToLoop
