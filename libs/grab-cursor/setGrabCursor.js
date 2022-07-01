export default function setGrabCursor(moving) {
	const swiper = this;
	if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper
		.params.cssMode) return;
	const el = swiper.params.touchEventsTarget === 'container' ? swiper.$el : swiper.$wrapperEl;
	el.setCss({
		cursor: 'move',
		cursor: moving ? '-webkit-grabbing' : '-webkit-grab',
		cursor: moving ? '-moz-grabbin' : '-moz-grab',
		cursor: moving ? 'grabbing' : 'grab',
	})
}
