import {
  now,
  elementIsChildOf,
  isWeb,
  matchsTouchType
} from '../../shared/utils'
import type { OnTouchStart } from '../../../types/components/core/events/on-touch-start'
import type { SwiperInterface } from '../../../types/swiper-class'

function closestElement(
  selector: string,
  // @ts-ignore
  base: Element = this
): Element | null {
  function __closestFrom(el: Element | null): Element | null {
    // @ts-ignore
    if (!el || el === document || el === window) return null
    if ((el as any).assignedSlot) el = (el as any).assignedSlot
    const found = el && el.closest(selector)
    if (!found && !(el as any).getRootNode) {
      return null
    }
    return found || __closestFrom((el as any).getRootNode().host)
  }
  return __closestFrom(base)
}

function preventEdgeSwipe(
  swiper: SwiperInterface,
  event: TouchEvent | PointerEvent,
  startX: number
): boolean {
  const { params } = swiper
  const { edgeSwipeDetection, edgeSwipeThreshold } = params

  if (
    edgeSwipeDetection &&
    (startX <= (edgeSwipeThreshold || 0) ||
      startX >= window.innerWidth - (edgeSwipeThreshold || 0))
  ) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault()
      return true
    }
    return false
  }
  return true
}

const onTouchStart: OnTouchStart = function (this: SwiperInterface, event) {
  const swiper = this as SwiperInterface

  let e = event
  // @ts-ignore
  if (e.originalEvent) e = e.originalEvent

  const data = swiper.touchEventsData

  if (e.type === 'pointerdown') {
    if (
      data.pointerId !== null &&
      data.pointerId !== (e as PointerEvent).pointerId
    ) {
      return
    }
    data.pointerId = (e as PointerEvent).pointerId
  } else if (
    matchsTouchType('touchstart', e.type) &&
    (e as TouchEvent).touches.length === 1
  ) {
    data.touchId = (e as TouchEvent).touches[0].identifier
  }

  if (matchsTouchType('touchstart', e.type) && isWeb()) {
    preventEdgeSwipe(swiper, e, (e as TouchEvent).touches[0].pageX)
    return
  }

  const { params, touches, enabled } = swiper
  if (!enabled) return
  if (!params.simulateTouch && (e as PointerEvent).pointerType === 'mouse')
    return

  if (swiper.animating && params.preventInteractionOnTransition) {
    return
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    // @ts-ignore
    swiper.loopFix()
  }

  let targetEl = e.target as Element

  if (params.touchEventsTarget === 'wrapper') {
    if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return
  }

  if ('which' in e && e.which === 3) return
  if ('button' in e && (e as MouseEvent).button > 0) return
  if (data.isTouched && data.isMoved) return

  const swipingClassHasValue =
    !!params.noSwipingClass && params.noSwipingClass !== ''
  const eventPath = (e as any).composedPath
    ? (e as any).composedPath()
    : (e as any).path

  if (
    swipingClassHasValue &&
    e.target &&
    (e.target as Element).shadowRoot &&
    eventPath
  ) {
    targetEl = eventPath[0]
  }

  if (isWeb()) {
    const noSwipingSelector = params.noSwipingSelector
      ? params.noSwipingSelector
      : `.${params.noSwipingClass}`
    const isTargetShadow = !!(e.target && (e.target as Element).shadowRoot)

    if (
      params.noSwiping &&
      (isTargetShadow
        ? closestElement(noSwipingSelector, targetEl)
        : targetEl.closest(noSwipingSelector))
    ) {
      swiper.allowClick = true
      return
    }
  }

  if (params.swipeHandler && isWeb()) {
    // @ts-ignore
    if (!targetEl.closest(params.swipeHandler)) return
  }

  touches.currentX = matchsTouchType('touchstart', e.type)
    ? (e as TouchEvent).touches[0].pageX
    : (e as PointerEvent).pageX
  touches.currentY = matchsTouchType('touchstart', e.type)
    ? (e as TouchEvent).touches[0].pageY
    : (e as PointerEvent).pageY

  const startX = touches.currentX
  const startY = touches.currentY

  if (!preventEdgeSwipe(swiper, e, startX) && isWeb()) {
    return
  }

  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  })

  touches.startX = startX
  touches.startY = startY
  data.touchStartTime = now()
  swiper.allowClick = true
  swiper.updateSize()
  // @ts-ignore
  swiper.swipeDirection = undefined
  if (params.threshold && params.threshold > 0) data.allowThresholdMove = false

  let preventDefault = true
  if (isWeb() && targetEl.matches(data.focusableElements || '')) {
    preventDefault = false
    if (targetEl.nodeName === 'SELECT') {
      data.isTouched = false
    }
  }

  if (
    isWeb() &&
    document.activeElement &&
    (document.activeElement as Element).matches(data.focusableElements || '') &&
    document.activeElement !== targetEl &&
    ((e as PointerEvent).pointerType === 'mouse' ||
      ((e as PointerEvent).pointerType !== 'mouse' &&
        !targetEl.matches(data.focusableElements || '')))
  ) {
    // @ts-ignore
    document.activeElement.blur()
  }

  const shouldPreventDefault =
    preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault

  if (
    (params.touchStartForcePreventDefault || shouldPreventDefault) &&
    // @ts-ignore
    !targetEl.isContentEditable
  ) {
    e.preventDefault()
  }

  if (
    params.freeMode &&
    typeof params.freeMode === 'object' &&
    params.freeMode.enabled &&
    swiper.freeMode &&
    swiper.animating &&
    !params.cssMode
  ) {
    swiper.freeMode.onTouchStart()
  }
  swiper.emit('touchStart', e)
}

export default onTouchStart
