import {
  elementChildren,
  elementNextAll,
  elementPrevAll,
  elementChildrenByTagIndex,
  isWeb
} from '../../shared/utils'
import type {
  ToggleSlideClasses,
  UpdateSlidesClasses
} from '../../../types/components/core/update/update-slides-classes'
import type { SwiperInterface } from '../../../types/swiper-class'
import type { SwiperItemInstance } from '../../../types/swiper-item-instance.d.ts'

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

const updateSlidesClasses: UpdateSlidesClasses = function (
  this: SwiperInterface
) {
  const swiper = this
  const { slides, params, slidesEl, activeIndex } = swiper

  const isVirtual =
    swiper.virtual &&
    typeof params.virtual === 'object' &&
    params.virtual.enabled
  const gridEnabled =
    swiper.grid &&
    params.grid &&
    typeof params.grid === 'object' &&
    params.grid.rows &&
    params.grid.rows > 1

  const getFilteredSlide = (selector: string): HTMLElement => {
    return elementChildren(
      slidesEl,
      `.${params.slideClass}${selector}, swiper-slide${selector}`
    )[0]
  }

  const getFilteredSlideByTag = (index: number): HTMLElement => {
    return elementChildrenByTagIndex(slidesEl, index)[0]
  }

  let activeSlide: HTMLElement | SwiperItemInstance | undefined
  let prevSlide: HTMLElement | SwiperItemInstance | undefined
  let nextSlide: HTMLElement | SwiperItemInstance | undefined

  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex
      if (slideIndex >= swiper.virtual.slides.length)
        slideIndex -= swiper.virtual.slides.length
      if (isWeb()) {
        activeSlide = getFilteredSlide(
          `[data-swiper-slide-index="${slideIndex}"]`
        )
      } else {
        activeSlide = getFilteredSlideByTag(slideIndex)
      }
    } else {
      if (isWeb()) {
        activeSlide = getFilteredSlide(
          `[data-swiper-slide-index="${activeIndex}"]`
        )
      } else {
        activeSlide = getFilteredSlideByTag(activeIndex)
      }
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.filter(
        // @ts-ignore
        (slideEl) => slideEl.column === activeIndex
      )[0]
      nextSlide = slides.filter(
        // @ts-ignore
        (slideEl) => slideEl.column === activeIndex + 1
      )[0]
      prevSlide = slides.filter(
        // @ts-ignore
        (slideEl) => slideEl.column === activeIndex - 1
      )[0]
    } else {
      activeSlide = slides[activeIndex]
    }
  }

  if (activeSlide) {
    if (!gridEnabled) {
      // Next Slide
      nextSlide = elementNextAll(
        activeSlide,
        `.${params.slideClass}, swiper-slide`,
        slidesEl
      )[0]
      if (params.loop && !nextSlide) {
        nextSlide = slides[0]
      }

      // Prev Slide
      prevSlide = elementPrevAll(
        activeSlide,
        `.${params.slideClass}, swiper-slide`,
        slidesEl
      )[0]
      // @ts-ignore
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1]
      }
    }
  }

  slides.forEach((slideEl) => {
    toggleSlideClasses(
      slideEl as HTMLElement,
      slideEl === activeSlide,
      params.slideActiveClass || ''
    )
    toggleSlideClasses(
      slideEl as HTMLElement,
      slideEl === nextSlide,
      params.slideNextClass || ''
    )
    toggleSlideClasses(
      slideEl as HTMLElement,
      slideEl === prevSlide,
      params.slidePrevClass || ''
    )
  })

  swiper.emitSlidesClasses()
}

export default updateSlidesClasses
