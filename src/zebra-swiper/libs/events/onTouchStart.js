import {
	now
} from '../../shared/utils.js';

export default function onTouchStart(event) {
	const swiper = this;
	const data = swiper.touchEventsData;
	const {
		params,
		touches,
		enabled
	} = swiper;
	if (!enabled) return;

	if (swiper.animating && params.preventInteractionOnTransition) {
		return;
	}

	if (!swiper.animating && params.cssMode && params.loop) {
		swiper.loopFix();
	}

	let e = event;
	if (e.originalEvent) e = e.originalEvent;

	data.isTouchEvent = e.type === 'touchstart' || e.type === 'touchStart' || e.type === 'onTouchstart';
	if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
	if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
	if (data.isTouched && data.isMoved) return; // change target el for shadow root component

	const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';


	const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
	const isTargetShadow = !!(e.target && e.target
		.shadowRoot
	);

	if (params.noSwiping) {
		swiper.allowClick = true;
		return;
	}

	if (params.swipeHandler) {
		if (!$targetEl.closest(params.swipeHandler)[0]) return;
	}

	touches.currentX = (e.type === 'touchstart' || e.type === 'touchStart' || e.type === 'onTouchstart') ? e.touches[0]
		.pageX : e.pageX;
	touches.currentY = (e.type === 'touchstart' || e.type === 'touchStart' || e.type === 'onTouchstart') ? e.touches[0]
		.pageY : e.pageY;
	const startX = touches.currentX;
	const startY = touches
		.currentY;

	const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
	const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

	Object.assign(data, {
		isTouched: true,
		isMoved: false,
		allowTouchCallbacks: true,
		isScrolling: undefined,
		startMoving: undefined
	});
	touches.startX = startX;
	touches.startY = startY;
	data.touchStartTime = now();
	swiper.allowClick = true;
	swiper.updateSize();
	swiper.swipeDirection = undefined;
	if (params.threshold > 0) data.allowThresholdMove = false;
	// if (e.type !== 'touchstart' && e.type !== 'touchStart') {
	// let preventDefault = true;
	// if ($targetEl.is(data.focusableElements)) preventDefault = false;

	// const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

	// if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
	// e.preventDefault();
	// }
	// }

	swiper.emit('touch-start', e);
}
