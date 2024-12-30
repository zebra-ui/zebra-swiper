import { animateCSSModeScroll, isWeb } from '../../shared/utils'
import type { TranslateTo } from '../../../types/components/core/translate/translate-to'
import type { SwiperInterface } from '../../../types/swiper-class'
import type { SwiperEvents } from '../../../types/swiper-events'

const translateTo: TranslateTo = function (
  this: SwiperInterface,
  translate = 0,
  speed = this.params.speed,
  runCallbacks = true,
  translateBounds = true,
  internal?: boolean
) {
  const swiper = this
  const { params, wrapperEl } = swiper

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false
  }

  const minTranslate = swiper.minTranslate()
  const maxTranslate = swiper.maxTranslate()
  let newTranslate: number
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate
  else if (translateBounds && translate < maxTranslate)
    newTranslate = maxTranslate
  else newTranslate = translate

  // Update progress
  swiper.updateProgress(newTranslate)

  if (params.cssMode) {
    const isH = swiper.isHorizontal()
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        })
        return true
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      })
    }
    return true
  }

  if (speed === 0) {
    swiper.setTransition(0)
    swiper.setTranslate(newTranslate)
    if (runCallbacks) {
      swiper.emit(
        'beforeTransitionStart' as keyof SwiperEvents,
        speed,
        internal
      )
      swiper.emit('transitionEnd' as keyof SwiperEvents)
    }
  } else {
    swiper.setTransition(speed || 0)
    swiper.setTranslate(newTranslate)
    if (runCallbacks) {
      swiper.emit(
        'beforeTransitionStart' as keyof SwiperEvents,
        speed,
        internal
      )
      swiper.emit('transitionStart' as keyof SwiperEvents)
    }
    if (!swiper.animating) {
      swiper.animating = true
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(
          e: Event
        ) {
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
              swiper.onTranslateToWrapperTransitionEnd
            )
          } else {
            swiper.wrapperEl.removeEventListener(
              'transitionend',
              swiper.onTranslateToWrapperTransitionEnd,
              // @ts-ignore
              'onTranslateToWrapperTransitionEnd'
            )
          }

          // @ts-ignore
          swiper.onTranslateToWrapperTransitionEnd = null
          // @ts-ignore
          delete swiper.onTranslateToWrapperTransitionEnd
          swiper.animating = false
          if (runCallbacks) {
            swiper.emit('transitionEnd' as keyof SwiperEvents)
          }
        }
      }
      if (isWeb()) {
        swiper.wrapperEl.addEventListener(
          'transitionend',
          swiper.onTranslateToWrapperTransitionEnd
        )
      } else {
        swiper.wrapperEl.addEventListener(
          'transitionend',
          swiper.onTranslateToWrapperTransitionEnd.bind(this),
          // @ts-ignore
          'onTranslateToWrapperTransitionEnd'
        )
      }
    }
  }

  return true
}

export default translateTo
