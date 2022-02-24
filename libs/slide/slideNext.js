export default function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
	const swiper = this;
	const {
		animating,
		enabled,
		params
	} = swiper;
	if (!enabled) return swiper;
	let perGroup = params.slidesPerGroup;

	if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
		perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
	}

	const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;

	if (params.loop) {
		if (animating && params.loopPreventsSlide) return false;
		swiper.loopFix();
	}

	if (params.rewind && swiper.isEnd) {
		return swiper.slideTo(0, speed, runCallbacks, internal);
	}
	setTimeout(() => {
		swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal)
	}, 30)
	return true;
}
