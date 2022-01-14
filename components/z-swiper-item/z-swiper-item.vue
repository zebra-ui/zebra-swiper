<template>
	<view :class="[bemMethods('swipe-item', [effect])]" :style="[style]">
		<template v-if="shouldRender">
			<slot></slot>
			<template v-if="effect == 'cube'">
				<view class="swiper-item-shadow-left" :style="[leftStyle]"></view>
				<view class="swiper-item-shadow-right" :style="[rightStyle]"></view>
			</template>
		</template>
	</view>
</template>

<script>
	import {
		ChildrenMixin
	} from '../../libs/mixins/relation.js';
	import bem from '../../libs/utils/bem.js';
	export default {
		name: "z-swipe-item",
		mixins: [ChildrenMixin('zSwipe')],
		data() {
			return {
				offset: 0,
				inited: false,
				mounted: false,
				style: {},
				leftStyle: {},
				rightStyle: {},
				shouldRender: false,
				effect: "",
				parentActive: 0,
				parentOffset: 0,
				creativeOptions: null
			};
		},

		mounted() {
			this.$nextTick(() => {
				this.mounted = true;
			});
			this.shouldRenderMethod();
			this.parent.$watch('options', (val) => {
				let creativeEffect = {
					transformEl: null,
					limitProgress: 1,
					shadowPerProgress: false,
					progressMultiplier: 1,
					perspective: true,
					prev: {
						translate: [0, 0, 0],
						rotate: [0, 0, 0],
						opacity: 1,
						scale: 1
					},
					next: {
						translate: [0, 0, 0],
						rotate: [0, 0, 0],
						opacity: 1,
						scale: 1
					}
				};
				let fadeEffect = {
					crossFade: false,
					transformEl: null,
				};
				if (val) {
					val.prev = Object.assign(creativeEffect.prev, val.prev);
					val.next = Object.assign(creativeEffect.next, val.next)
					this.creativeOptions = Object.assign(creativeEffect, val)
				}
			}, {
				immediate: true
			})

			this.parent.$watch('effect', (val) => {
				this.effect = val;
			}, {
				immediate: true
			})
			this.$watch(() => {
				return {
					offset: this.offset
				}
			}, (val) => {
				this.styleMethod();
			})
			this.parent.$watch(() => {
				return {
					offset: this.parent.offset,
					active: this.parent.active,
					size: this.parent.size,
				}
			}, (val) => {
				this.parentOffset = val.offset;
				this.parentActive = val.active;
				this.styleMethod();
			}, {
				deep: true
			})
		},

		computed: {

		},
		methods: {
			styleMethod() {
				const style = {};
				const leftStyle = {};
				const rightStyle = {};

				const {
					size,
					delta,
					vertical,
					trackWidth,
					count,
					swiping,
					startTranslate,
					trackStyle
				} = this.parent;

				let transitionDuration = trackStyle ? trackStyle.transitionDuration : 0;
				let parentPace = -Math[delta > 0 ? 'ceil' : 'floor'](delta / size)

				let params = {
					centeredSlides: false,
					spaceBetween: 0
				};

				let offsetCenter = -this.parentOffset;
				let slideOffset = Math.abs(this.offset);
				let swiperSlideSize = size;
				const slideProgress = (offsetCenter + (params.centeredSlides ? 0 : 0) - slideOffset) /
					(swiperSlideSize + params.spaceBetween);
				const originalSlideProgress = (offsetCenter - Math.abs(this.offset) + (params.centeredSlides ? 0 : 0) -
					slideOffset) / (swiperSlideSize + params.spaceBetween);

				if (this.effect == "fade") {
					if (size) {
						style[vertical ? 'height' : 'width'] = `${size}px`;
					}
					const offset = Math.abs(this.offset);
					let tx = -offset;
					let ty = 0;
					if (vertical) {
						ty = tx;
						tx = 0;
					}
					const slideOpacity = Math.max(1 - Math.abs(slideProgress), 0);
					style.opacity = slideOpacity;
					style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
					style.transitionDuration = `${transitionDuration}`;
					style.willChange = `${swiping ? 'opacity' : 'auto'}`;
				} else if (this.effect == "cube") {
					if (size) {
						style[vertical ? 'height' : 'width'] = `${size}px`;
					}
					const progress = Math.max(Math.min(slideProgress, 1), -1);
					let slideAngle = this.index * 90;
					let round = Math.floor(slideAngle / 360);
					let tx = 0;
					let ty = 0;
					let tz = 0;
					if (this.index % 4 === 0) {
						tx = -round * 4 * size;
						tz = 0;
					} else if ((this.index - 1) % 4 === 0) {
						tx = 0;
						tz = -round * 4 * size;
					} else if ((this.index - 2) % 4 === 0) {
						tx = size + round * 4 * size;
						tz = size;
					} else if ((this.index - 3) % 4 === 0) {
						tx = -size;
						tz = 3 * size + size * 4 * round;
					}
					if (vertical) {
						ty = tx;
						tx = 0;
					}
					let isActive = this.index == this.parentActive;
					let isNext = this.index == this.parentActive + 1;
					let isNextOne = this.index == this.parentActive + 2;
					let isPrev = this.index == this.parentActive - 1;

					if (isActive || isNext || isPrev || isNextOne) {
						style.visibility = 'visible';
					}

					style.transform =
						`rotateX(${!vertical ? 0 : -slideAngle}deg) rotateY(${!vertical ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
					style.transitionDuration = `${transitionDuration}`;
					style.transformOrigin = "0 0";
					style.transformStyle = "preserve-3d";
					leftStyle.transitionDuration = `${transitionDuration}`;
					rightStyle.transitionDuration = `${transitionDuration}`;
					leftStyle.opacity = `${Math.max(-progress, 0)}`;
					rightStyle.opacity = `${Math.max(progress, 0)}`;
				} else if (this.effect == "coverflow") {
					let stretch = 0;
					let translate = 100;
					const rotate = !vertical ? 50 : -50;
					const slideSize = size;
					const transform = this.parentOffset;
					const slideOffset = Math.abs(this.offset);
					const center = !vertical ? -transform + size / 2 : -transform + size / 2;
					const modifier = 1;
					const offsetMultiplier =
						((center - slideOffset - slideSize / 2) / slideSize) * modifier;
					let translateX = !vertical ? stretch * offsetMultiplier : 0;
					let translateY = !vertical ? 0 : stretch * offsetMultiplier;
					let translateZ = -translate * Math.abs(offsetMultiplier);
					let rotateY = !vertical ? rotate * offsetMultiplier : 0;
					let rotateX = !vertical ? 0 : rotate * offsetMultiplier;
					let scale = 1 - (1 - 1) * Math.abs(offsetMultiplier);
					style[vertical ? 'height' : 'width'] = `${size}px`;
					style.transform =
						`translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
					style.transitionDuration = `${transitionDuration}`;
					style.transformStyle = "preserve-3d";
					style.willChange = `${swiping ? 'transform' : 'auto'}`;
				} else if (this.effect == "flip") {
					let progress = Math.max(Math.min(slideProgress, 1), -1);
					const offset = Math.abs(this.offset);
					const rotate = -180 * progress;
					let rotateY = rotate;
					let rotateX = 0;
					let tx = -offset;
					let ty = 0;
					if (vertical) {
						ty = tx;
						tx = 0;
						rotateX = -rotateY;
						rotateY = 0;
					}
					style[vertical ? 'height' : 'width'] = `${size}px`;
					style.backfaceVisibility = 'hidden';
					style.transform =
						`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
					style.zIndex = -Math.abs(Math.round(progress)) + count;
					style.transitionDuration = `${transitionDuration}`;
					style.transformStyle = "preserve-3d";
					style.willChange = `${swiping ? 'transform' : 'auto'}`;
				} else if (this.effect == "cards") {
					const currentTranslate = this.parentOffset;
					const progress = Math.min(Math.max(slideProgress, -4), 4);
					let offset = Math.abs(this.offset);
					let isTouched = swiping;
					let tX = -offset;
					let tY = 0;
					const tZ = -100 * Math.abs(progress);
					let scale = 1;
					let rotate = -2 * progress;
					let tXAdd = 8 - Math.abs(progress) * 0.75;
					const isSwipeToNext = (this.index === this.parentActive || this.index === this.parentActive - 1) &&
						progress > 0 &&
						progress < 1 &&
						isTouched && currentTranslate < startTranslate;
					const isSwipeToPrev = (this.index === this.parentActive || this.index === this.parentActive + 1) &&
						progress < 0 && progress > -1 &&
						isTouched && currentTranslate > startTranslate;
					if (isSwipeToNext || isSwipeToPrev) {
						const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
						rotate += -28 * progress * subProgress;
						scale += -0.5 * subProgress;
						tXAdd += 96 * subProgress;
						tY = `${-25 * subProgress * Math.abs(progress)}%`;
					}
					if (progress < 0) {
						tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
					} else if (progress > 0) {
						tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
					} else {
						tX = `${tX}px`;
					}
					if (vertical) {
						const prevY = tY;
						tY = tX;
						tX = prevY;
					}
					const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
					style[vertical ? 'height' : 'width'] = `${size}px`;
					style.transform = `
					        translate3d(${tX}, ${tY}, ${tZ}px)
					        rotateZ(${rotate}deg)
					        scale(${scaleString})
					      `;
					style.transitionDuration = `${transitionDuration}`;
					style.willChange = `${swiping ? 'transform' : 'auto'}`;
				} else if (this.effect == "creative") {
					let params = this.creativeOptions;
					const {
						progressMultiplier: multiplier
					} = params;
					const isCenteredSlides = params.centeredSlides;
					const progress = Math.min(Math.max(slideProgress, -params.limitProgress), params.limitProgress);
					let originalProgress = progress;

					if (!isCenteredSlides) {
						originalProgress = Math.min(Math.max(originalProgress, -params.limitProgress), params
							.limitProgress);
					}
					const offset = Math.abs(this.offset);
					const t = [-offset, 0, 0];
					const r = [0, 0, 0];
					let custom = false;
					if (vertical) {
						t[1] = t[0];
						t[0] = 0;
					}
					let data = {
						translate: [0, 0, 0],
						rotate: [0, 0, 0],
						scale: 1,
						opacity: 1
					};

					if (progress < 0) {
						data = params.next;
						custom = true;
					} else if (progress > 0) {
						data = params.prev;
						custom = true;
					}
					t.forEach((value, index) => {
						t[index] =
							`calc(${value}px + (${this.getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
					});
					r.forEach((value, index) => {
						r[index] = data.rotate[index] * Math.abs(progress * multiplier);
					});
					style.zIndex = -Math.abs(Math.round(slideProgress)) + count;
					const translateString = t.join(', ');
					const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
					const scaleString = originalProgress < 0 ?
						`scale(${1 + (1 - data.scale) * originalProgress * multiplier})` :
						`scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
					const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier :
						1 - (1 - data.opacity) * originalProgress * multiplier;
					const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows
					style[vertical ? 'height' : 'width'] = `${size}px`;
					style.transform = transform;
					style.opacity = opacityString;
					style.transformOrigin = data.origin;
					style.transitionDuration = `${transitionDuration}`;
					style.willChange = `${swiping ? 'transform,opacity' : 'auto'}`;
				} else {
					if (size) {
						style[vertical ? 'height' : 'width'] = `${size}px`;
					}
					if (this.offset) {
						style.transform = `translate${vertical ? 'Y' : 'X'}(${this.offset}px)`;
					}
				}

				this.style = style;
				this.leftStyle = leftStyle;
				this.rightStyle = rightStyle;
			},
			getTranslateValue(value) {
				if (typeof value === 'string') return value;
				return `${value}px`;
			},
			shouldRenderMethod() {
				const {
					index,
					inited,
					parent,
					mounted
				} = this;

				if (!parent.lazyRender || inited) {
					this.shouldRender = true;
					return
				}
				if (!mounted) {
					this.shouldRender = false;
					return
				}
				const active = parent.activeIndicator;
				const maxActive = parent.count - 1;
				const prevActive = active === 0 && parent.loop ? maxActive : active - 1;
				const nextActive = active === maxActive && parent.loop ? 0 : active + 1;
				const shouldRender =
					index === active || index === prevActive || index === nextActive;
				if (shouldRender) {
					this.inited = true;
				}
				this.shouldRender = shouldRender;
				return
			},
			bemMethods(name, conf) {
				return bem(name, conf);
			},
		}
	}
</script>

<style scoped lang="scss">
	.zebra-swipe-item {
		position: relative;
		flex-shrink: 0;
		width: 100%;
		height: 100%;

		&--cube {
			z-index: 1;
			visibility: hidden;
		}

		&--cards {
			transform-origin: center bottom;
			backface-visibility: hidden;
			overflow: hidden;
			transform-style: preserve-3d;
		}

		&--creative {
			transform-style: preserve-3d;
			backface-visibility: hidden;
			overflow: hidden;
			transition-property: transform, opacity, height;
		}

		.swiper-item-shadow-left {
			z-index: 0;
			backface-visibility: hidden;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			pointer-events: none;
			transform-style: preserve-3d;
		}

		.swiper-item-shadow-right {
			z-index: 0;
			backface-visibility: hidden;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			pointer-events: none;
			transform-style: preserve-3d;
			background-image: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));
		}
	}
</style>
