export default function updateSize() {
	const swiper = this;
	let width;
	let height;
	const el = swiper.el;
	if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
		width = swiper.params.width;
	} else {
		width = el.width;
	}

	if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
		height = swiper.params.height;
	} else {
		height = el.height;
	}

	if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
		return;
	} // Subtract paddings
	if (Number.isNaN(width)) width = 0;
	if (Number.isNaN(height)) height = 0;
	Object.assign(swiper, {
		width,
		height,
		size: swiper.isHorizontal() ? width : height
	});
}
