import {
	nextTick
} from '../../shared/utils.js';

export default function Scrollbar({
	swiper,
	extendParams,
	on,
	emit
}) {

	let isTouched = false;
	let timeout = null;
	let dragTimeout = null;
	let dragStartPos;
	let dragSize;
	let trackSize;
	let divider;

	extendParams({
		scrollbar: {
			el: null,
			dragSize: 'auto',
			hide: false,
			draggable: false,
			snapOnRelease: true,
			lockClass: 'swiper-scrollbar-lock',
			dragClass: 'swiper-scrollbar-drag',
		},
	});

	swiper.scrollbar = {
		el: null,
		dragEl: null,
		$el: null,
		$dragEl: null,
	};

	function setTranslate() {
		if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
		const {
			scrollbar,
			rtlTranslate: rtl,
			progress
		} = swiper;
		const params = swiper.params.scrollbar;

		let newSize = dragSize;
		let newPos = (trackSize - dragSize) * progress;
		if (rtl) {
			newPos = -newPos;
			if (newPos > 0) {
				newSize = dragSize - newPos;
				newPos = 0;
			} else if (-newPos + dragSize > trackSize) {
				newSize = trackSize + newPos;
			}
		} else if (newPos < 0) {
			newSize = dragSize + newPos;
			newPos = 0;
		} else if (newPos + dragSize > trackSize) {
			newSize = trackSize - newPos;
		}
		if (swiper.isHorizontal()) {
			swiper.$wrapperEl.scrollbarItemTransform(`translate3d(${newPos}px, 0, 0)`);
			swiper.$wrapperEl.scrollbarItemCss({
				width: `${newSize}px`
			})
		} else {
			swiper.$wrapperEl.scrollbarItemTransform(`translate3d(0px, ${newPos}px, 0)`);
			swiper.$wrapperEl.scrollbarItemCss({
				height: `${newSize}px`
			})
		}
		if (params.hide) {
			clearTimeout(timeout);
			swiper.$wrapperEl.scrollbarCss({
				opacity: 1
			})
			timeout = setTimeout(() => {
				swiper.$wrapperEl.scrollbarCss({
					opacity: 0
				})
				swiper.$wrapperEl.scrollbarTransition(400)
			}, 1000);
		}
	}

	function setTransition(duration) {
		if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
		swiper.$wrapperEl.scrollbarItemTransition(duration);
	}

	async function updateSize() {
		if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;

		const {
			scrollbar
		} = swiper;
		const {
			$el,
			methods
		} = scrollbar;

		swiper.$wrapperEl.scrollbarItemCss({
			width: '',
			height: ''
		})
		let rectInfo = await swiper.native.getRectScrollbar();

		methods.offset = function() {
			return rectInfo;
		}
		trackSize = swiper.isHorizontal() ? rectInfo.width : rectInfo.height;

		divider =
			swiper.size /
			(swiper.virtualSize +
				swiper.params.slidesOffsetBefore -
				(swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
		if (swiper.params.scrollbar.dragSize === 'auto') {
			dragSize = trackSize * divider;
		} else {
			dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
		}

		if (swiper.isHorizontal()) {
			swiper.$wrapperEl.scrollbarItemCss({
				width: `${dragSize}px`
			})
		} else {
			swiper.$wrapperEl.scrollbarItemCss({
				height: `${dragSize}px`
			})
		}

		if (divider >= 1) {
			swiper.$wrapperEl.scrollbarCss({
				display: 'none'
			})
		} else {
			swiper.$wrapperEl.scrollbarCss({
				display: ''
			})
		}
		if (swiper.params.scrollbar.hide) {
			swiper.$wrapperEl.scrollbarCss({
				opacity: 0
			})
		}

		if (swiper.params.watchOverflow && swiper.enabled) {
			swiper.$wrapperEl[swiper.isLocked ? 'addScrollbarClass' : 'removeScrollbarClass'](
				swiper.params.scrollbar.lockClass,
			);
		}
	}

	function getPointerPosition(e) {
		if (swiper.isHorizontal()) {
			return e.type === 'touchstart' || e.type === 'touchmove' || 'touchStart' || e.type === 'touchMove' ?
				e.touches[0].clientX :
				e.clientX;
		}
		return e.type === 'touchstart' || e.type === 'touchmove' ?
			e.touches[0].clientY :
			e.clientY;
	}

	function setDragPosition(e) {
		const {
			scrollbar,
			rtlTranslate: rtl
		} = swiper;
		const {
			$el,
			methods
		} = scrollbar;

		let positionRatio;
		positionRatio =
			(getPointerPosition(e) -
				methods.offset()[swiper.isHorizontal() ? 'left' : 'top'] -
				(dragStartPos !== null ? dragStartPos : dragSize / 2)) /
			(trackSize - dragSize);
		positionRatio = Math.max(Math.min(positionRatio, 1), 0);
		if (rtl) {
			positionRatio = 1 - positionRatio;
		}

		const position =
			swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;

		swiper.updateProgress(position);
		swiper.setTranslate(position);
		swiper.updateActiveIndex();
		swiper.updateSlidesClasses();
	}

	function onDragStart(_s, e) {
		const params = swiper.params.scrollbar;
		const {
			scrollbar,
			$wrapperEl
		} = swiper;
		isTouched = true;
		dragStartPos =
			// e.target ===
			//  $dragEl[0] || e.target === $dragEl ?
			// getPointerPosition(e) -
			// e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] :
			null;
		// e.preventDefault();
		// e.stopPropagation();

		$wrapperEl.transition(100);
		swiper.$wrapperEl.scrollbarItemTransition(100)
		// $dragEl.transition(100);
		setDragPosition(e);

		clearTimeout(dragTimeout);
		swiper.$wrapperEl.scrollbarTransition(0)
		if (params.hide) {
			swiper.$wrapperEl.scrollbarCss({
				opacity: 1
			})
		}
		if (swiper.params.cssMode) {
			swiper.$wrapperEl.css({
				'scroll-snap-type': 'none'
			});
		}
		emit('scrollbarDragStart', e);
	}

	function onDragMove(_s, e) {
		const {
			scrollbar,
			$wrapperEl
		} = swiper;

		if (!isTouched) return;
		setDragPosition(e);
		$wrapperEl.transition(0);
		swiper.$wrapperEl.scrollbarTransition(0)
		swiper.$wrapperEl.scrollbarItemTransition(0)
		emit('scrollbarDragMove', e);
	}

	function onDragEnd(_s, e) {
		const params = swiper.params.scrollbar;
		const {
			scrollbar,
			$wrapperEl
		} = swiper;
		const {
			$el
		} = scrollbar;

		if (!isTouched) return;
		isTouched = false;
		if (swiper.params.cssMode) {
			swiper.$wrapperEl.css({
				'scroll-snap-type': ''
			});
			$wrapperEl.transition('');
		}
		if (params.hide) {
			clearTimeout(dragTimeout);
			dragTimeout = nextTick(() => {
				swiper.$wrapperEl.scrollbarCss({
					opacity: 0
				})
				swiper.$wrapperEl.scrollbarTransition(400)
			}, 1000);
		}
		emit('scrollbarDragEnd', e);
		if (params.snapOnRelease) {
			swiper.slideToClosest();
		}
	}

	function events(method) {
		const {
			scrollbar,
			touchEventsTouch,
			touchEventsDesktop,
			params,
			support
		} = swiper;
		const $el = scrollbar.$el;
		const target = $el;
		const activeListener =
			support.passiveListener && params.passiveListeners ? {
				passive: false,
				capture: false
			} :
			false;
		const passiveListener =
			support.passiveListener && params.passiveListeners ? {
				passive: true,
				capture: false
			} :
			false;
		if (!target) return;
		const eventMethod = method === 'on' ? 'on' : 'off';
		if (!support.touch) {
			swiper[eventMethod]('touchStartScrollbar', onDragStart, activeListener);
			swiper[eventMethod]('touchMoveScrollbar', onDragMove, activeListener);
			swiper[eventMethod]('touchEndScrollbar', onDragEnd, passiveListener);
		} else {
			swiper[eventMethod]('touchStartScrollbar', onDragStart, activeListener);
			swiper[eventMethod]('touchMoveScrollbar', onDragMove, activeListener);
			swiper[eventMethod]('touchEndScrollbar', onDragEnd, passiveListener);
		}
	}

	function enableDraggable() {
		if (!swiper.params.scrollbar.el) return;
		events('on');
	}

	function disableDraggable() {
		if (!swiper.params.scrollbar.el) return;
		events('off');
	}

	function init() {
		const {
			scrollbar,
		} = swiper;
		const params = swiper.params.scrollbar;
		if (!params.el) return;
		// swiper.native.updateData({
		// 	scrollbarShow: true
		// })
		let $el = params.el;

		Object.assign(scrollbar, {
			$el,
			el: $el,
			methods: {}
		});

		if (params.draggable) {
			enableDraggable();
		}

		swiper.$wrapperEl[swiper.enabled ? 'removeScrollbarClass' : 'addScrollbarClass'](swiper.params.scrollbar
			.lockClass);
		return true;
	}

	function destroy() {
		disableDraggable();
	}

	on('init', async () => {
		await init();
		updateSize();
		setTranslate();
	});
	on('update resize observerUpdate lock unlock', () => {
		updateSize();
	});
	on('setTranslate', () => {
		setTranslate();
	});
	on('setTransition', (_s, duration) => {
		setTransition(duration);
	});
	on('enable disable', () => {
		const {
			$el
		} = swiper.scrollbar;
		if ($el) {
			$el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
		}
	});
	on('destroy', () => {
		destroy();
	});

	Object.assign(swiper.scrollbar, {
		updateSize,
		setTranslate,
		init,
		destroy,
	});
}
