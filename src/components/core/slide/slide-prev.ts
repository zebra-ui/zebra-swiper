import { isWeb, simulateRequestAnimationFrame } from '../../shared/utils'
import type { SlidePrev } from '../../../types/components/core/slide/slide-prev'
import type { SwiperInterface } from '../../../types/swiper-class'

const slidePrev: SlidePrev = function (
  this: SwiperInterface,
  speed?: number,
  runCallbacks = true,
  internal?: boolean
) {
  const swiper = this
  const { params, snapGrid, slidesGrid, rtlTranslate, enabled, animating } =
    swiper

  if (!enabled || swiper.destroyed) return swiper

  if (typeof speed === 'undefined') {
    // eslint-disable-next-line
    speed = params.speed
  }

  const isVirtual =
    swiper.virtual &&
    params.virtual &&
    typeof params.virtual === 'object' &&
    params.virtual.enabled

  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false

    swiper.loopFix({
      direction: 'prev'
    })
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft
  }

  const translate = rtlTranslate ? swiper.translate : -swiper.translate

  function normalize(val: number): number {
    if (val < 0) return -Math.floor(Math.abs(val))
    return Math.floor(val)
  }

  const normalizedTranslate = normalize(translate)
  const normalizedSnapGrid = snapGrid.map((val) => normalize(val))

  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1]

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex: number | undefined
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex
      }
    })
    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex]
    }
  }

  let prevIndex = 0

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap)
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1
    if (
      params.slidesPerView === 'auto' &&
      params.slidesPerGroup === 1 &&
      params.slidesPerGroupAuto
    ) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1
      prevIndex = Math.max(prevIndex, 0)
    }
  }

  if (params.rewind && swiper.isBeginning) {
    const lastIndex =
      swiper.params.virtual &&
      typeof swiper.params.virtual === 'object' &&
      swiper.params.virtual.enabled &&
      swiper.virtual
        ? swiper.virtual.slides.length - 1
        : swiper.slides.length - 1
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal)
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    if (isWeb()) {
      requestAnimationFrame(() => {
        swiper.slideTo(prevIndex, speed, runCallbacks, internal)
      })
    } else {
      simulateRequestAnimationFrame(() => {
        swiper.slideTo(prevIndex, speed, runCallbacks, internal)
      })
    }
    return true
  }

  if (isWeb()) {
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal)
  } else {
    simulateRequestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal)
    })
  }
  return true
}

export default slidePrev
