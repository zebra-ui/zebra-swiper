import { now, nextTick, matchsTouchType, isWeb } from '../../shared/utils'
import type { OnTouchEnd } from '../../../types/components/core/events/on-touch-end'
import type { SwiperInterface } from '../../../types/swiper-class'

const onTouchEnd: OnTouchEnd = function (this: SwiperInterface, event) {
  const swiper = this as SwiperInterface
  const data = swiper.touchEventsData

  let e = event
  // @ts-ignore
  if (e.originalEvent) e = e.originalEvent

  let targetTouch: Touch | PointerEvent | undefined
  const isTouchEvent =
    matchsTouchType('touchend', e.type) ||
    matchsTouchType('touchcancel', e.type)

  if (!isTouchEvent) {
    if (data.touchId !== null) return // return from pointer if we use touch
    if ((e as PointerEvent).pointerId !== data.pointerId) return
    targetTouch = e as PointerEvent
  } else {
    targetTouch = Array.from((e as TouchEvent).changedTouches).filter(
      (t) => t.identifier === data.touchId
    )[0]
    if (!targetTouch || targetTouch.identifier !== data.touchId) return
  }

  if (
    ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(
      e.type
    )
  ) {
    const proceed =
      ['pointercancel', 'contextmenu'].includes(e.type) &&
      (swiper.browser?.isSafari || swiper.browser?.isWebView)
    if (!proceed) return
  }

  data.pointerId = null
  data.touchId = null

  const { params, touches, rtlTranslate: rtl, slidesGrid, enabled } = swiper
  if (!enabled) return
  if (!params.simulateTouch && (e as PointerEvent).pointerType === 'mouse')
    return

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e)
  }
  data.allowTouchCallbacks = false

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false)
    }
    data.isMoved = false
    data.startMoving = false
    return
  }

  // Return Grab Cursor
  if (
    params.grabCursor &&
    data.isMoved &&
    data.isTouched &&
    (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)
  ) {
    swiper.setGrabCursor(false)
  }

  // Time diff
  const touchEndTime = now()
  const timeDiff = touchEndTime - data.touchStartTime

  // Tap, doubleTap, Click
  if (swiper.allowClick && isWeb()) {
    const pathTree =
      (e as any).path || ((e as any).composedPath && (e as any).composedPath())
    swiper.updateClickedSlide((pathTree && pathTree[0]) || e.target, pathTree)
    swiper.emit('tap', e)
    swiper.emit('click', e)
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap', e)
      swiper.emit('doubleClick', e)
    }
  }

  data.lastClickTime = now()
  nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true
  })

  if (
    !data.isTouched ||
    !data.isMoved ||
    !swiper.swipeDirection ||
    (touches.diff === 0 && !data.loopSwapReset) ||
    (data.currentTranslate === data.startTranslate && !data.loopSwapReset)
  ) {
    data.isTouched = false
    data.isMoved = false
    data.startMoving = false
    return
  }

  data.isTouched = false
  data.isMoved = false
  data.startMoving = false

  let currentPos
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate
  } else {
    currentPos = -data.currentTranslate
  }

  if (params.cssMode) return

  if (
    params.freeMode &&
    typeof params.freeMode === 'object' &&
    params.freeMode.enabled
  ) {
    swiper.freeMode.onTouchEnd({ currentPos })
    return
  }

  // Find current slide
  const swipeToLast =
    currentPos >= -swiper.maxTranslate() && !swiper.params.loop
  let stopIndex = 0
  let groupSize = swiper.slidesSizesGrid[0]

  for (
    let i = 0;
    i < slidesGrid.length;
    i += i < (params?.slidesPerGroupSkip || 0) ? 1 : params?.slidesPerGroup || 1
  ) {
    const increment =
      i < (params?.slidesPerGroupSkip || 0) - 1
        ? 1
        : params?.slidesPerGroup || 1
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (
        swipeToLast ||
        (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment])
      ) {
        stopIndex = i
        groupSize = slidesGrid[i + increment] - slidesGrid[i]
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i
      groupSize =
        slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2]
    }
  }

  let rewindFirstIndex: number | null = null
  let rewindLastIndex: number | null = null
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex =
        params.virtual &&
        typeof params.virtual === 'object' &&
        params.virtual.enabled &&
        swiper.virtual
          ? swiper.virtual.slides.length - 1
          : swiper.slides.length - 1
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0
    }
  }

  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize
  const increment =
    stopIndex < (params?.slidesPerGroupSkip || 0) - 1
      ? 1
      : params?.slidesPerGroup || 1

  if (timeDiff > (params?.longSwipesMs || 0)) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex)
      return
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= (params?.longSwipesRatio || 0))
        swiper.slideTo(
          params.rewind && swiper.isEnd
            ? rewindFirstIndex || 0
            : stopIndex + increment
        )
      else swiper.slideTo(stopIndex)
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - (params?.longSwipesRatio || 0.5)) {
        swiper.slideTo(stopIndex + increment)
      } else if (
        rewindLastIndex !== null &&
        ratio < 0 &&
        Math.abs(ratio) > (params?.longSwipesRatio || 0.5)
      ) {
        swiper.slideTo(rewindLastIndex)
      } else {
        swiper.slideTo(stopIndex)
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex)
      return
    }
    const isNavButtonTarget =
      swiper.navigation &&
      (e.target === swiper.navigation.nextEl ||
        e.target === swiper.navigation.prevEl)
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(
          rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment
        )
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex)
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment)
    } else {
      swiper.slideTo(stopIndex)
    }
  }
}

export default onTouchEnd
