import { now, isWeb, matchsTouchType } from '../../shared/utils'
import type { OnTouchMove } from '../../../types/components/core/events/on-touch-move'
import type { SwiperInterface } from '../../../types/swiper-class'

const onTouchMove: OnTouchMove = function (this: SwiperInterface, event) {
  const swiper = this as SwiperInterface
  const data = swiper.touchEventsData
  const { params, touches, rtlTranslate: rtl, enabled } = swiper
  if (!enabled) return
  if (!params.simulateTouch && (event as PointerEvent).pointerType === 'mouse')
    return

  let e = event
  // @ts-ignore
  if (e.originalEvent) e = e.originalEvent

  if (e.type === 'pointermove') {
    if (data.touchId !== null) return // return from pointer if we use touch
    const id = (e as PointerEvent).pointerId
    if (id !== data.pointerId) return
  }

  let targetTouch: Touch | PointerEvent | undefined
  if (matchsTouchType('touchmove', e.type)) {
    targetTouch = Array.from((e as TouchEvent).changedTouches).filter(
      (t) => t.identifier === data.touchId
    )[0]
    if (!targetTouch || targetTouch.identifier !== data.touchId) return
  } else {
    targetTouch = e as PointerEvent
  }

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e)
    }
    return
  }

  const { pageX, pageY } = targetTouch

  // @ts-ignore
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX
    touches.startY = pageY
    return
  }

  if (!isWeb()) {
    if (swiper.params.nested) {
      // @ts-ignore
      uni.clearStorageSync('preventedByNestedSwiper')
    }
    if (
      !swiper.params.nested &&
      // @ts-ignore
      uni.getStorageSync('preventedByNestedSwiper')
    ) {
      touches.startX = pageX
      touches.startY = pageY
      // @ts-ignore
      uni.setStorageSync('preventedByNestedSwiper', false)
      return
    }
  }

  if (!swiper.allowTouchMove) {
    // @ts-ignore
    if (e.target && !e.target.matches(data.focusableElements || '')) {
      swiper.allowClick = false
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      })
      data.touchStartTime = now()
    }
    return
  }

  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (
        (pageY < touches.startY && swiper.translate <= swiper.maxTranslate()) ||
        (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
      ) {
        data.isTouched = false
        data.isMoved = false
        return
      }
    } else if (
      (pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) ||
      (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
    ) {
      return
    }
  }

  if (
    isWeb() &&
    document.activeElement &&
    e.target === document.activeElement &&
    (e.target as HTMLElement).matches(data.focusableElements || '')
  ) {
    data.isMoved = true
    swiper.allowClick = false
    return
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e)
  }

  touches.previousX = touches.currentX
  touches.previousY = touches.currentY
  touches.currentX = pageX
  touches.currentY = pageY

  const diffX = touches.currentX - touches.startX
  const diffY = touches.currentY - touches.startY

  if (
    swiper.params.threshold &&
    Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold
  )
    return

  if (typeof data.isScrolling === 'undefined') {
    let touchAngle
    if (
      (swiper.isHorizontal() && touches.currentY === touches.startY) ||
      (swiper.isVertical() && touches.currentX === touches.startX)
    ) {
      data.isScrolling = false
    } else {
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle =
          (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI
        data.isScrolling = swiper.isHorizontal()
          ? touchAngle > (params.touchAngle || 45)
          : 90 - touchAngle > (params.touchAngle || 45)
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e)
  }

  if (typeof data.startMoving === 'undefined') {
    if (
      touches.currentX !== touches.startX ||
      touches.currentY !== touches.startY
    ) {
      data.startMoving = true
    }
  }

  if (
    data.isScrolling ||
    (matchsTouchType('touchmove', e.type) &&
      data.preventTouchMoveFromPointerMove)
  ) {
    data.isTouched = false
    return
  }

  if (!data.startMoving) {
    return
  }

  swiper.allowClick = false

  if (!params.cssMode && e.cancelable) {
    e.preventDefault()
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation()
  }

  let diff = swiper.isHorizontal() ? diffX : diffY
  let touchesDiff = swiper.isHorizontal()
    ? touches.currentX - touches.previousX
    : touches.currentY - touches.previousY

  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1)
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1)
  }

  touches.diff = diff

  diff *= params.touchRatio || 1
  if (rtl) {
    diff = -diff
    touchesDiff = -touchesDiff
  }

  const prevTouchesDirection = swiper.touchesDirection
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next'
  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next'

  const isLoop = swiper.params.loop && !params.cssMode
  const allowLoopFix =
    (swiper.touchesDirection === 'next' && swiper.allowSlideNext) ||
    (swiper.touchesDirection === 'prev' && swiper.allowSlidePrev)

  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      })
    }
    data.startTranslate = swiper.getTranslate()
    swiper.setTransition(0)

    if (swiper.animating) {
      const evt = isWeb()
        ? new window.CustomEvent('transitionend', {
            bubbles: true,
            cancelable: true,
            detail: {
              bySwiperTouchMove: true
            }
          })
        : {
            bubbles: true,
            cancelable: true,
            detail: {
              bySwiperTouchMove: true
            },
            target: {
              id: `swiperWrapper${swiper.adapterEl?.uid}`
            }
          }
      // @ts-ignore
      swiper.wrapperEl.dispatchEvent(evt)
    }

    data.allowMomentumBounce = false
    if (
      params.grabCursor &&
      (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)
    ) {
      swiper.setGrabCursor(true)
    }
    swiper.emit('sliderFirstMove', e)
  }

  let loopFixed
  if (
    data.isMoved &&
    data.allowThresholdMove &&
    prevTouchesDirection !== swiper.touchesDirection &&
    isLoop &&
    allowLoopFix &&
    Math.abs(diff) >= 1
  ) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    })
    data.loopSwapReset = true
    data.startTranslate = data.currentTranslate
    return
  }

  swiper.emit('sliderMove', e)
  data.isMoved = true
  data.currentTranslate = diff + data.startTranslate

  let disableParentSwiper = true
  let resistanceRatio = params.resistanceRatio || 0
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0
  }

  if (diff > 0) {
    if (
      isLoop &&
      allowLoopFix &&
      !loopFixed &&
      data.allowThresholdMove &&
      data.currentTranslate >
        (params.centeredSlides
          ? swiper.minTranslate() -
            swiper.slidesSizesGrid[swiper.activeIndex + 1] -
            (params.slidesPerView !== 'auto' &&
            swiper.slides.length - (params.slidesPerView || 0) >= 2
              ? Number(swiper.slidesSizesGrid[swiper.activeIndex + 1]) +
                Number(swiper.params.spaceBetween)
              : 0) -
            Number(swiper.params.spaceBetween)
          : swiper.minTranslate())
    ) {
      swiper.loopFix({
        direction: 'prev',
        setTranslate: true,
        activeSlideIndex: 0
      })
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false
      if (params.resistance) {
        data.currentTranslate =
          swiper.minTranslate() -
          1 +
          (-swiper.minTranslate() + data.startTranslate + diff) **
            resistanceRatio
      }
    }
  } else if (diff < 0) {
    if (
      isLoop &&
      allowLoopFix &&
      !loopFixed &&
      data.allowThresholdMove &&
      data.currentTranslate <
        (params.centeredSlides
          ? Number(swiper.maxTranslate()) +
            Number(swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1]) +
            Number(swiper.params.spaceBetween) +
            (params.slidesPerView !== 'auto' &&
            swiper.slides.length - Number(params.slidesPerView) >= 2
              ? Number(
                  swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1]
                ) + Number(swiper.params.spaceBetween)
              : 0)
          : swiper.maxTranslate())
    ) {
      swiper.loopFix({
        direction: 'next',
        setTranslate: true,
        activeSlideIndex:
          swiper.slides.length -
          (params.slidesPerView === 'auto'
            ? swiper.slidesPerViewDynamic()
            : Math.ceil(
                parseFloat(
                  (params.slidesPerView && params.slidesPerView.toString()) ||
                    '0'
                ) || 0
              ))
      })
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false
      if (params.resistance) {
        data.currentTranslate =
          swiper.maxTranslate() +
          1 -
          (swiper.maxTranslate() - data.startTranslate - diff) **
            resistanceRatio
      }
    }
  }

  if (disableParentSwiper) {
    // @ts-ignore
    e.preventedByNestedSwiper = true
    if (!isWeb()) {
      if (params.nested) {
        // @ts-ignore
        uni.setStorageSync('preventedByNestedSwiper', true)
      }
    }
  }

  // Directions locks
  if (
    !swiper.allowSlideNext &&
    swiper.swipeDirection === 'next' &&
    data.currentTranslate < data.startTranslate
  ) {
    data.currentTranslate = data.startTranslate
  }
  if (
    !swiper.allowSlidePrev &&
    swiper.swipeDirection === 'prev' &&
    data.currentTranslate > data.startTranslate
  ) {
    data.currentTranslate = data.startTranslate
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate
  }

  // Threshold
  if (params.threshold && params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true
        touches.startX = touches.currentX
        touches.startY = touches.currentY
        data.currentTranslate = data.startTranslate
        touches.diff = swiper.isHorizontal()
          ? touches.currentX - touches.startX
          : touches.currentY - touches.startY
        return
      }
    } else {
      data.currentTranslate = data.startTranslate
      return
    }
  }

  if (!params.followFinger || params.cssMode) return

  // Update active index in free mode
  if (
    (params.freeMode &&
      typeof params.freeMode === 'object' &&
      params.freeMode.enabled &&
      swiper.freeMode) ||
    params.watchSlidesProgress
  ) {
    swiper.updateActiveIndex()
    swiper.updateSlidesClasses()
  }

  if (
    params.freeMode &&
    typeof params.freeMode === 'object' &&
    params.freeMode.enabled &&
    swiper.freeMode
  ) {
    swiper.freeMode.onTouchMove()
  }

  // Update progress
  swiper.updateProgress(data.currentTranslate)
  // Update translate
  swiper.setTranslate(data.currentTranslate)
}

export default onTouchMove
