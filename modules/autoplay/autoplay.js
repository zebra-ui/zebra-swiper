import {
	nextTick
} from '../../shared/utils.js';
export default function Autoplay({
	swiper,
	extendParams,
	on,
	emit
}) {
	let timeout;
	swiper.autoplay = {
		running: false,
		paused: false
	};
	extendParams({
		autoplay: {
			enabled: false,
			delay: 3000,
			waitForTransition: true,
			disableOnInteraction: true,
			stopOnLastSlide: false,
			reverseDirection: false,
			pauseOnMouseEnter: false
		}
	});

	function run() {
		const $activeSlideEl = swiper.slides[swiper.activeIndex];
		let delay = swiper.params.autoplay.delay;
		clearTimeout(timeout);
		timeout = nextTick(() => {
			let autoplayResult;
			if (swiper.params.autoplay.reverseDirection) {
				if (swiper.params.loop) {
					swiper.loopFix();
					autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
					emit('autoplay');
				} else if (!swiper.isBeginning) {
					autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
					emit('autoplay');
				} else if (!swiper.params.autoplay.stopOnLastSlide) {
					autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
					emit('autoplay');
				} else {
					stop();
				}
			} else if (swiper.params.loop) {
				swiper.loopFix();
				setTimeout(() => {
					autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
				}, 30)

				emit('autoplay');
			} else if (!swiper.isEnd) {
				autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
				emit('autoplay');
			} else if (!swiper.params.autoplay.stopOnLastSlide) {
				autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
				emit('autoplay');
			} else {
				stop();
			}

			if (swiper.params.cssMode && swiper.autoplay.running) run();
			else if (autoplayResult === false) {
				run();
			}
		}, delay);
	}

	function start() {
		if (typeof timeout !== 'undefined') return false;
		if (swiper.autoplay.running) return false;
		swiper.autoplay.running = true;
		emit('autoplayStart');
		run();
		return true;
	}

	function stop() {
		if (!swiper.autoplay.running) return false;
		if (typeof timeout === 'undefined') return false;

		if (timeout) {
			clearTimeout(timeout);
			timeout = undefined;
		}

		swiper.autoplay.running = false;
		emit('autoplayStop');
		return true;
	}

	function pause(speed) {
		if (!swiper.autoplay.running) return;
		if (swiper.autoplay.paused) return;
		if (timeout) clearTimeout(timeout);
		swiper.autoplay.paused = true;

		if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
			swiper.autoplay.paused = false;
			run();
		} else {
			['transitionEnd', 'webkitTransitionEnd'].forEach(event => {
				swiper.on(event, onTransitionEnd);
			});
		}
	}

	function onVisibilityChange() {
		// const document = getDocument();

		// if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
		// 	pause();
		// }

		// if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
		// 	run();
		// 	swiper.autoplay.paused = false;
		// }
	}

	function onTransitionEnd(e) {
		if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
		// if (e.target !== swiper.$wrapperEl[0]) return;
		['transitionEnd', 'webkitTransitionEnd'].forEach(event => {
			swiper.off(event, onTransitionEnd);
		});
		swiper.autoplay.paused = false;

		if (!swiper.autoplay.running) {
			stop();
		} else {
			run();
		}
	}

	function onMouseEnter() {
		if (swiper.params.autoplay.disableOnInteraction) {
			stop();
		} else {
			pause();
		}

		// ['transitionend', 'webkitTransitionEnd'].forEach(event => {
		// 	swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
		// });
	}

	function onMouseLeave() {
		if (swiper.params.autoplay.disableOnInteraction) {
			return;
		}

		swiper.autoplay.paused = false;
		run();
	}

	function attachMouseEvents() {
		if (swiper.params.autoplay.pauseOnMouseEnter) {}
	}

	function detachMouseEvents() {}

	on('init update', () => {
		if (swiper.params.autoplay.enabled) {
			start();
			attachMouseEvents();
		}
	});
	on('beforeTransitionStart', (_s, speed, internal) => {
		if (swiper.autoplay.running) {
			if (internal || !swiper.params.autoplay.disableOnInteraction) {
				swiper.autoplay.pause(speed);
			} else {
				if (!swiper.params.loop) {
					stop();
				}

			}
		}
	});
	on('sliderFirstMove', () => {
		if (swiper.autoplay.running) {
			if (swiper.params.autoplay.disableOnInteraction) {
				stop();
			} else {
				pause();
			}
		}
	});
	on('touch-end', () => {
		if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
			run();
		}
	});
	on('destroy', () => {
		detachMouseEvents();

		if (swiper.autoplay.running) {
			stop();
		}
	});
	Object.assign(swiper.autoplay, {
		pause,
		run,
		start,
		stop
	});
}
