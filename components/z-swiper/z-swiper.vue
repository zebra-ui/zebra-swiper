<template>
	<view :class="[bemMethods('swipe', [effect])]" :style="customStyle">
		<view :style="[trackStyle]" :class="[bemMethods('swipe__track', { vertical: vertical })]" @click="onClick"
			@touchstart.stop="onTouchStart" @touchmove.stop.prevent="onTouchMove" @touchend.stop="onTouchEnd"
			@touchcancel.stop="onTouchEnd">
			<slot></slot>
			<template v-if="effect == 'cube'&&cubeShadow&&!vertical">
				<view class="swiper-cube-shadow" :style="[cubeShadowStyle]"></view>
			</template>
		</view>
		<template v-if="effect == 'cube'&&cubeShadow&&vertical">
			<view class="swiper-cube-shadow" :style="[cubeShadowStyle]"></view>
		</template>
		<slot name="indicator"></slot>
		<template v-if="showIndicators&&count > 1">
			<view :class="[bemMethods('swipe__indicators', { vertical: vertical })]">
				<template v-for="(item,index) in Array(...Array(count))">
					<text :class="[bemMethods('swipe__indicator', { active: index===activeIndicator })]" :style="[index===activeIndicator ?
						indicatorStyle : null]" />
				</template>
			</view>
		</template>
		<slot name="pre-button"></slot>
		<slot name="next-button"></slot>
		<template v-if="showPrevButton&&count > 1">
			<view :class="['zebra-swipe__prev--button',!prevButtonStatus?'zebra-swipe__prev--button--disable':'']">
				<!-- <z-icon name="chevron_big_left" @click="prevClick"></z-icon> -->
			</view>
		</template>
		<template v-if="showNextButton&&count > 1">
			<view :class="['zebra-swipe__next--button',!nextButtonStatus?'zebra-swipe__next--button--disable':'']">
				<!-- <z-icon name="chevron_big_right" @click="nextClick"></z-icon> -->
			</view>
		</template>
	</view>
</template>

<script>
	import {
		ParentMixin
	} from '../../libs/mixins/relation.js';
	import {
		touchMixins
	} from '../../libs/mixins/touch.js';
	import bem from '../../libs/utils/bem.js';
	import addUnit from '../../libs/utils/add-unit.js';
	import {
		getAllRect,
		getRect,
		requestAnimationFrame
	} from '../../libs/utils/utils.js';
	export default {
		name: "z-swipe",
		mixins: [
			touchMixins,
			ParentMixin('zSwipe')
		],
		props: {
			width: [Number, String],
			height: [Number, String],
			autoplay: [Number, String],
			vertical: Boolean,
			lazyRender: Boolean,
			indicatorColor: String,
			loop: {
				type: Boolean,
				default: true,
			},
			duration: {
				type: [Number, String],
				default: 300,
			},
			touchable: {
				type: Boolean,
				default: true,
			},
			initialSwipe: {
				type: [Number, String],
				default: 0,
			},
			showIndicators: {
				type: Boolean,
				default: true,
			},
			stopPropagation: {
				type: Boolean,
				default: true,
			},
			customStyle: String,
			showPrevButton: Boolean,
			showNextButton: Boolean,
			effect: String,
			cubeShadow: Boolean,
			options: {
				type: Object,
				default: () => {
					return null
				}
			}
		},
		data() {
			return {
				rect: null,
				offset: 0,
				active: 0,
				deltaX: 0,
				deltaY: 0,
				swiping: false,
				computedWidth: 0,
				computedHeight: 0,
				count: 0,
				minOffset: null,
				cubeShadowStyle: null,
				scrollThreshold: 0.1,
				trackWidth: 0,
				trackHeight: 0,
				startTranslate: 0,
			};
		},
		watch: {
			initialSwipe() {
				this.initialize();
			},
			autoplay(autoplay) {
				if (autoplay > 0) {
					this.autoPlay();
				} else {
					this.clear();
				}
			},
		},
		computed: {
			maxCount() {
				return Math.ceil(Math.abs(this.minOffset) / this.size);
			},
			delta() {
				return this.vertical ? this.deltaY : this.deltaX;
			},
			size() {
				return this[this.vertical ? 'computedHeight' : 'computedWidth'];
			},
			trackSize() {
				return this.count * this.size;
			},
			activeIndicator() {
				return (this.active + this.count) % this.count;
			},
			isCorrectDirection() {
				const expect = this.vertical ? 'vertical' : 'horizontal';
				return this.direction === expect;
			},
			prevButtonStatus() {
				if (this.loop == false) {
					return this.active != 0;
				}
				return true;
			},
			nextButtonStatus() {
				if (this.loop == false) {
					return this.active != this.count - 1;
				}
				return true;
			},
			trackStyle() {
				if (this.effect == "fade") {
					const style = {
						transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
						transform: `translate${this.vertical ? 'Y' : 'X'}(0px)`,
					};
					return style;
				} else if (this.effect == "cube") {
					let params = {
						centeredSlides: false,
						spaceBetween: 0,
						shadowScale: 0.94,
						shadowOffset: 20,
					};
					let offsetCenter = -this.offset;
					let slideOffset = Math.abs(this.getTargetOffset(this.active));
					let swiperSlideSize = this.size;
					const slideProgress = (offsetCenter + (params.centeredSlides ? 0 : 0) - slideOffset) /
						(swiperSlideSize + params.spaceBetween);

					const progress = Math.max(Math.min(slideProgress, 1), -1);
					let wrapperRotate = 0;
					if (progress <= 1 && progress > -1) {
						wrapperRotate = this.active * 90 + progress * 90;
					} else {
						wrapperRotate = this.active * 90;
					}
					const style = {
						transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
						willChange: `${this.swiping ? 'transform' : 'auto'}`,
						transform: `translate3d(0px, 0px, 0px) rotateX(${!this.vertical ? 0 : wrapperRotate}deg) rotateY(${!this.vertical ? -wrapperRotate : 0}deg)`,
						transformOrigin: `50% 50% -${this.size/2}px`
					};
					if (this.vertical) {
						const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
						const multiplier =
							1.5 -
							(Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2 +
								Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2);
						const scale1 = params.shadowScale;
						const scale2 = params.shadowScale / multiplier;
						const offset = params.shadowOffset;
						this.cubeShadowStyle = {
							transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
							transform: `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${this.computedHeight / 2 + offset}px, ${
						            -this.computedHeight / 2 / scale2
						          }px) rotateX(-90deg)`
						}
					} else {
						this.cubeShadowStyle = {
							height: `${this.size}px`,
							transform: `translate3d(0px, ${this.size / 2 + 20}px, ${
							            -this.size / 2
							          }px) rotateX(90deg) rotateZ(0deg) scale(${0.94})`
						}
					}
					return style;
				} else if (this.effect == "coverflow") {
					const style = {
						transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
						transform: `translate3d(${this.vertical? 0: (this.offset +((this.trackWidth - this.size) / 2))}px, ${!this.vertical? 0: (this.offset +((this.trackHeight - this.size) / 2))}px, 0px)`,
						willChange: `${this.swiping ? 'transform' : 'auto'}`,
					};
					return style;
				} else if (this.effect == "flip") {
					const style = {
						transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
					};
					return style;
				} else if (this.effect == "cards") {
					const style = {
						transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
					};
					return style;
				} else if (this.effect == "creative") {
					const style = {
						transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
					};
					return style;
				} else {
					const style = {
						transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
						transform: `translate${this.vertical ? 'Y' : 'X'}(${this.offset}px)`,
						willChange: `${this.swiping ? 'transform' : 'auto'}`,
					};
					if (this.size) {
						const mainAxis = this.vertical ? 'height' : 'width';
						const crossAxis = this.vertical ? 'width' : 'height';
						style[mainAxis] = `${this.trackSize}px`;
						style[crossAxis] = this[crossAxis] ? `${this[crossAxis]}px` : '';
					}
					return style;
				}
			},
			indicatorStyle() {
				return {
					backgroundColor: this.indicatorColor,
				};
			},
		},
		created() {
			uni.$on("childrenReady" + this._uid, (children) => {
				this.initialize();
				this.count = this.children.length;
			})
		},
		mounted() {
			this.$watch(() => {
				if (this.rect) {
					return (this.vertical ? (this.effect == "coverflow" ? this.size : this.rect.height) : (this
							.effect == "coverflow" ? this.size : this.rect
							.width)) -
						this.size * this.count
				}
			}, (val) => {
				this.minOffset = val;
				this.initialize();
			})
		},
		beforeDestroy() {
			this.clear();
		},
		methods: {
			prevClick() {
				if (this.showPrevButton && this.prevButtonStatus) {
					this.prev();
				}
			},
			nextClick() {
				if (this.showNextButton && this.nextButtonStatus) {
					this.next();
				}
			},
			async initialize(active = +this.initialSwipe) {
				clearTimeout(this.timer);
				let rectInfo = await getRect(this, '.zebra-swipe');
				let rect = {
					width: 0,
					height: 0
				};
				if (rectInfo) {
					rect = {
						width: rectInfo.width,
						height: rectInfo.height,
					};
				}
				this.rect = rect;
				this.swiping = true;
				this.active = active;
				this.computedWidth = +this.width || rect.width;
				this.computedHeight = +this.height || rect.height;
				this.offset = this.getTargetOffset(active);
				this.trackWidth = rect.width;
				this.trackHeight = rect.height;
				this.children.forEach((swipe, index) => {
					if (this.effect == "fade") {
						swipe.offset = this.getTargetOffset(index);
					} else if (this.effect == "cube") {
						swipe.offset = this.getTargetOffset(index);
					} else if (this.effect == "coverflow") {
						swipe.offset = this.getTargetOffset(index);
					} else if (this.effect == "flip") {
						swipe.offset = this.getTargetOffset(index);
					} else if (this.effect == "cards") {
						swipe.offset = this.getTargetOffset(index);
					} else if (this.effect == "creative") {
						swipe.offset = this.getTargetOffset(index);
					} else {
						swipe.offset = 0;
					}

				});
				this.autoPlay();
			},
			resize() {
				this.initialize(this.activeIndicator);
			},
			onTouchStart(event) {
				if (!this.touchable) return;
				this.clear();
				this.touchStartTime = Date.now();
				this.startTranslate = this.offset;
				this.touchStart(event);
				this.correctPosition();
			},
			onTouchMove(event) {
				if (!this.touchable || !this.swiping) return;
				this.touchMove(event);
				if (this.isCorrectDirection) {
					this.move({
						offset: this.delta
					});
				}
			},
			onTouchEnd() {
				if (!this.touchable || !this.swiping) return;
				const {
					size,
					delta
				} = this;
				const duration = Date.now() - this.touchStartTime;
				const speed = delta / duration;
				const shouldSwipe = Math.abs(speed) > 0.25 || Math.abs(delta) > size / 2;
				if (shouldSwipe && this.isCorrectDirection) {
					const offset = this.vertical ? this.offsetY : this.offsetX;
					let pace = 0;
					if (this.loop) {
						pace = offset > 0 ? (delta > 0 ? -1 : 1) : 0;
					} else {
						pace = -Math[delta > 0 ? 'ceil' : 'floor'](delta / size);
					}
					this.move({
						pace,
						emitChange: true,
					});
				} else if (delta) {
					this.move({
						pace: 0
					});
				}
				this.swiping = false;
				this.autoPlay();
			},
			getTargetActive(pace) {
				const {
					active,
					count,
					maxCount
				} = this;
				if (pace) {
					if (this.loop) {
						return this.range(active + pace, -1, count);
					}
					return this.range(active + pace, 0, maxCount);
				}
				return active;
			},
			getTargetOffset(targetActive, offset = 0) {
				let currentPosition = targetActive * this.size;
				if (!this.loop) {
					currentPosition = Math.min(currentPosition, -this.minOffset);
				}
				let targetOffset = offset - currentPosition;
				if (!this.loop) {
					if (this.effect == "cube") {
						targetOffset = this.range(targetOffset, this.minOffset, 0);
					} else {
						targetOffset = this.range(targetOffset, this.minOffset - 100, 100);
					}
				}
				return targetOffset;
			},
			move({
				pace = 0,
				offset = 0,
				emitChange
			}) {
				const {
					loop,
					count,
					active,
					children,
					trackSize,
					minOffset
				} = this;
				if (count <= 1) {
					return;
				}
				const targetActive = this.getTargetActive(pace);
				let targetOffset = this.getTargetOffset(targetActive, offset);
				if (loop) {
					if (children[0] && targetOffset !== minOffset) {
						const outRightBound = targetOffset < minOffset;
						children[0].offset = outRightBound ? trackSize : 0;
					}
					if (children[count - 1] && targetOffset !== 0) {
						const outLeftBound = targetOffset > 0;
						children[count - 1].offset = outLeftBound ? -trackSize : 0;
					}
				}
				this.active = targetActive;
				this.offset = targetOffset;
				if (emitChange && targetActive !== active) {
					this.$emit('change', this.activeIndicator);
				}
			},
			prev() {
				this.correctPosition();
				this.resetTouchStatus();
				requestAnimationFrame(() => {
					this.swiping = false;
					this.move({
						pace: -1,
						emitChange: true,
					});
				});
			},
			next() {
				this.correctPosition();
				this.resetTouchStatus();
				setTimeout(() => {
					this.swiping = false;
					this.move({
						pace: 1,
						emitChange: true,
					});
				}, 30);
			},
			swipeTo(index, options = {}) {
				this.correctPosition();
				this.resetTouchStatus();
				requestAnimationFrame(() => {
					let targetIndex;
					if (this.loop && index === this.count) {
						targetIndex = this.active === 0 ? 0 : index;
					} else {
						targetIndex = index % this.count;
					}
					if (options.immediate) {
						requestAnimationFrame(() => {
							this.swiping = false;
						});
					} else {
						this.swiping = false;
					}
					this.move({
						pace: targetIndex - this.active,
						emitChange: true,
					});
				});
			},
			correctPosition() {
				this.swiping = true;
				if (this.active <= -1) {
					this.move({
						pace: this.count
					});
				}
				if (this.active >= this.count) {
					this.move({
						pace: -this.count
					});
				}
			},
			clear() {
				clearTimeout(this.timer);
			},
			autoPlay() {
				const {
					autoplay
				} = this;
				if (autoplay > 0 && this.count > 1) {
					this.clear();
					this.timer = setTimeout(() => {
						this.next();
						this.autoPlay();
					}, autoplay);
				}
			},
			onClick(event) {
				this.$emit("click", event);
			},
			range(num, min, max) {
				return Math.min(Math.max(num, min), max);
			},
			bemMethods(name, conf) {
				return bem(name, conf);
			},
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/css/var";

	.zebra-swipe {
		position: relative;
		overflow: hidden;
		cursor: grab;
		user-select: none;

		&--fade {
			.zebra-swipe__track {}
		}

		&--cube {
			perspective: 1200px;
			overflow: visible;

			.zebra-swipe__track {
				position: relative;
				transform-style: preserve-3d;
				z-index: 1;
			}

			.swiper-cube-shadow {
				position: absolute;
				left: 0;
				bottom: 0px;
				width: 100%;
				height: 100%;
				opacity: .6;
				z-index: 0;
				transform-style: preserve-3d;

				&::before {
					content: '';
					background: #000;
					position: absolute;
					left: 0;
					top: 0;
					bottom: 0;
					right: 0;
					filter: blur(50px);
				}
			}
		}

		&--coverflow {
			perspective: 1200px;

			.zebra-swipe__track {
				transform-style: preserve-3d;
			}
		}

		&--flip {
			perspective: 1200px;
			overflow: visible;

			.zebra-swipe__track {
				transform: translate3d(0px, 0px, 0px);
				transform-style: preserve-3d;
			}
		}

		&--cards {
			perspective: 1200px;
			overflow: visible;

			.zebra-swipe__track {
				transform: translate3d(0px, 0px, 0px);
				transform-style: preserve-3d;
			}
		}

		&--creative {
			perspective: 1200px;

			.zebra-swipe__track {
				transform: translate3d(0px, 0px, 0px);
				transform-style: preserve-3d;
			}
		}

		&__track {
			display: flex;
			height: 100%;

			&--vertical {
				flex-direction: column;
			}
		}

		&__indicators {
			position: absolute;
			bottom: $swipe-indicator-margin;
			left: 50%;
			display: flex;
			transform: translateX(-50%);

			&--vertical {
				top: 50%;
				bottom: auto;
				left: $swipe-indicator-margin;
				flex-direction: column;
				transform: translateY(-50%);

				.zebra-swipe__indicator:not(:last-child) {
					margin-bottom: $swipe-indicator-size;
				}
			}
		}

		&__prev--button {
			position: absolute;
			left: 30rpx;
			top: 50%;
			display: flex;
			color: $gray-3;
			font-size: 44rpx;
		}

		&__prev--button--disable {
			position: absolute;
			left: 30rpx;
			top: 50%;
			display: flex;
			color: $gray-8;
			font-size: 44rpx;
		}

		&__next--button {
			position: absolute;
			right: 30rpx;
			top: 50%;
			display: flex;
			color: $gray-3;
			font-size: 44rpx;
		}

		&__next--button--disable {
			position: absolute;
			right: 30rpx;
			top: 50%;
			display: flex;
			color: $gray-8;
			font-size: 44rpx;
		}

		&__indicator {
			width: $swipe-indicator-size;
			height: $swipe-indicator-size;
			background-color: $swipe-indicator-inactive-background-color;
			border-radius: 100%;
			opacity: $swipe-indicator-inactive-opacity;
			transition: opacity $animation-duration-fast,
				background-color $animation-duration-fast;

			&:not(:last-child) {
				margin-right: $swipe-indicator-size;
			}

			&--active {
				background-color: $swipe-indicator-active-background-color;
				opacity: $swipe-indicator-active-opacity;
			}
		}
	}
</style>
