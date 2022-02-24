export default function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
	const swiper = this;
	const {
		params,
		animating,
		snapGrid,
		slidesGrid,
		rtlTranslate,
		enabled
	} = swiper;
	if (!enabled) return swiper;

	if (params.loop) {
		if (animating && params.loopPreventsSlide) return false;
		swiper.loopFix();

	}

	const translate = rtlTranslate ? swiper.translate : -swiper.translate;

	function normalize(val) {
		if (val < 0) return -Math.floor(Math.abs(val));
		return Math.floor(val);
	}

	const normalizedTranslate = normalize(translate);
	const normalizedSnapGrid = snapGrid.map(val => normalize(val));
	let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

	if (typeof prevSnap === 'undefined' && params.cssMode) {
		let prevSnapIndex;
		snapGrid.forEach((snap, snapIndex) => {
			if (normalizedTranslate >= snap) {
				prevSnapIndex = snapIndex;
			}
		});

		if (typeof prevSnapIndex !== 'undefined') {
			prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
		}
	}

	let prevIndex = 0;

	if (typeof prevSnap !== 'undefined') {
		prevIndex = slidesGrid.indexOf(prevSnap);
		if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;

		if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
			prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
			prevIndex = Math.max(prevIndex, 0);
		}
	}

	if (params.rewind && swiper.isBeginning) {
		return swiper.slideTo(swiper.slides.length - 1, speed, runCallbacks, internal);
	}

	setTimeout(() => {
		swiper.slideTo(prevIndex, speed, runCallbacks, internal)
	}, 30)
	return true;
}
