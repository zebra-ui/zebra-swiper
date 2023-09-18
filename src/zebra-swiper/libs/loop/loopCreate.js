export default function loopCreate() {
	const swiper = this;
	const {
		params,
		$wrapperEl,
		native
	} = swiper; // Remove duplicated slides
	const $selector = $wrapperEl;
	let slides = native.children;

	if (params.loopFillGroupWithBlank) {
		const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

		if (blankSlidesNum !== params.slidesPerGroup) {
			native.loopBlankShow = true;
			native.loopBlankNumber = blankSlidesNum;
		}
	}

	if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
	swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
	swiper.loopedSlides += params.loopAdditionalSlides;

	if (swiper.loopedSlides > slides.length) {
		swiper.loopedSlides = slides.length;
	}
	const prependSlides = [];
	const appendSlides = [];
	slides.forEach((el, index) => {
		const slide = el;
		if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
			prependSlides.push(el);
		}

		if (index < swiper.loopedSlides) {
			appendSlides.push(el);
		}
	});
	let list = [...swiper.native.value];
	let newList = [...list];
	swiper.originalDataList = [...swiper.native.value];
	for (let i = 0; i < appendSlides.length; i += 1) {
		newList.push(list[appendSlides[i].index]);
	}

	for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
		newList.unshift(list[prependSlides[i].index]);
	}
	swiper.native.$emit("input", newList)
	return true;
}
