export default async function updateSlidesOffset() {
	const swiper = this;
	const slides = swiper.slides;

	for (let i = 0; i < slides.length; i += 1) {
		if (swiper.params.thumbs.use) {
			// 再重新获取一次位置
			await slides[i].getRect();
		}
		slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft :
			slides[i].offsetTop;
		// slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].swiperSlideSize * i :
		// 	slides[i].swiperSlideSize * i;

	}


}
