export default function Navigation({
	swiper,
	extendParams,
	on,
	emit
}) {
	extendParams({
		navigation: {
			nextEl: null,
			prevEl: null,

			hideOnClick: false,
			disabledClass: 'swiper-button-disabled',
			hiddenClass: 'swiper-button-hidden',
			lockClass: 'swiper-button-lock',
		},
	});

	swiper.navigation = {
		nextEl: null,
		$nextEl: null,
		prevEl: null,
		$prevEl: null,
	};

	function toggleEl($el, disabled) {
		if (!swiper.$wrapperEl) return
		// debugger
		const params = swiper.params.navigation;
		if ($el) {
			swiper.$wrapperEl[disabled ? `add${$el}` : `remove${$el}`](params.disabledClass);
			if (swiper.params.watchOverflow && swiper.enabled) {
				swiper.$wrapperEl[swiper.isLocked ? `add${$el}` : `remove${$el}`](params.lockClass);
			}
		}
	}

	function update() {
		// Update Navigation Buttons
		if (swiper.params.loop) return;
		const {
			$nextEl,
			$prevEl
		} = swiper.navigation;

		toggleEl('PrevElClass', swiper.isBeginning && !swiper.params.rewind);
		toggleEl('NextElClass', swiper.isEnd && !swiper.params.rewind);
	}

	function onPrevClick(e) {
		// e.preventDefault();
		if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
		swiper.slidePrev();
	}

	function onNextClick() {
		// e.preventDefault();
		if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
		swiper.slideNext();
	}

	function init() {
		const params = swiper.params.navigation;
		if (params.slot || params.custom) {
			params.nextEl = true;
			params.prevEl = true;
		}
		if (!(params.nextEl || params.prevEl) && !params.slot && !params.custom) return;
		if (params.slot) {
			swiper.native.updateData({
				showPrevButtonSlot: true,
				showNextButtonSlot: true
			})
		} else if (params.custom) {} else {
			swiper.native.updateData({
				showPrevButton: true,
				showNextButton: true
			})
		}

		const $nextEl = params.nextEl;
		const $prevEl = params.prevEl;

		if ($nextEl) {
			swiper.on('nextClick', onNextClick);
		}
		if ($prevEl) {
			swiper.on('prevClick', onPrevClick);
		}

		Object.assign(swiper.navigation, {
			$nextEl,
			nextEl: $nextEl,
			$prevEl,
			prevEl: $prevEl,
		});

		if (!swiper.enabled) {
			if ($nextEl) swiper.$wrapperEl.addNextElClass(params.lockClass);
			if ($prevEl) swiper.$wrapperEl.addPrevElClass(params.lockClass);
		}
	}

	function destroy() {
		const {
			$nextEl,
			$prevEl
		} = swiper.navigation;
		if ($nextEl) {
			swiper.off('nextClick', onNextClick);
			swiper.$wrapperEl.removeNextElClass(swiper.params.navigation.disabledClass);
		}
		if ($prevEl) {
			swiper.off('prevClick', onPrevClick);
			swiper.$wrapperEl.removePrevElClass(swiper.params.navigation.disabledClass);
		}
	}

	on('init', () => {
		init();
		update();
	});
	on('toEdge fromEdge lock unlock', () => {
		update();
	});
	on('destroy', () => {
		destroy();
	});
	on('enable disable', () => {
		const {
			$nextEl,
			$prevEl
		} = swiper.navigation;
		if ($nextEl) {
			swiper.$wrapperEl[swiper.enabled ? 'removeNextElClass' : 'addNextElClass'](swiper.params.navigation
				.lockClass);
			// $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
		}
		if ($prevEl) {
			swiper.$wrapperEl[swiper.enabled ? 'removePrevElClass' : 'addPrevElClass'](swiper.params.navigation
				.lockClass);
			// $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
		}
	});
	// on('click', (_s, e) => {
	// 	const {
	// 		$nextEl,
	// 		$prevEl
	// 	} = swiper.navigation;
	// 	const targetEl = e.target;
	// 	if (
	// 		swiper.params.navigation.hideOnClick &&
	// 		!$(targetEl).is($prevEl) &&
	// 		!$(targetEl).is($nextEl)
	// 	) {
	// 		if (
	// 			swiper.pagination &&
	// 			swiper.params.pagination &&
	// 			swiper.params.pagination.clickable &&
	// 			(swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))
	// 		)
	// 			return;
	// 		let isHidden;
	// 		if ($nextEl) {
	// 			isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
	// 		} else if ($prevEl) {
	// 			isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
	// 		}
	// 		if (isHidden === true) {
	// 			emit('navigationShow');
	// 		} else {
	// 			emit('navigationHide');
	// 		}
	// 		if ($nextEl) {
	// 			$nextEl.toggleClass(swiper.params.navigation.hiddenClass);
	// 		}
	// 		if ($prevEl) {
	// 			$prevEl.toggleClass(swiper.params.navigation.hiddenClass);
	// 		}
	// 	}
	// });

	Object.assign(swiper.navigation, {
		update,
		init,
		destroy,
	});
}
