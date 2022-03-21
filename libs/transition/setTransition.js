export default function setTransition(duration, byController) {
	const swiper = this;
	if (!swiper.$wrapperEl) return
	if (!swiper.params.cssMode) {
		swiper.$wrapperEl.transition(duration);
	}

	swiper.emit('setTransition', duration, byController);
}
