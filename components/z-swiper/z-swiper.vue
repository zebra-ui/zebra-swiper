<template>
	<view :class="['swiper',contentClass,options.direction === 'vertical'?'swiper-vertical':'']" :style="customStyle">
		<!-- #ifndef MP-WEIXIN || MP-QQ -->
		<view :class="['swiper-wrapper']" :style="[wrapperStyle]" @click="onClickWrapper" @touchstart="onTouchStart"
			@touchmove.stop.prevent="onTouchMove" @touchend.stop="onTouchEnd">
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN || MP-QQ -->
			<view :class="['swiper-wrapper']" :style="[wrapperStyle]" @click="onClickWrapper"
				@touchstart="zSwiperWxs.onTouchStartWxs" @touchmove="zSwiperWxs.onTouchMoveWxs"
				@touchend="zSwiperWxs.onTouchEndWxs" :prop="wxsProp" :change:prop="zSwiperWxs.propObserver">
				<!-- #endif -->
				<slot></slot>
				<!-- 在loop模式下，为group填充空白slide -->
				<template v-if="loopBlankShow">
					<z-swiper-item v-for="(item,index) in loopBlankNumber" :key="index">
					</z-swiper-item>
				</template>
				<template v-if="cubeShadowShowWrapper">
					<view class="swiper-cube-shadow" :style="[cubeShadowStyle]"></view>
				</template>
			</view>
			<template v-if="cubeShadowShowRoot">
				<view class="swiper-cube-shadow" :style="[cubeShadowStyle]"></view>
			</template>
			<slot name="indicator"></slot>
			<template v-if="showIndicators">
				<view :class="['swiper-pagination',paginationClass]" :style="[paginationStyle]">
					<template v-if="paginationType == 'bullets'">
						<view v-for="(item,index) in paginationContent" :key="index"
							:class="[item.classContent.join(' ')]" :style="[item.styleContent]"
							@click="paginationItemClick(index)">
						</view>
					</template>
					<template v-if="paginationType == 'fraction'">
						<text :class="paginationContent.currentClass">{{paginationContent.text}}</text>/<text
							:class="paginationContent.totalClass">{{paginationContent.total}}</text>
					</template>
					<template v-if="paginationType == 'progressbar'">
						<text :class="paginationContent.progressbarFillClass"
							:style="[paginationContent.styleContent]"></text>
					</template>
				</view>
			</template>
			<template v-if="(showPrevButton||showPrevButtonSlot)">
				<view :class="['swiper-button-prev',prevClass]" @click="prevClick">
					<view v-if="!showPrevButtonSlot" class="zebra-icon zebra-icon-circle_chevron_left"></view>
					<slot v-else name="pre-button"></slot>
				</view>
			</template>
			<template v-if="(showNextButton||showNextButtonSlot)">
				<view :class="['swiper-button-next',nextClass]" @click="nextClick">
					<view v-if="!showNextButtonSlot" class="zebra-icon zebra-icon-circle_chevron_right"></view>
					<slot v-else name="next-button"></slot>
				</view>
			</template>
			<template v-if="scrollbarShow">
				<view :class="['swiper-scrollbar',scrollbarClass]" :style="[scrollbarStyle]"
					@click.stop="onClickScrollbar" @touchstart.stop="onTouchStartScrollbar"
					@touchmove.stop.prevent="onTouchMoveScrollbar" @touchend.stop="onTouchEndScrollbar">
					<view class="swiper-scrollbar-drag" :style="[scrollbarItemStyle]">

					</view>
				</view>
			</template>
		</view>
</template>
<!-- #ifdef MP-WEIXIN || MP-QQ -->
<script src="../../wxs/z-swiper-wxs.wxs" module="zSwiperWxs" lang="wxs"></script>
<!-- #endif -->
<script>
	import Swiper from '../../index.js';
	import {
		ParentMixin
	} from '../../libs/mixins/relation.js';
	import {
		getAllRect,
		getRect
	} from '../../libs/utils/utils.js';
	export default {
		name: "z-swipe",
		mixins: [
			ParentMixin('zSwipe')
		],
		props: {
			customStyle: String,
			options: {
				type: Object,
				default: () => {
					return {}
				}
			},
			value: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		data() {
			return {
				wxsProp: {
					wrapperStyle: {}
				},
				wrapperStyle: {},
				contentClass: '',
				nextElClass: [],
				prevElClass: [],
				paginationElClass: [],
				paginationItemElClass: [],
				loopFirstShow: false,
				loopLastShow: false,
				loopBlankShow: false,
				loopBlankNumber: 0,
				cubeShadowShowWrapper: false,
				cubeShadowShowRoot: false,
				cubeShadowStyle: {},
				rectInfo: null,
				eventsListeners: {},
				showPrevButton: false,
				showPrevButtonSlot: false,
				showNextButton: false,
				showNextButtonSlot: false,
				showIndicators: false,
				paginationContent: [],
				paginationType: '',
				paginationStyle: {},
				scrollbarShow: false,
				scrollbarElClass: [],
				scrollbarStyle: {},
				scrollbarItemStyle: {}
			};
		},
		computed: {
			nextClass() {
				return this.nextElClass.join(" ");
			},
			prevClass() {
				return this.prevElClass.join(" ");
			},
			paginationClass() {
				return this.paginationElClass.join(" ");
			},
			paginationItemClass() {
				return this.paginationItemElClass.join(" ");
			},
			scrollbarClass() {
				return this.scrollbarElClass.join(" ");
			}
		},
		// 百度小程序v-model值改变后无法触发数据更新，所以监听
		// #ifdef MP-BAIDU
		watch: {
			async value(val) {
				this.count = this.children.length;
				if (this.children.length == this.value.length) {
					if (this.swiper) {
						this.swiper.update();
					} else {
						let rectInfo = await this.getRect();
						this.rectInfo = rectInfo;
						this.initSwiper(this.options);
					}
				}
			}
		},
		// #endif
		created() {
			uni.$on("childrenReady" + this._uid, async (children) => {
				children.dataSwiperSlideIndex = children.index;
				this.count = this.children.length;
				if (this.children.length == this.value.length) {
					if (this.swiper) {
						this.swiper.update();
					} else {
						let rectInfo = await this.getRect();
						this.rectInfo = rectInfo;
						this.initSwiper(this.options);
					}
				}
			})
		},
		mounted() {
			// setTimeout(() => {
			// 	Promise.all(this.children.map((item) => {
			// 		return item.promiseMethod();
			// 	})).then(async (res) => {
			// 		let rectInfo = await this.getRect();
			// 		this.rectInfo = rectInfo;
			// 		this.initSwiper(this.options);
			// 	})
			// }, 0)
		},
		beforeDestroy() {
			if (this.swiper) {
				this.swiper.destroy();
			}
		},
		methods: {
			initSwiper(options) {
				options.on = this.eventsListeners;
				const swiper = new Swiper('.swiper', options, this);
				this.swiper = swiper;
				swiper.on("init update", () => {
					this.children.forEach((item) => {
						item.swiperInited = true;
					})
				})
			},
			async getRect() {
				let rectInfo = await getRect(this, '.swiper');
				return rectInfo;
			},
			async getRectScrollbar() {
				let rectInfo = await getRect(this, '.swiper-scrollbar');
				return rectInfo;
			},
			willChange(value) {
				// #ifndef MP-WEIXIN || MP-QQ
				this.$set(this.wrapperStyle, 'will-change', value)
				// #endif
				// #ifdef MP-WEIXIN || MP-QQ
				this.$set(this.wxsProp.wrapperStyle, 'will-change', value)
				// #endif
			},
			transform(value) {
				// #ifndef MP-WEIXIN || MP-QQ
				this.$set(this.wrapperStyle, 'transform', value)
				// #endif
				// #ifdef MP-WEIXIN || MP-QQ
				this.$set(this.wxsProp.wrapperStyle, 'transform', value)
				// #endif
			},
			transition(value) {
				// #ifndef MP-WEIXIN || MP-QQ
				this.$set(this.wrapperStyle, 'transitionDuration', value)
				// #endif
				// #ifdef MP-WEIXIN || MP-QQ
				this.$set(this.wxsProp.wrapperStyle, 'transition-duration', value)
				// #endif
			},
			scrollbarTransform(value) {
				this.$set(this.scrollbarStyle, 'transform', value)
			},
			scrollbarTransition(value) {
				this.$set(this.scrollbarStyle, 'transitionDuration', value)
			},
			scrollbarItemTransform(value) {
				this.$set(this.scrollbarItemStyle, 'transform', value)
			},
			scrollbarItemTransition(value) {
				this.$set(this.scrollbarItemStyle, 'transitionDuration', value)
			},
			addClass(value) {
				this.contentClass = value;
			},
			addPaginationClass(value) {
				this.paginationElClass = Array.from(new Set([...this.paginationElClass, ...value.split(" ")]));
			},
			removePaginationClass(value) {
				this.paginationElClass = this.paginationElClass.filter(item => !value.split(" ").includes(item));
			},
			addScrollbarClass(value) {
				this.scrollbarElClass = Array.from(new Set([...this.scrollbarElClass, ...value.split(" ")]));
			},
			removeScrollbarClass(value) {
				this.scrollbarElClass = this.scrollbarElClass.filter(item => !value.split(" ").includes(item));
			},
			setCss(value) {
				// #ifndef MP-WEIXIN || MP-QQ
				Object.keys(value).forEach((item) => {
					this.$set(this.wrapperStyle, item, value[item])
				})
				// #endif
				// #ifdef MP-WEIXIN || MP-QQ
				Object.keys(value).forEach((item) => {
					this.$set(this.wxsProp.wrapperStyle, item, value[item])
				})
				// #endif
			},
			setPaginationCss(value) {
				Object.keys(value).forEach((item) => {
					this.$set(this.paginationStyle, item, value[item])
				})
			},
			setScrollbarCss(value) {
				Object.keys(value).forEach((item) => {
					this.$set(this.scrollbarStyle, item, value[item])
				})
			},
			setScrollbarItemCss(value) {
				Object.keys(value).forEach((item) => {
					this.$set(this.scrollbarItemStyle, item, value[item])
				})
			},
			addNextElClass(value) {
				this.nextElClass = Array.from(new Set([...this.nextElClass, ...value.split(" ")]));
			},
			addPrevElClass(value) {
				this.prevElClass = Array.from(new Set([...this.prevElClass, ...value.split(" ")]));
			},
			removeNextElClass(value) {
				this.nextElClass = this.nextElClass.filter(item => !value.split(" ").includes(item));
			},
			removePrevElClass(value) {
				this.prevElClass = this.prevElClass.filter(item => !value.split(" ").includes(item));
			},
			setSwiperOn(event, callback) {
				if (!this.eventsListeners[event]) this.eventsListeners[event] = {};
				this.eventsListeners[event] = callback;
			},
			paginationItemClick(index) {
				this.swiper.emit("paginationItemClick", index)
			},
			prevClick() {
				this.swiper.emit("prevClick");
			},
			nextClick() {
				this.swiper.emit("nextClick");
			},
			onTouchStart(event) {
				this.swiper.onTouchStart(event);
			},
			onTouchStartSwiperWxs(event) {
				this.swiper.onTouchStart(event);
			},
			onTouchMove(event) {
				this.swiper.onTouchMove(event);
			},
			onTouchMoveSwiperWxs(event) {
				this.swiper.onTouchMove(event);
			},
			onTouchEnd(event) {
				this.swiper.onTouchEnd(event);
			},
			onTouchEndSwiperWxs(event) {
				this.swiper.onTouchEnd(event);
			},
			onClickWrapper(event) {
				this.$emit("click", event);
			},
			onClickScrollbar(event) {
				this.$emit("scrollbarClick", event);
			},
			onTouchStartScrollbar(event) {
				this.swiper.emit('touchStartScrollbar', event);
			},
			onTouchMoveScrollbar(event) {
				this.swiper.emit('touchMoveScrollbar', event);
			},
			onTouchEndScrollbar(event) {
				this.swiper.emit('touchEndScrollbar', event);
			},
		}
	}
</script>

<style scoped lang="scss">
	@import '../../libs/core.scss';
	@import "../../static/css/iconfont.css";

	.swiper {
		&__prev--button {
			position: absolute;
			left: 30rpx;
			top: 50%;
			display: flex;
			color: #1989fa;
			font-size: 44rpx;
			z-index: 10;
		}

		&__prev--button--disable {
			position: absolute;
			left: 30rpx;
			top: 50%;
			display: flex;
			color: #1989fa;
			font-size: 44rpx;
			opacity: .35;
			z-index: 10;
		}

		&__next--button {
			position: absolute;
			right: 30rpx;
			top: 50%;
			display: flex;
			color: #1989fa;
			font-size: 44rpx;
			z-index: 10;
		}

		&__next--button--disable {
			position: absolute;
			right: 30rpx;
			top: 50%;
			display: flex;
			color: #1989fa;
			font-size: 44rpx;
			opacity: .35;
			z-index: 10;
		}
	}
</style>
