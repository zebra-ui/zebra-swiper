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
		} else if (args.length === 2 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -
				1) ===
			'Object') {
			params = args[0];
			native = args[1];
		} else {
			[el, params, native] = args;
		}
		if (!params) params = {};
		params = extend({}, params);
		if (el && !params.el) params.el = el;

		// Swiper Instance
		swiper.__swiper__ = true;
		swiper.support = getSupport();
		swiper.device = getDevice({
			userAgent: params.userAgent
		});
		swiper.browser = getBrowser();

		swiper.eventsListeners = {};
		swiper.eventsAnyListeners = [];
		swiper.modules = [...swiper.__modules__];
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
				return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch :
					swiper.touchEventsDesktop;
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
			imagesLoaded: 0,
			virtualList: [],
			virtualIndexList: [],
		});
		swiper.emit('_swiper'); // Init

		if (swiper.params.init) {
			swiper.init();
		} // Return app instance
		return swiper;


	}

	enable() {
		const swiper = this;
		if (swiper.enabled) return;
		swiper.enabled = true;
		if (swiper.params.grabCursor) {
			swiper.setGrabCursor();
		}
		swiper.emit('enable');
	}

	disable() {
		const swiper = this;
		if (!swiper.enabled) return;
		swiper.enabled = false;
		if (swiper.params.grabCursor) {
			swiper.unsetGrabCursor();
		}
		swiper.emit('disable');
	}

	setProgress(progress, speed) {
		const swiper = this;
		progress = Math.min(Math.max(progress, 0), 1);
		const min = swiper.minTranslate();
		const max = swiper.maxTranslate();
		const current = (max - min) * progress + min;
		swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
		swiper.updateActiveIndex();
		swiper.updateSlidesClasses();
	}

	emitContainerClasses() {
		const swiper = this;
		if (!swiper.params._emitClasses || !swiper.el) return;
		const cls = swiper.native.contentClass.split(' ').filter(className => {
			return className.indexOf('swiper') === 0 || className.indexOf(swiper.params
				.containerModifierClass) === 0;
		});
		swiper.emit('_containerClasses', cls.join(' '));
	}

	getSlideClasses(slideEl) {
		const swiper = this;
		return slideEl.slideClass.split(' ').filter(className => {
			return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params
				.slideClass) === 0;
		}).join(' ');
	}

	emitSlidesClasses() {
		const swiper = this;
		if (!swiper.params._emitClasses || !swiper.el) return;
		const updates = [];
		swiper.slides.forEach(slideEl => {
			const classNames = swiper.getSlideClasses(slideEl);
			updates.push({
				slideEl,
				classNames
			});
			swiper.emit('_slideClass', slideEl, classNames);
		});
		swiper.emit('_slideClasses', updates);
	}

	slidesPerViewDynamic(view = 'current', exact = false) {
		const swiper = this;
		const {
			params,
			slides,
			slidesGrid,
			slidesSizesGrid,
			size: swiperSize,
			activeIndex
		} = swiper;
		let spv = 1;
		if (params.centeredSlides) {
			let slideSize = slides[activeIndex].swiperSlideSize;
			let breakLoop;
			for (let i = activeIndex + 1; i < slides.length; i += 1) {
				if (slides[i] && !breakLoop) {
					slideSize += slides[i].swiperSlideSize;
					spv += 1;
					if (slideSize > swiperSize) breakLoop = true;
				}
			}
			for (let i = activeIndex - 1; i >= 0; i -= 1) {
				if (slides[i] && !breakLoop) {
					slideSize += slides[i].swiperSlideSize;
					spv += 1;
					if (slideSize > swiperSize) breakLoop = true;
				}
			}
		} else {
			// eslint-disable-next-line
			if (view === 'current') {
				for (let i = activeIndex + 1; i < slides.length; i += 1) {
					const slideInView = exact ?
						slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize :
						slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
					if (slideInView) {
						spv += 1;
					}
				}
			} else {
				// previous
				for (let i = activeIndex - 1; i >= 0; i -= 1) {
					const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
					if (slideInView) {
						spv += 1;
					}
				}
			}
		}
		return spv;
	}

	changeDirection(newDirection, needUpdate) {
		if (needUpdate === void 0) {
			needUpdate = true;
		}

		const swiper = this;
		const currentDirection = swiper.params.direction;

		if (!newDirection) {
			// eslint-disable-next-line
			newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
		}

		if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
			return swiper;
		}

		swiper.$wrapperEl.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`)
		swiper.$wrapperEl.addClass(
			`${swiper.params.containerModifierClass}${newDirection}`);
		swiper.emitContainerClasses();
		swiper.params.direction = newDirection;
		swiper.slides.forEach(slideEl => {
			if (newDirection === 'vertical') {
				slideEl.css({
					width: ''
				})
			} else {
				slideEl.css({
					height: ''
				})
			}
		});
		swiper.emit('changeDirection');
		if (needUpdate) swiper.update();
		return swiper;
	}

	async update(el) {
		const swiper = this;
		if (!swiper || swiper.destroyed) return;
		const {
			snapGrid,
			params
		} = swiper; // Breakpoints


		el = await swiper.native.getRect();
		if (!el) {
			return false;
		}
		Object.assign(swiper, {
			el,
			$el: swiper.native,
		});
		swiper.emit('beforeUpdate');
		if (params.breakpoints) {
			swiper.setBreakpoint();
		}
		swiper.updateSize();
		swiper.updateSlides();
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
		el = await swiper.native.getRect();
		if (!el) {
			return false;
		}
		swiper.emit('beforeMount'); // Set breakpoint
		// let $wrapperEl = new DomSimulation(swiper.native);
		// let $el = new DomSimulation(swiper.native);
		// if (swiper.native && swiper.native.children && swiper.native.children.length) {
		// 	swiper.native.children.forEach((item) => {
		// 		item.$itemEl = new ChildDomSimulation(item);
		// 	})
		// }
		Object.assign(swiper, {
			$el: swiper.native,
			el,
			$wrapperEl: swiper.native,
			wrapperEl: swiper.native,
			mounted: true,
		});

		return true;
	}
	async init(el) {
		const swiper = this;
		if (swiper.initialized) return swiper;
		const mounted = await swiper.mount(el);
		if (mounted === false) return swiper;
		swiper.emit('beforeInit'); // Set breakpoint

		swiper.addClasses(); // Create loop

		if (swiper.params.loop) {
			swiper.loopCreate();
		} // Update size

		swiper.updateSize(); // Update slides

		swiper.updateSlides();

		if (swiper.params.watchOverflow) {
			swiper.checkOverflow();
		} // Set Grab Cursor


		if (swiper.params.grabCursor && swiper.enabled) {
			swiper.setGrabCursor();
		}

		// if (swiper.params.loop) {
		// 	swiper.on("update", () => {
		// 		swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params
		// 			.runCallbacksOnInit,
		// 			false, true);
		// 	})
		// } else {
		// 	swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
		// } // Attach events
		// Slide To Initial Slide
		if (swiper.params.loop) {
			swiper.slideTo(
				swiper.params.initialSlide + swiper.loopedSlides,
				0,
				swiper.params.runCallbacksOnInit,
				false,
				true,
			);
		} else {
			swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
		}
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
	static extendDefaults(newDefaults) {
		extend(extendedDefaults, newDefaults);
	}
	static get extendedDefaults() {
		return extendedDefaults;
	}
	static get defaults() {
		return defaults;
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
