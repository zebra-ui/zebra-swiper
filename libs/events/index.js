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
	const domMethod = method === 'on' ? 'on' : 'off';
	const swiperMethod = method;
	if (!support.touch) {
		let desktopMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
		if (document.querySelector(`#${swiper.$el.swiperElId}`)) {
			document.querySelector(`#${swiper.$el.swiperElId}`)[desktopMethod](touchEvents.start, swiper
				.onTouchStart,
				false);
		}
		document[desktopMethod](touchEvents.move, swiper.onTouchMove, capture);
		document[desktopMethod](touchEvents.end, swiper.onTouchEnd, false);
	} else {
		const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params
			.passiveListeners ? {
				passive: true,
				capture: false
			} : false;
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
