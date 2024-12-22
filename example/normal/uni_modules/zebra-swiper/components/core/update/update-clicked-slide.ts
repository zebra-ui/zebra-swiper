import { isWeb } from '../../shared/utils'
import type { UpdateClickedSlide } from '../../../types/components/core/update/update-clicked-slide'
import type { SwiperInterface } from '../../../types/swiper-class'

const updateClickedSlide: UpdateClickedSlide = function (
  this: SwiperInterface,
  el,
  path
) {
  const swiper = this
  const { params } = swiper
  let slide: HTMLElement | undefined

  if (isWeb()) {
    slide = el.closest(`.${params.slideClass}, swiper-slide`) as
      | HTMLElement
      | undefined

    if (
      !slide &&
      swiper.isElement &&
      path &&
      path.length > 1 &&
      path.includes(el)
    ) {
      ;[...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
        if (
          !slide &&
          pathEl.matches &&
          pathEl.matches(`.${params.slideClass}, swiper-slide`)
        ) {
          slide = pathEl
        }
      })
    }
  } else {
    slide = el
  }

  let slideFound = false
  let slideIndex: number | undefined

  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true
        slideIndex = i
        break
      }
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide
    if (
      swiper.virtual &&
      typeof swiper.params.virtual === 'object' &&
      swiper.params.virtual.enabled
    ) {
      swiper.clickedIndex = parseInt(
        slide.getAttribute('data-swiper-slide-index') || '0',
        10
      )
    } else {
      swiper.clickedIndex = Number(slideIndex)
    }
  } else {
    swiper.clickedSlide = undefined as any
    // @ts-ignore
    swiper.clickedIndex = undefined
    return
  }

  if (
    params.slideToClickedSlide &&
    swiper.clickedIndex !== undefined &&
    swiper.clickedIndex !== swiper.activeIndex
  ) {
    swiper.slideToClickedSlide()
  }
}

export default updateClickedSlide
