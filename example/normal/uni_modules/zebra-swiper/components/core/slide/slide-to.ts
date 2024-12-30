import {
  animateCSSModeScroll,
  isWeb,
  simulateRequestAnimationFrame
} from '../../shared/utils'
import type { SlideTo } from '../../../types/components/core/slide/slide-to'
import type { SwiperInterface } from '../../../types/swiper-class'

const slideTo: SlideTo = function (
  this: SwiperInterface,
  index = 0,
  speed?: number,
  runCallbacks = true,
  internal?: boolean,
  initial?: boolean
) {
  if (typeof index === 'string') {
    index = parseInt(index, 10)
  }

  const swiper = this

  let slideIndex = index
  if (slideIndex < 0) slideIndex = 0

  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper

  if (
    (!enabled && !internal && !initial) ||
    swiper.destroyed ||
    (swiper.animating && params.preventInteractionOnTransition)
  ) {
    return false
  }

  if (typeof speed === 'undefined') {
    // eslint-disable-next-line
    speed = params.speed
  }

  const skip = Math.min(params.slidesPerGroupSkip || 0, slideIndex)
  let snapIndex =
    skip + Math.floor((slideIndex - skip) / (params.slidesPerGroup || 1))
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1

  const translate = -snapGrid[snapIndex]

  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100)
      const normalizedGrid = Math.floor(slidesGrid[i] * 100)
      const normalizedGridNext = Math.floor((slidesGrid[i + 1] || 0) * 100)

      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (
          normalizedTranslate >= normalizedGrid &&
          normalizedTranslate <
            normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2
        ) {
          slideIndex = i
        } else if (
          normalizedTranslate >= normalizedGrid &&
          normalizedTranslate < normalizedGridNext
        ) {
          slideIndex = i + 1
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i
      }
    }
  }

  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (
      !swiper.allowSlideNext &&
      (rtl
        ? translate > swiper.translate && translate > swiper.minTranslate()
        : translate < swiper.translate && translate < swiper.minTranslate())
    ) {
      return false
    }
    if (
      !swiper.allowSlidePrev &&
      translate > swiper.translate &&
      translate > swiper.maxTranslate()
    ) {
      if ((activeIndex || 0) !== slideIndex) {
        return false
      }
    }
  }

  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart')
  }

  // Update progress
  swiper.updateProgress(translate)

  let direction: 'next' | 'prev' | 'reset'
  if (slideIndex > activeIndex) direction = 'next'
  else if (slideIndex < activeIndex) direction = 'prev'
  else direction = 'reset'

  // Update Index
  const isVirtual =
    swiper.virtual &&
    params.virtual &&
    typeof params.virtual === 'object' &&
    params.virtual.enabled
  const isInitialVirtual = isVirtual && initial

  if (
    !isInitialVirtual &&
    ((rtl && -translate === swiper.translate) ||
      (!rtl && translate === swiper.translate))
  ) {
    swiper.updateActiveIndex(slideIndex)
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight()
    }
    swiper.updateSlidesClasses()
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate)
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction)
      swiper.transitionEnd(runCallbacks, direction)
    }
    return false
  }

  if (params.cssMode) {
    const isH = swiper.isHorizontal()
    const t = rtl ? translate : -translate
    if (speed === 0) {
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none'
        ;(swiper as any)._immediateVirtual = true
      }

      if (
        isVirtual &&
        !(swiper as any)._cssModeVirtualInitialSet &&
        params.initialSlide &&
        params.initialSlide > 0
      ) {
        ;(swiper as any)._cssModeVirtualInitialSet = true
        if (isWeb()) {
          requestAnimationFrame(() => {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t
          })
        } else {
          simulateRequestAnimationFrame(() => {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t
          })
        }
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t
      }
      if (isVirtual) {
        if (isWeb()) {
          requestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = ''
            ;(swiper as any)._immediateVirtual = false
          })
        } else {
          simulateRequestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = ''
            ;(swiper as any)._immediateVirtual = false
          })
        }
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        })
        return true
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      })
    }
    return true
  }

  swiper.setTransition(speed || 0)
  swiper.setTranslate(translate)
  swiper.updateActiveIndex(slideIndex)
  swiper.updateSlidesClasses()
  swiper.emit('beforeTransitionStart', speed, internal)
  swiper.transitionStart(runCallbacks, direction)

  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction)
  } else if (!swiper.animating) {
    swiper.animating = true
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e: Event) {
        if (!swiper || swiper.destroyed) return
        if (isWeb()) {
          // @ts-ignore
          if (e.target !== this) return
        } else {
          if ((e.target as any).id !== `swiperWrapper${this.adapterEl.uid}`)
            return
        }
        if (isWeb()) {
          swiper.wrapperEl.removeEventListener(
            'transitionend',
            swiper.onSlideToWrapperTransitionEnd
          )
        } else {
          swiper.wrapperEl.removeEventListener(
            'transitionend',
            swiper.onSlideToWrapperTransitionEnd,
            // @ts-ignore
            'onSlideToWrapperTransitionEnd'
          )
        }
        // @ts-ignore
        swiper.onSlideToWrapperTransitionEnd = null
        // @ts-ignore
        delete swiper.onSlideToWrapperTransitionEnd
        swiper.transitionEnd(runCallbacks, direction)
      }
    }
    if (isWeb()) {
      swiper.wrapperEl.addEventListener(
        'transitionend',
        swiper.onSlideToWrapperTransitionEnd
      )
    } else {
      swiper.wrapperEl.addEventListener(
        'transitionend',
        // @ts-ignore
        swiper.onSlideToWrapperTransitionEnd.bind(this),
        // @ts-ignore
        'onSlideToWrapperTransitionEnd'
      )
    }
  }

  return true
}

export default slideTo
