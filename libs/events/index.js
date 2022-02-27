import onTouchStart from './onTouchStart.js';
import onTouchMove from './onTouchMove.js';
import onTouchEnd from './onTouchEnd.js';
import onResize from './onResize.js';
import onClick from './onClick.js';
import onScroll from './onScroll.js';
let dummyEventAttached = false;

function dummyEventListener() {}

const events = (swiper, method) => {
	const {
		params,
		touchEvents,
		wrapperEl,
		device,
		support
	} = swiper;
	let el = swiper.native;
	const capture = !!params.nested;
	const domMethod = method === 'on' ? '$on' : '$off';
	const swiperMethod = method;
	Object.keys(swiper.eventsListeners).forEach((item) => {
		if (method == 'off') {
			swiper.native.$off(item)
		}
	})
	if (!support.touch) {
		el[domMethod](touchEvents.start, swiper.onTouchStart, false);
	} else {
		const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params
			.passiveListeners ? {
				passive: true,
				capture: false
			} : false;

		// #ifdef VUE2
		el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
		el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
			passive: false,
			capture
		} : capture);
		el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
		// #endif



		if (touchEvents.cancel) {
			// #ifdef VUE2
			el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
			// #endif
		}
	}

	if (params.preventClicks || params.preventClicksPropagation) {
		// #ifdef VUE2
		el[domMethod]('click', swiper.onClick, true);
		// #endif
	}

	if (params.cssMode) {
		wrapperEl[domMethod]('scroll', swiper.onScroll);
	}

	if (params.updateOnWindowResize) {
		swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' :
			'resize observerUpdate', onResize, true);
	} else {
		swiper[swiperMethod]('observerUpdate', onResize, true);
	}
};

function attachEvents() {
	const swiper = this;
	const {
		params,
		support
	} = swiper;
	swiper.onTouchStart = onTouchStart.bind(swiper);
	swiper.onTouchMove = onTouchMove.bind(swiper);
	swiper.onTouchEnd = onTouchEnd.bind(swiper);
	if (params.cssMode) {
		swiper.onScroll = onScroll.bind(swiper);
	}

	swiper.onClick = onClick.bind(swiper);

	events(swiper, 'on');
}

function detachEvents() {
	const swiper = this;
	events(swiper, 'off');
}

export default {
	attachEvents,
	detachEvents
};
