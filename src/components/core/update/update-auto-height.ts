import { isWeb } from '../../shared/utils'
import type { UpdateAutoHeight } from '../../../types/components/core/update/update-auto-height'
import type { SwiperInterface } from '../../../types/swiper-class'

const updateAutoHeight: UpdateAutoHeight = function (
  this: SwiperInterface,
  speed
) {
  const swiper = this
  const activeSlides: HTMLElement[] = []
  const isVirtual =
    swiper.virtual &&
    typeof swiper.params.virtual === 'object' &&
    swiper.params.virtual.enabled
  let newHeight = 0
  let i: number

  if (typeof speed === 'number') {
    swiper.setTransition(speed)
  } else if (speed === true) {
    swiper.setTransition(Number(swiper.params.speed))
  }

  const getSlideByIndex = (index: number): HTMLElement => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)] as HTMLElement
    }
    return swiper.slides[index] as HTMLElement
  }

  // Find slides currently in view
  if (
    swiper.params.slidesPerView !== 'auto' &&
    Number(swiper.params.slidesPerView) > 1
  ) {
    if (swiper.params.centeredSlides) {
      ;(swiper.visibleSlides || []).forEach((slide) => {
        activeSlides.push(slide)
      })
    } else {
      for (i = 0; i < Math.ceil(Number(swiper.params.slidesPerView)); i += 1) {
        const index = swiper.activeIndex + i
        if (index > swiper.slides.length && !isVirtual) break
        activeSlides.push(getSlideByIndex(index))
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex))
  }

  if (isWeb()) {
    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        const height = activeSlides[i].offsetHeight
        newHeight = height > newHeight ? height : newHeight
      }
    }

    // Update Height
    if (newHeight || newHeight === 0) {
      swiper.wrapperEl.style.height = `${newHeight}px`
    }

    // 第一张图片需要延时获取
    if (activeSlides[0] && swiper.params.resetWrapperHeight) {
      swiper.params.resetWrapperHeight = false
      setTimeout(() => {
        const height = activeSlides[0].offsetHeight
        newHeight = height > newHeight ? height : newHeight
        if (newHeight || newHeight === 0) {
          swiper.wrapperEl.style.height = `${newHeight}px`
        }
      }, 0)
    }
  } else {
    if (!swiper.wrapperEl) return

    for (i = 0; i < activeSlides.length; i += 1) {
      const slide = activeSlides[i]
      if (typeof slide !== 'undefined') {
        ;(slide as any).getSwiperItemRect()
        const { height } = (slide as any).swiperItemRect.value
        newHeight = height > newHeight ? height : newHeight
      }
    }

    // Update Height
    if (newHeight || newHeight === 0) {
      swiper.wrapperEl.style.height = `${newHeight}px`
    }

    // 第一张图片需要延时获取
    if (activeSlides[0] && swiper.params.resetWrapperHeight) {
      swiper.params.resetWrapperHeight = false
      setTimeout(() => {
        ;(activeSlides[0] as any).getSwiperItemRect().then((rect: any) => {
          const { height } = rect
          newHeight = height > newHeight ? height : newHeight
          if (newHeight || newHeight === 0) {
            swiper.wrapperEl.style.height = `${newHeight}px`
          }
        })
      }, 0)
    }
  }
}

export default updateAutoHeight
