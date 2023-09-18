import effectInit from '../../shared/effect-init.js';
import effectTarget from '../../shared/effect-target.js';
export default function EffectCarousel({
	swiper,
	extendParams,
	on
}) {
	extendParams({
		carouselEffect: {}
	});

	const setTranslate = () => {
		const scaleStep = 0.2;
		const zIndexMax = swiper.slides.length;
		for (let i = 0; i < swiper.slides.length; i += 1) {
			const slideEl = swiper.slides[i];
			const slideProgress = swiper.slides[i].progress;
			const absProgress = Math.abs(slideProgress);
			let modify = 1;
			if (absProgress > 1) {
				modify = (absProgress - 1) * 0.3 + 1;
			}
			const translate = `${slideProgress * modify * 50}%`;
			const scale = 1 - absProgress * scaleStep;
			const zIndex = zIndexMax - Math.abs(Math.round(slideProgress));
			const slideTransform = `translateX(${translate}) scale(${scale})`;
			slideEl.transform(slideTransform);
			slideEl.css({
				zIndex: zIndex
			})
			if (absProgress > 3) {
				slideEl.css({
					opacity: 0
				})
			} else {
				slideEl.css({
					opacity: 1
				})
			}
		}
	};

	const setTransition = duration => {
		const {
			transformEl
		} = swiper.params.coverflowEffect;
		const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
		for (var i = 0; i < $transitionElements.length; i++) {
			$transitionElements[i].transition(duration);
		}
	};

	effectInit({
		effect: 'carousel',
		swiper,
		on,
		setTranslate,
		setTransition,
		perspective: () => true,
		overwriteParams: () => ({
			watchSlidesProgress: true,
			slidesPerView: 'auto',
			centeredSlides: true,
		})
	});
}
