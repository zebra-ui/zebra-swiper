import transitionEmit from './transitionEmit.js';
export default function transitionEnd(runCallbacks = true, direction) {
	const swiper = this;
	const {
		params
	} = swiper;
	swiper.animating = false;
	if (params.cssMode) return;
	transitionEmit({
		swiper,
		runCallbacks,
		direction,
		step: 'End'
	});
}
