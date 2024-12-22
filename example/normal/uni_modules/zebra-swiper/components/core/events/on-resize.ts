import type { OnResize } from '../../../types/components/core/events/on-resize'
import type { SwiperInterface } from '../../../types/swiper-class'

const onResize: OnResize = function (this: SwiperInterface) {
  const swiper = this as SwiperInterface & {
    autoplay?: {
      running?: boolean
      paused?: boolean
      resizeTimeout?: number
      resume: () => void
    }
  }

  const { params, el } = swiper

  if (el && (el as HTMLElement).offsetWidth === 0) return

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint()
  }

  // Save locks
  const { allowSlideNext, allowSlidePrev, snapGrid } = swiper

  const isVirtual =
    swiper.virtual &&
    typeof swiper.params.virtual === 'object' &&
    swiper.params.virtual.enabled

  // Disable locks on resize
  swiper.allowSlideNext = true
  swiper.allowSlidePrev = true

  swiper.updateSize()
  swiper.updateSlides()

  swiper.updateSlidesClasses()
  const isVirtualLoop = isVirtual && params.loop
  if (
    (params.slidesPerView === 'auto' ||
      (params.slidesPerView && params.slidesPerView > 1)) &&
    swiper.isEnd &&
    !swiper.isBeginning &&
    !swiper.params.centeredSlides &&
    !isVirtualLoop
  ) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true)
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true)
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true)
    }
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout)
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (
        swiper.autoplay &&
        swiper.autoplay.running &&
        swiper.autoplay.paused
      ) {
        swiper.autoplay.resume()
      }
    }, 500)
  }

  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev
  swiper.allowSlideNext = allowSlideNext

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow()
  }
}

export default onResize
