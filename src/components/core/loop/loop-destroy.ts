import type { LoopDestroy } from '../../../types/components/core/loop/loop-destroy'
import type { SwiperInterface } from '../../../types/swiper-class'
import { isWeb } from '../../shared/utils'

const loopDestroy: LoopDestroy = function (this: SwiperInterface) {
  const swiper = this
  const { params, slidesEl } = swiper

  if (
    !params.loop ||
    (swiper.virtual &&
      typeof swiper.params.virtual === 'object' &&
      swiper.params.virtual.enabled)
  )
    return

  swiper.recalcSlides()

  const newSlidesOrder: HTMLElement[] = []
  // const newSlidesIndexes: number[] = []
  swiper.slides.forEach((slideEl) => {
    const index =
      typeof (slideEl as any).swiperSlideIndex === 'undefined'
        ? Number(slideEl.getAttribute('data-swiper-slide-index'))
        : (slideEl as any).swiperSlideIndex
    newSlidesOrder[index] = slideEl as HTMLElement
    // newSlidesIndexes.push(index)
  })

  if (isWeb()) {
    swiper.slides.forEach((slideEl) => {
      slideEl.removeAttribute('data-swiper-slide-index')
    })

    newSlidesOrder.forEach((slideEl) => {
      slidesEl.append(slideEl)
    })
  } else {
    // calculateMoveIndices(newSlidesIndexes).length &&
    //   // @ts-ignore
    //   slidesEl.append(calculateMoveIndices(newSlidesIndexes))
    // @ts-ignore
    swiper.wrapperEl && swiper.wrapperEl.resetLoopList()
  }

  swiper.recalcSlides()
  swiper.slideTo(swiper.realIndex, 0)
}

export default loopDestroy
