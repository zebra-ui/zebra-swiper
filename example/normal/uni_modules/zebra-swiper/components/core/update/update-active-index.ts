import { preload } from '../../shared/process-lazy-preloader'
import { isWeb } from '../../shared/utils'
import type {
  GetActiveIndexByTranslate,
  UpdateActiveIndex
} from '../../../types/components/core/update/update-active-index'
import type { SwiperEvents } from '../../../types/swiper-events'

export const getActiveIndexByTranslate: GetActiveIndexByTranslate = (
  swiper
) => {
  const { slidesGrid, params } = swiper
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate
  let activeIndex: number | undefined

  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== 'undefined') {
      if (
        translate >= slidesGrid[i] &&
        translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2
      ) {
        activeIndex = i
      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
        activeIndex = i + 1
      }
    } else if (translate >= slidesGrid[i]) {
      activeIndex = i
    }
  }

  if (params.normalizeSlideIndex) {
    if (
      (typeof activeIndex === 'number' && activeIndex < 0) ||
      typeof activeIndex === 'undefined'
    )
      activeIndex = 0
  }

  return activeIndex || 0
}

const updateActiveIndex: UpdateActiveIndex = function (newActiveIndex) {
  const swiper = this
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper
  let activeIndex = newActiveIndex
  let snapIndex: number

  const getVirtualRealIndex = (aIndex: number): number => {
    let realIndex = aIndex - swiper.virtual.slidesBefore
    if (realIndex < 0) {
      realIndex = swiper.virtual.slides.length + realIndex
    }
    if (realIndex >= swiper.virtual.slides.length) {
      realIndex -= swiper.virtual.slides.length
    }
    return realIndex
  }

  if (typeof activeIndex === 'undefined') {
    activeIndex = getActiveIndexByTranslate(swiper)
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate)
  } else {
    const skip = Math.min(params.slidesPerGroupSkip || 0, activeIndex)
    snapIndex =
      skip + Math.floor((activeIndex - skip) / (params.slidesPerGroup || 1))
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1

  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex
      swiper.emit('snapIndexChange' as keyof SwiperEvents)
    }
    return
  }

  if (
    activeIndex === previousIndex &&
    swiper.params.loop &&
    swiper.virtual &&
    typeof swiper.params.virtual === 'object' &&
    swiper.params.virtual.enabled
  ) {
    swiper.realIndex = getVirtualRealIndex(activeIndex)
    return
  }

  const gridEnabled =
    swiper.grid &&
    params.grid &&
    typeof params.grid === 'object' &&
    params.grid.rows &&
    params.grid.rows > 1

  let realIndex: number
  if (
    swiper.virtual &&
    params.virtual &&
    typeof params.virtual === 'object' &&
    params.virtual.enabled &&
    params.loop
  ) {
    realIndex = getVirtualRealIndex(activeIndex)
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.filter(
      (slideEl) =>
        slideEl.getAttribute('data-swiper-column') === String(activeIndex)
    )[0]
    const activeSlideIndex = parseInt(
      firstSlideInColumn?.getAttribute('data-swiper-slide-index') || '0',
      10
    )
    realIndex = Math.floor(
      Number.isNaN(activeSlideIndex)
        ? // @ts-ignore
          Math.max(swiper.slides.indexOf(firstSlideInColumn), 0)
        : activeSlideIndex / (params.grid?.rows || 1)
    )
  } else {
    const slideIndex = swiper.slides[activeIndex]?.getAttribute(
      'data-swiper-slide-index'
    )
    realIndex = slideIndex ? parseInt(slideIndex, 10) : activeIndex
  }

  Object.assign(swiper, {
    snapIndex,
    realIndex,
    previousIndex,
    activeIndex,
    previousRealIndex,
    previousSnapIndex
  })

  if (isWeb() && swiper.initialized) {
    preload(swiper)
  }

  swiper.emit('activeIndexChange' as keyof SwiperEvents)
  swiper.emit('snapIndexChange' as keyof SwiperEvents)

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange' as keyof SwiperEvents)
    }
    swiper.emit('slideChange' as keyof SwiperEvents)
  }
}

export default updateActiveIndex
