import type {
  ToggleSlideClasses,
  UpdateSlidesProgress
} from '../../../types/components/core/update/update-slides-progress'
import type { SwiperInterface } from '../../../types/swiper-class'
import type { SwiperItemInstance } from '../../../types/swiper-item-instance'

const toggleSlideClasses: ToggleSlideClasses = (
  slideEl,
  condition,
  className
) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className)
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className)
  }
}

const updateSlidesProgress: UpdateSlidesProgress = function (
  this: SwiperInterface,
  translate = (this && this.translate) || 0
) {
  const swiper = this
  const { params, slides, rtlTranslate: rtl, snapGrid, size } = swiper

  if (slides.length === 0) return
  if (
    typeof (slides[0] as SwiperItemInstance).swiperSlideOffset === 'undefined'
  )
    swiper.updateSlidesOffset()

  let offsetCenter = -translate
  if (rtl) offsetCenter = translate

  swiper.visibleSlidesIndexes = []
  swiper.visibleSlides = []

  let { spaceBetween } = params
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * size
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween)
  }

  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i] as SwiperItemInstance
    let slideOffset = slide.swiperSlideOffset

    if (params.cssMode && params.centeredSlides) {
      slideOffset -= (slides[0] as SwiperItemInstance).swiperSlideOffset
    }

    const slideProgress =
      (offsetCenter +
        (params.centeredSlides ? swiper.minTranslate() : 0) -
        slideOffset) /
      (slide.swiperSlideSize + (spaceBetween || 0))
    const originalSlideProgress =
      (offsetCenter -
        snapGrid[0] +
        (params.centeredSlides ? swiper.minTranslate() : 0) -
        slideOffset) /
      (slide.swiperSlideSize + (spaceBetween || 0))
    const slideBefore = -(offsetCenter - slideOffset)
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i]

    const isFullyVisible =
      slideBefore >= 0 && slideBefore <= size - swiper.slidesSizesGrid[i]

    const isVisible =
      (slideBefore >= 0 && slideBefore < size - 1) ||
      (slideAfter > 1 && slideAfter <= size) ||
      (slideBefore <= 0 && slideAfter >= size)

    if (isVisible) {
      swiper.visibleSlides.push(slide as unknown as HTMLElement)
      swiper.visibleSlidesIndexes.push(i)
    }

    toggleSlideClasses(
      slide as unknown as HTMLElement,
      isVisible,
      params.slideVisibleClass || ''
    )
    toggleSlideClasses(
      slide as unknown as HTMLElement,
      isFullyVisible,
      params.slideFullyVisibleClass || ''
    )

    slide.progress = rtl ? -slideProgress : slideProgress
    slide.originalProgress = rtl
      ? -originalSlideProgress
      : originalSlideProgress
  }
}

export default updateSlidesProgress
