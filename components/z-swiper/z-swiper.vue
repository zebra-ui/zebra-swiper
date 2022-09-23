<template>
	<view :id="'swiper'+_uid"
		:class="['swiper',contentClass,containerClasses,options.direction === 'vertical'?'swiper-vertical':'']"
		:style="[customStyle]">
		<!-- #ifndef MP-WEIXIN || MP-QQ -->
		<view :class="['swiper-wrapper']" :style="[wrapperStyle]" @click="onClickWrapper" @touchstart="onTouchStart"
			@touchmove="onTouchMove" @touchend="onTouchEnd" @touchcancel="onTouchEnd">
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN || MP-QQ -->
			<view :class="['swiper-wrapper']" :style="[wrapperStyle]" @click="onClickWrapper"
				@touchstart="zSwiperWxs.onTouchStartWxs" @touchmove="zSwiperWxs.onTouchMoveWxs"
				@touchend="zSwiperWxs.onTouchEndWxs" @touchcancel="zSwiperWxs.onTouchEndWxs"
				:swiperTransform="wxsTransform" :change:swiperTransform="zSwiperWxs.wxsTransformObserver">
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
	import {
		getAllRect,
		getRect
	} from '../../libs/utils/utils.js';
	// vue2
	import {
		getParams
	} from '../../libs/vue2/get-params.js';
	import {
		initSwiper,
		mountSwiper
	} from '../../libs/vue2/init-swiper.js';
	import {
		needsScrollbar,
		needsNavigation,
		needsPagination,
		uniqueClasses,
		extend,
	} from '../../libs/vue2/utils.js';
	import {
		renderLoop,
		calcLoopedSlides
	} from '../../libs/vue2/loop.js';
	import {
		getChangedParams
	} from '../../libs/vue2/get-changed-params.js';
	import {
		updateSwiper
	} from '../../libs/vue2/update-swiper.js';
	import {
		renderVirtual,
		updateOnVirtualData
	} from '../../libs/vue2/virtual.js';
	//mixin
	import {
		ParentMixin
	} from '../../libs/mixins/relation.js';

	export default {
		name: "z-swipe",
		mixins: [
			ParentMixin('zSwipe')
		],
		// #ifdef VUE3
		emits: ['update:modelValue', 'touch-start', 'touch-move', 'touch-end', 'transitionend', 'slideClick',
			'_beforeBreakpoint',
			'_containerClasses',
			'_slideClass',
			'_slideClasses', '_swiper',
			'activeIndexChange', 'afterInit', 'autoplay', 'autoplayStart', 'autoplayStop', 'autoplayPause',
			'autoplayResume', 'beforeDestroy', 'beforeInit', 'beforeLoopFix', 'beforeResize', 'beforeSlideChangeStart',
			'beforeTransitionStart', 'breakpoint', 'changeDirection', 'click', 'disable', 'doubleTap', 'doubleClick',
			'destroy', 'enable', 'fromEdge', 'hashChange', 'hashSet', 'imagesReady', 'init', 'keyPress',
			'lazyImageLoad', 'lazyImageReady', 'lock', 'loopFix', 'momentumBounce', 'navigationHide', 'navigationShow',
			'observerUpdate', 'orientationchange', 'paginationHide', 'paginationRender', 'paginationShow',
			'paginationUpdate', 'progress', 'reachBeginning', 'reachEnd', 'realIndexChange', 'resize', 'scroll',
			'scrollbarDragEnd', 'scrollbarDragMove', 'scrollbarDragStart', 'setTransition', 'setTranslate',
			'slideChange', 'slideChangeTransitionEnd', 'slideChangeTransitionStart', 'slideNextTransitionEnd',
			'slideNextTransitionStart', 'slidePrevTransitionEnd', 'slidePrevTransitionStart',
			'slideResetTransitionStart', 'slideResetTransitionEnd', 'sliderMove', 'sliderFirstMove',
			'slidesLengthChange', 'slidesGridLengthChange', 'snapGridLengthChange', 'snapIndexChange', 'swiper', 'tap',
			'toEdge', 'touchEnd', 'touchMove', 'touchMoveOpposite', 'touchStart', 'transitionEnd', 'transitionStart',
			'unlock', 'update', 'zoomChange', 'beforeMount'
		],
		// #endif
		props: {
			customStyle: {
				type: Object,
				default: () => {
					return {};
				}
			},
			options: {
				type: Object,
				default: () => {
					return {}
				}
			},
			// #ifdef VUE2
			value: {
				type: Array,
				default: () => {
					return []
				}
			},
			// #endif
			// #ifdef VUE3
			modelValue: {
				type: Array,
				default: () => {
					return []
				}
			}
			// #endif
		},
		data() {
			return {
				wxsTransform: "",
				wrapperStyle: {},
				contentClass: '',
				nextElClass: [],
				prevElClass: [],
				paginationElClass: [],
				paginationItemElClass: [],
				loopBlankShow: false,
				loopBlankNumber: 0,
				cubeShadowShowWrapper: false,
				cubeShadowShowRoot: false,
				cubeShadowStyle: {},
				eventsListeners: {},
				showPrevButton: false,
				showPrevButtonSlot: false,
				showNextButton: false,
				showNextButtonSlot: false,
				showIndicators: false,
				paginationContent: [],
				paginationType: '',
				paginationStyle: {},
				scrollbarElClass: [],
				scrollbarStyle: {},
				scrollbarItemStyle: {},
				rectInfo: null,

				// vue2
				containerClasses: 'swiper',
				virtualData: null,
				firstLoad: true,
				originalDataList: [],
				loopUpdateData: false
			};
		},
		computed: {
			// #ifdef VUE3
			value() {
				return this.modelValue
			},
			// #endif
			// #ifdef VUE3
			_uid() {
				return this._.uid
			},
			// #endif
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
			},
			scrollbarShow() {
				return needsScrollbar(this.options)
			}
		},
		created() {
			const {
				params: swiperParams,
				passedParams
			} = getParams(this.options);
			this.swiperElRef = 'swiper';
			this.swiperParams = swiperParams;
			this.oldPassedParamsRef = passedParams;
			let slidesRef = this.slidesRef;

			swiperParams.onAny = (event, ...args) => {
				// #ifdef MP
				// 字节小程序此处报错，因此无法使用v-on监听事件
				// #ifndef MP-TOUTIAO
				this.$emit(event, {}, ...args.filter((item, index) => {
					return index > 0
				}));
				// #endif
				// #endif
				// #ifndef MP
				this.$emit(event, ...args);
				// #endif
			};
			Object.assign(swiperParams.on, {
				_containerClasses(swiper, classes) {
					this.containerClasses = classes;
				},
			});
			this.$watch(() => {
				return {
					value: this.value,
					options: this.options
				}
			}, (val) => {
				// virtual模式处理
				if (this.swiperParams && this.swiperParams.virtual) {
					if (!this.virtualData && val.options.virtual.slides.length) {
						this.swiperParams.virtual.slides = val.options.virtual.slides;
						// this.swiperParams.virtual.slides = val.value;
						const extendWith = {
							cache: false,
							slides: val.options.virtual.slides,
							// slides: val.value,
							renderExternal: data => {
								console.log("最终数据", data)
								this.virtualData = data;
								this.$emit("input", data.slides);
								// updateOnVirtualData(this.swiper);
							},
							renderExternalUpdate: false
						};
						extend(this.swiperParams.virtual, extendWith);
						// this.$emit("input", [val.options.virtual.slides[0]]);
						// this.virtualData = [val.options.virtual.slides[0]];
						this.loadSwiper();
						// console.log(this.swiper)
					}
					// extend(swiperRef.originalParams.virtual, extendWith);
				}
				// loop模式处理
				if (this.swiperParams && this.swiperParams.loop) {
					if (this.originalDataList.length && (this.originalDataList.toString() == val.value
							.toString())) {
						this.loopUpdateData = true;
						// 百度小程序watch晚于子组件加载
						// #ifdef MP-BAIDU
						if (this.firstLoad) {
							this.loadSwiper();
						}
						// #endif
					} else {
						this.loopUpdateData = false;
						let slides = renderLoop(this, this.swiperParams, this.value);
						if (this.swiperParams.loop && !this.loopUpdateData && slides.data.toString() !=
							val.value.toString()) {
							this.loopUpdateData = true;
							// #ifdef VUE2
							this.$emit("input", slides.data)
							// #endif
							// #ifdef VUE3
							this.$emit("update:modelValue", slides.data)
							// #endif
							return
						}
					}
				}
				if (this.swiper && !this.firstLoad) {
					if (this.virtualData && val.options.virtual.type == "cut") {
						const style = this.swiper.isHorizontal() ? {
							[this.swiper.rtlTranslate ? 'right' :
								'left'
							]: `${this.virtualData.offset}px`
						} : {
							top: `${this.virtualData.offset}px`
						};
						this.children
							// .filter((slide, index) => index >= this.virtualData.from && index <= this
							// 	.virtualData
							// 	.to)
							.map(slide => {
								slide.css(style)
								// if (!slide.props) slide.props = {};
								// if (!slide.props.style) slide.props.style = {};
								// slide.props.swiperRef = swiperRef;
								// slide.props.style = style;
								// return h(slide.type, {
								// 	...slide.props
								// }, slide.children);
							});

					}


					this.updateSwiper(val.value, val.options, this.children);
				}
			}, {
				deep: true,
				immediate: true
			})
			this.$watch(() => {
				return this.$data
			}, (val) => {
				if (this.swiper && this.swiper.native) {
					Object.assign(this.swiper.native, {
						val
					});
				}
			}, {
				deep: true
			})
			this.$watch(() => {
				return this.virtualData
			}, (val) => {
				if (this.swiper && this.virtualData) {
					updateOnVirtualData(this.swiper);
				}
			}, {
				deep: true
			})
			uni.$on("childrenReady" + this._uid, async (children) => {
				children.dataSwiperSlideIndex = children.index;
				if (this.children.length == this.value.length) {
					Promise.all(this.children.map((item) => {
						return item.getSize();
					})).then((res) => {
						if (this.swiperParams && this.swiperParams.loop) {
							if (this.originalDataList.length && (this.originalDataList
									.toString() == this.value
									.toString())) {
								if (this.firstLoad) {
									this.loadSwiper();
								}
							} else {
								return
							}
						} else {
							if (this.firstLoad) {
								this.loadSwiper();
							}
						}
						this.updateSwiper(this.value, this.options, this.children);
					})
				}
			})
		},
		// #ifdef VUE2
		beforeDestroy() {
			if (this.swiper && !this.swiper.destroyed) {
				this.swiper.destroy(true, false);
			}
		},
		// #endif
		// #ifdef VUE3
		beforeUnmount() {
			if (this.swiper && !this.swiper.destroyed) {
				this.swiper.destroy(true, false);
			}
		},
		// #endif
		methods: {
			loadSwiper() {
				let swiperParams = this.swiperParams;
				this.slidesRef = this.children;
				this.oldSlidesRef = this.slidesRef;
				let swiperRef = initSwiper(swiperParams, {
					...this.$data,
					...this.$props,
					swiperElId: 'swiper' + this._uid,
					emit: this.emit.bind(this),
					updateData: this.updateData.bind(this),
					getRect: this.getRect.bind(this),
					getRectScrollbar: this.getRectScrollbar.bind(this),
					willChange: this.willChange.bind(this),
					transform: this.transform.bind(this),
					transition: this.transition.bind(this),
					scrollbarTransform: this.scrollbarTransform.bind(this),
					scrollbarTransition: this.scrollbarTransition.bind(this),
					scrollbarItemTransform: this.scrollbarItemTransform.bind(this),
					scrollbarItemTransition: this.scrollbarItemTransition.bind(this),
					addClass: this.addClass.bind(this),
					removeClass: this.removeClass.bind(this),
					addPaginationClass: this.addPaginationClass.bind(this),
					removePaginationClass: this.removePaginationClass.bind(this),
					addScrollbarClass: this.addScrollbarClass.bind(this),
					removeScrollbarClass: this.removeScrollbarClass.bind(this),
					setCss: this.setCss.bind(this),
					css: this.setCss.bind(this),
					paginationCss: this.setPaginationCss.bind(this),
					scrollbarCss: this.scrollbarCss.bind(this),
					scrollbarItemCss: this.scrollbarItemCss.bind(this),
					addNextElClass: this.addNextElClass.bind(this),
					addPrevElClass: this.addPrevElClass.bind(this),
					removeNextElClass: this.removeNextElClass.bind(this),
					removePrevElClass: this.removePrevElClass.bind(this),
					cubeShadowCss: this.cubeShadowCss.bind(this),
					cubeShadowTransform: this.cubeShadowTransform.bind(this),
					cubeShadowTransition: this.cubeShadowTransition.bind(this),
				});
				this.swiper = swiperRef;
				swiperRef.loopCreate = () => {};
				swiperRef.loopDestroy = () => {};
				if (swiperParams.loop) {
					swiperRef.loopedSlides = calcLoopedSlides(this.slidesRef, swiperParams);
				}

				if (!this.swiper) return;
				mountSwiper({
						el: this.swiperElRef,
						nextEl: this.nextElRef,
						prevEl: this.prevElRef,
						paginationEl: this.paginationElRef,
						scrollbarEl: this.scrollbarElRef,
						swiper: this.swiper,
					},
					this.swiperParams,
				);
				this.$emit('swiper');
				this.firstLoad = false;
			},
			updateSwiper(value, options, children) {
				this.swiper.slides = children;
				this.slidesRef = children;
				let initializedRef = this.initializedRef;
				let swiperRef = this.swiper;
				let slidesRef = this.slidesRef;
				let oldPassedParamsRef = this.oldPassedParamsRef;
				let oldSlidesRef = this.oldSlidesRef;
				let breakpointChanged = this.breakpointChanged;
				let nextElRef = this.nextElRef;
				let prevElRef = this.prevElRef;
				let paginationElRef = this.paginationElRef;
				let scrollbarElRef = this.scrollbarElRef;
				// set initialized flag
				if (!initializedRef && swiperRef) {
					swiperRef.emitSlidesClasses();
					initializedRef = true;
				}
				// watch for params change
				const {
					passedParams: newPassedParams
				} = getParams(options);
				const changedParams = getChangedParams(
					newPassedParams,
					oldPassedParamsRef,
					slidesRef,
					oldSlidesRef,
				);
				this.oldPassedParamsRef = newPassedParams;
				this.oldSlidesRef = slidesRef;
				if (
					(changedParams.length || breakpointChanged) &&
					swiperRef &&
					!swiperRef.destroyed
				) {
					updateSwiper({
						swiper: swiperRef,
						slides: slidesRef,
						passedParams: newPassedParams,
						changedParams,
						nextEl: nextElRef,
						prevEl: prevElRef,
						scrollbarEl: scrollbarElRef,
						paginationEl: paginationElRef,
					});
				}
				breakpointChanged = false;
			},
			emit(event, data) {
				this.$emit(event, ...data)
			},
			async getRect() {
				let rectInfo = await getRect(this, '.swiper');
				this.rectInfo = rectInfo;
				return rectInfo;
			},
			async getRectScrollbar() {
				let rectInfo = await getRect(this, '.swiper-scrollbar');
				return rectInfo;
			},
			updateData(value) {
				Object.keys(value).forEach((item) => {
					this.$set(this, item, value[item])
				})
			},
			willChange(value) {
				this.$set(this.wrapperStyle, 'will-change', value)
			},
			transform(value) {
				// #ifndef MP-WEIXIN || MP-QQ
				this.$set(this.wrapperStyle, 'transform', value)
				// #endif
				// #ifdef MP-WEIXIN || MP-QQ
				this.wxsTransform = value;
				// #endif
			},
			transition(value) {
				// #ifdef MP-BAIDU
				this.$set(this.wrapperStyle, 'transitionDuration', `${value}ms`)
				// #endif
				// #ifndef MP-BAIDU
				this.$set(this.wrapperStyle, 'transition-duration', `${value}ms`)
				// #endif
			},
			setCss(value) {
				Object.keys(value).forEach((item) => {
					this.$set(this.wrapperStyle, item, value[item])
				})
			},
			scrollbarTransform(value) {
				this.$set(this.scrollbarStyle, 'transform', value)
			},
			scrollbarTransition(value) {
				this.$set(this.scrollbarStyle, 'transitionDuration', `${value}ms`)
			},
			scrollbarItemTransform(value) {
				this.$set(this.scrollbarItemStyle, 'transform', value)
			},
			scrollbarItemTransition(value) {
				this.$set(this.scrollbarItemStyle, 'transitionDuration', `${value}ms`)
			},
			addClass(value) {
				this.contentClass = Array.from(new Set([...this.contentClass, ...value.split(" ")]));;
			},
			removeClass(value) {
				this.contentClass = this.contentClass.filter(item => !value.split(" ").includes(item));
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
			setPaginationCss(value) {
				Object.keys(value).forEach((item) => {
					this.$set(this.paginationStyle, item, value[item])
				})
			},
			scrollbarCss(value) {
				Object.keys(value).forEach((item) => {
					this.$set(this.scrollbarStyle, item, value[item])
				})
			},
			scrollbarItemCss(value) {
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
			cubeShadowCss(value) {
				Object.keys(value).forEach((item) => {
					this.$set(this.cubeShadowStyle, item, value[item])
				})
			},
			cubeShadowTransform(value) {
				this.$set(this.cubeShadowStyle, 'transform', value)
			},
			cubeShadowTransition(value) {
				this.$set(this.cubeShadowStyle, 'transitionDuration', `${value}ms`)
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
