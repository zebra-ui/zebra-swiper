import {
	extend,
	now,
	deleteProps
} from '../shared/utils.js';
import {
	getSupport
} from '../shared/get-support.js';
import {
	getDevice
} from '../shared/get-device.js';
import {
	getBrowser
} from '../shared/get-browser.js';
import moduleExtendParams from './moduleExtendParams.js';
import eventsEmitter from './events-emitter.js';
import update from './update/index.js';
import translate from './translate/index.js';
import transition from './transition/index.js';
import defaults from './defaults.js';
import classes from './classes/index.js';
import checkOverflow from './check-overflow/index.js';
import slide from './slide/index.js';
import loop from './loop/index.js';
import grabCursor from './grab-cursor/index.js';
import events from './events/index.js';
import DomSimulation from './dom-simulation/parent.js';
import ChildDomSimulation from './dom-simulation/child.js';
import {
	getRect
} from './utils/utils.js';
const prototypes = {
	eventsEmitter,
	update,
	checkOverflow,
	slide,
	loop,
	translate,
	transition,
	grabCursor,
	events,
	classes
};
const extendedDefaults = {};
class Swiper {
	constructor(...args) {
		const swiper = this;
		let params;
		let el;
		let native;
		if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) ===
			'Object') {
			params = args[0];
			native = args[1];
		} else {
			[el, params, native] = args;
		}
		if (!params) params = {};
		params = extend({}, params);
		if (el && !params.el) params.el = el;
		swiper.modules = [...swiper.__modules__];
		swiper.support = getSupport();
		swiper.device = getDevice({
			userAgent: params.userAgent
		});
		swiper.browser = getBrowser();
		swiper.eventsListeners = {};
		swiper.native = native;
		if (params.modules && Array.isArray(params.modules)) {
			swiper.modules.push(...params.modules);
		}
		const allModulesParams = {};
		swiper.modules.forEach(mod => {
			mod({
				swiper,
				extendParams: moduleExtendParams(params, allModulesParams),
				on: swiper.on.bind(swiper),
				once: swiper.once.bind(swiper),
				off: swiper.off.bind(swiper),
				emit: swiper.emit.bind(swiper)
			});
		}); // Extend defaults with modules params
		const swiperParams = extend({}, defaults, allModulesParams); // Extend defaults with passed params

		swiper.params = extend({}, swiperParams, extendedDefaults, params);
		swiper.originalParams = extend({}, swiper.params);
		swiper.passedParams = extend({}, params); // add event listeners

		if (swiper.params && swiper.params.on) {
			Object.keys(swiper.params.on).forEach(eventName => {
				swiper.on(eventName, swiper.params.on[eventName]);
			});
		}

		if (swiper.params && swiper.params.onAny) {
			swiper.onAny(swiper.params.onAny);
		} // Save Dom lib

		Object.assign(swiper, {
			enabled: swiper.params.enabled,
			el,
			// Classes
			classNames: [],
			// Slides
			slides: [],
			slidesGrid: [],
			snapGrid: [],
			slidesSizesGrid: [],

			// isDirection
			isHorizontal() {
				return swiper.params.direction === 'horizontal';
			},

			isVertical() {
				return swiper.params.direction === 'vertical';
			},

			// Indexes
			activeIndex: 0,
			realIndex: 0,
			//
			isBeginning: true,
			isEnd: false,
			// Props
			translate: 0,
			previousTranslate: 0,
			progress: 0,
			velocity: 0,
			animating: false,
			// Locks
			allowSlideNext: swiper.params.allowSlideNext,
			allowSlidePrev: swiper.params.allowSlidePrev,
			// Touch Events
			touchEvents: function touchEvents() {
				const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
				const desktop = ['pointerdown', 'pointermove', 'pointerup'];
				swiper.touchEventsTouch = {
					start: touch[0],
					move: touch[1],
					end: touch[2],
					cancel: touch[3]
				};
				swiper.touchEventsDesktop = {
					start: desktop[0],
					move: desktop[1],
					end: desktop[2]
				};
				// return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch :
				// 	swiper.touchEventsDesktop;
				return swiper.touchEventsTouch;
			}(),
			touchEventsData: {
				isTouched: undefined,
				isMoved: undefined,
				allowTouchCallbacks: undefined,
				touchStartTime: undefined,
				isScrolling: undefined,
				currentTranslate: undefined,
				startTranslate: undefined,
				allowThresholdMove: undefined,
				// Form elements to match
				focusableElements: swiper.params.focusableElements,
				// Last click time
				lastClickTime: now(),
				clickTimeout: undefined,
				// Velocities
				velocities: [],
				allowMomentumBounce: undefined,
				isTouchEvent: undefined,
				startMoving: undefined
			},
			// Clicks
			allowClick: true,
			// Touches
			allowTouchMove: swiper.params.allowTouchMove,
			touches: {
				startX: 0,
				startY: 0,
				currentX: 0,
				currentY: 0,
				diff: 0
			},
			// Images
			imagesToLoad: [],
			imagesLoaded: 0
		});
		swiper.emit('_swiper'); // Init

		if (swiper.params.init) {
			swiper.init();
		} // Return app instance
		return swiper;


	}
	emitContainerClasses() {
		const swiper = this;
		if (!swiper.params._emitClasses || !swiper.el) return;
		const cls = swiper.el.className.split(' ').filter(className => {
			return className.indexOf('swiper') === 0 || className.indexOf(swiper.params
				.containerModifierClass) === 0;
		});
		swiper.emit('_containerClasses', cls.join(' '));
	}
	getSlideClasses(slideEl) {
		const swiper = this;
		return slideEl.className.split(' ').filter(className => {
			return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params
				.slideClass) === 0;
		}).join(' ');
	}
	emitSlidesClasses() {
		const swiper = this;
		if (!swiper.params._emitClasses || !swiper.el) return;
		const updates = [];
		swiper.slides.each(slideEl => {
			const classNames = swiper.getSlideClasses(slideEl);
			updates.push({
				slideEl,
				classNames
			});
			swiper.emit('_slideClass', slideEl, classNames);
		});
		swiper.emit('_slideClasses', updates);
	}
	updateItemEl() {
		const swiper = this;
		let $wrapperEl = new DomSimulation(swiper.native);
		let $el = new DomSimulation(swiper.native);
		if (swiper.native && swiper.native.children && swiper.native.children.length) {
			swiper.native.children.forEach((item, index) => {
				item.$itemEl = new ChildDomSimulation(item);
				if (swiper.params.loop) {
					if (index == 0) {
						item.dataSwiperSlideIndex = swiper.native.children.length - 3;
					} else if (index == swiper.native.children.length - 1) {
						item.dataSwiperSlideIndex = 0;
					} else {
						item.dataSwiperSlideIndex = index - 1;
					}

				}
			})
		}
		Object.assign(swiper, {
			$el,
			$wrapperEl
		});
		return true;
	}
	async update(el) {
		const swiper = this;
		if (!swiper || swiper.destroyed) return;
		const {
			snapGrid,
			params
		} = swiper; // Breakpoints


		el = swiper.native.rectInfo;
		if (!el) {
			return false;
		}
		let $wrapperEl = new DomSimulation(swiper.native);
		let $el = new DomSimulation(swiper.native);
		if (swiper.native && swiper.native.children && swiper.native.children.length) {
			swiper.native.children.forEach((item) => {
				item.$itemEl = new ChildDomSimulation(item);
			})
		}
		Object.assign(swiper, {
			$el,
			el,
			$wrapperEl,
			wrapperEl: $wrapperEl.native,
			mounted: true,
		});

		if (params.breakpoints) {
			swiper.setBreakpoint();
		}

		await swiper.updateSize();
		await swiper.updateSlides();
		swiper.updateProgress();
		swiper.updateSlidesClasses();

		function setTranslate() {
			const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
			const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
			swiper.setTranslate(newTranslate);
			swiper.updateActiveIndex();
			swiper.updateSlidesClasses();
		}

		let translated;

		if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
			setTranslate();

			if (swiper.params.autoHeight) {
				swiper.updateAutoHeight();
			}
		} else {
			if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !
				swiper.params.centeredSlides) {
				translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
			} else {
				translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
			}

			if (!translated) {
				setTranslate();
			}
		}

		if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
			swiper.checkOverflow();
		}
		swiper.emit('update');
	}
	async mount(el) {
		const swiper = this;
		if (swiper.mounted) return true; // Find el
		el = swiper.native.rectInfo;
		if (!el) {
			return false;
		}
		swiper.emit('beforeMount'); // Set breakpoint
		let $wrapperEl = new DomSimulation(swiper.native);
		let $el = new DomSimulation(swiper.native);
		if (swiper.native && swiper.native.children && swiper.native.children.length) {
			swiper.native.children.forEach((item) => {
				item.$itemEl = new ChildDomSimulation(item);
			})
		}
		Object.assign(swiper, {
			$el,
			el,
			$wrapperEl,
			wrapperEl: $wrapperEl.native,
			mounted: true,
		});

		return true;
	}
	async init(el) {
		const swiper = this;
		if (swiper.initialized) return swiper;
		const mounted = await swiper.mount(el);
		if (mounted === false) return swiper;
		swiper.emit('swiper'); // Init
		swiper.emit('beforeInit'); // Set breakpoint

		swiper.addClasses(); // Create loop

		if (swiper.params.loop) {
			await swiper.loopCreate();
		} // Update size

		swiper.updateSize(); // Update slides

		await swiper.updateSlides();

		if (swiper.params.watchOverflow) {
			swiper.checkOverflow();
		} // Set Grab Cursor


		if (swiper.params.grabCursor && swiper.enabled) {
			swiper.setGrabCursor();
		}

		if (swiper.params.loop) {
			swiper.on("update", () => {
				swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params
					.runCallbacksOnInit,
					false, true);
			})
		} else {
			swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
		} // Attach events
		swiper.attachEvents(); // Init Flag
		swiper.initialized = true; // Emit
		swiper.emit('init');
		swiper.emit('afterInit');
		return swiper;
	}
	destroy(deleteInstance = true, cleanStyles = true) {
		const swiper = this;
		const {
			params,
			$el,
			$wrapperEl,
			slides
		} = swiper;

		if (typeof swiper.params === 'undefined' || swiper.destroyed) {
			return null;
		}

		swiper.emit('beforeDestroy'); // Init Flag

		swiper.initialized = false; // Detach events

		swiper.detachEvents(); // Destroy loop

		if (params.loop) {
			swiper.loopDestroy();
		} // Cleanup styles

		swiper.emit('destroy'); // Detach emitter events

		Object.keys(swiper.eventsListeners).forEach(eventName => {
			swiper.off(eventName);
		});

		if (deleteInstance !== false) {
			deleteProps(swiper);
		}

		swiper.destroyed = true;
		return null;
	}
	static installModule(mod) {
		if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
		const modules = Swiper.prototype.__modules__;

		if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
			modules.push(mod);
		}
	}
	static use(module) {
		if (Array.isArray(module)) {
			module.forEach(m => Swiper.installModule(m));
			return Swiper;
		}

		Swiper.installModule(module);
		return Swiper;
	}
}
Object.keys(prototypes).forEach(prototypeGroup => {
	Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
		Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
	});
});
export default Swiper;
