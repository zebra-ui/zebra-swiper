export default function Panorama({
	swiper,
	extendParams,
	on
}) {
	extendParams({
		panorama: {
			depth: 200,
			rotate: 30,
			stretch: 1
		},
	});

	on('beforeInit', () => {
		if (swiper.params.effect !== 'panorama') return;
		swiper.classNames.push(`${swiper.params.containerModifierClass}panorama`);
		swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
		const overwriteParams = {
			watchSlidesProgress: true,
		};
		Object.assign(swiper.params, overwriteParams);
		Object.assign(swiper.originalParams, overwriteParams);
	});

	on('progress', () => {
		if (swiper.params.effect !== 'panorama') return;
		const sizesGrid = swiper.slidesSizesGrid;
		const {
			depth = 200, rotate = 30, stretch = 1
		} = swiper.params.panorama;
		const angleRad = (rotate * Math.PI) / 180;
		const halfAngleRad = angleRad / 2;
		const angleModifier = 1 / (180 / rotate);

		for (let i = 0; i < swiper.slides.length; i += 1) {
			const slideEl = swiper.slides[i];
			const slideProgress = slideEl.progress;
			const slideSize = sizesGrid[i];
			const progressModifier = swiper.params.centeredSlides ?
				0 :
				(swiper.params.slidesPerView - 1) * 0.5;
			const modifiedProgress = slideProgress + progressModifier;
			const angleCos = 1 - Math.cos(modifiedProgress * angleModifier * Math.PI);
			const translateX = `${modifiedProgress * (stretch * slideSize / 3) * angleCos}px`;
			const rotateY = modifiedProgress * rotate;
			const radius = (slideSize * 0.5) / Math.sin(halfAngleRad);
			const translateZ = `${radius * angleCos - depth}px`;
			slideEl.transform(
				`translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}deg)`);
			if (swiper.params.willChange) {
				slideEl.willChange("transform");
			}
			slideEl.addClass('swiper-slide-panorama')
		}
	});

	on('setTransition', (s, duration) => {
		if (swiper.params.effect !== 'panorama') return;
		swiper.slides.forEach((slideEl) => {
			slideEl.transition(duration);
		});
	});
}
