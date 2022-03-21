export default async function updateSlidesOffset() {
	const swiper = this;
	const slides = swiper.slides;

	for (let i = 0; i < slides.length; i += 1) {
		let offset = (slides[i].swiperSlideSize + swiper.params.spaceBetween) * slides[i].index;
		slides[i].swiperSlideOffset = swiper.isHorizontal() ? offset :
			offset;
	}

}
