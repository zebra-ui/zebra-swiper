<template>
	<view :class="['swiper-slide',slideClass]" :style="[itemStyle,customStyle]" @click.stop="onClickSlide"
		:prop="itemWxsProp" :change:prop="zSwiperWxs.itemPropObserver">
		<template v-if="swiperInited">
			<slot></slot>
		</template>
		<template v-else>
			<z-swiper-loading></z-swiper-loading>
		</template>
	</view>
</template>
<!-- #ifdef MP-WEIXIN || MP-QQ  -->
<script src="../../wxs/z-swiper-wxs.wxs" module="zSwiperWxs" lang="wxs"></script>
<!-- #endif -->
<script>
	import {
		ChildrenMixin
	} from '../../libs/mixins/relation.js';
	import {
		getRect
	} from '../../libs/utils/utils.js';
	import zSwiperLoading from '../z-swiper-loading/z-swiper-loading.vue'
	export default {
		name: "z-swipe-item",
		mixins: [ChildrenMixin('zSwipe')],
		components: {
			zSwiperLoading
		},
		props: {
			customStyle: {
				type: Object,
				default: () => {
					return {};
				}
			}
		},
		data() {
			return {
				itemWxsProp: {
					itemStyle: {}
				},
				itemStyle: {},
				offsetLeft: 0,
				offsetTop: 0,
				itemClass: [],
				width: 0,
				height: 0,
				swiperInited: false
			};
		},
		mounted() {
			this.getWidth();
			// this.getHeight();
		},
		computed: {
			slideClass() {
				return this.itemClass.join(" ");
			}
		},
		methods: {
			onClickSlide(event) {
				this.$emit("click", {
					event,
					index: this.index
				});
				this.parent.swiper.updateClickedSlide(this.index);
				this.parent.swiper.emit("slideClick", this.index);
			},
			transform(value) {
				// #ifndef MP-WEIXIN || MP-QQ
				this.$set(this.itemStyle, 'transform', value)
				// #endif
				// #ifdef MP-WEIXIN || MP-QQ
				this.$set(this.itemWxsProp.itemStyle, 'transform', value)
				// #endif
			},
			transition(value) {
				// #ifndef MP-WEIXIN || MP-QQ
				this.$set(this.itemStyle, 'transitionDuration', value)
				// #endif
				// #ifdef MP-WEIXIN || MP-QQ
				this.$set(this.itemWxsProp.itemStyle, 'transition-duration', value)
				// #endif
			},
			willChange(value) {
				// #ifndef MP-WEIXIN || MP-QQ
				this.$set(this.itemStyle, 'will-change', value)
				// #endif
				// #ifdef MP-WEIXIN || MP-QQ
				this.$set(this.itemWxsProp.itemStyle, 'will-change', value)
				// #endif
			},
			setCss(value) {
				// #ifndef MP-WEIXIN || MP-QQ
				Object.keys(value).forEach((item) => {
					this.$set(this.itemStyle, item, value[item])
				})
				// #endif
				// #ifdef MP-WEIXIN || MP-QQ
				Object.keys(value).forEach((item) => {
					this.$set(this.itemWxsProp.itemStyle, item, value[item])
				})
				// #endif
			},
			promiseMethod() {
				return new Promise((resolve, reject) => {
					resolve(this);
				});
			},
			async getRect() {
				let rectInfo = await getRect(this, '.swiper-slide');
				let rectInfoParent = await getRect(this.parent, '.swiper');
				/*
				 * 百度小程序等待此bug被修复 （https://ask.dcloud.net.cn/question/139681?notification_id-1037363__rf-false）
				 */
				// #ifndef MP-BAIDU
				this.offsetLeft = rectInfo.left - rectInfoParent.left;
				this.offsetTop = rectInfo.top - rectInfoParent.top;
				// #endif
				// #ifdef MP-BAIDU
				this.offsetLeft = rectInfo.width * this.index;
				this.offsetTop = rectInfo.height * this.index;
				// #endif
				return true;
			},
			async getWidth() {
				let rectInfo = await getRect(this, '.swiper-slide');
				this.width = rectInfo.width;
				return rectInfo.width;
			},
			async getHeight() {
				let rectInfo = await getRect(this, '.swiper-slide');
				this.height = rectInfo.height;
				return rectInfo.height;
			},
			addClass(value) {
				this.itemClass = Array.from(new Set([...this.itemClass, ...value.split(" ")]));
			},
			removeClass(value) {
				this.itemClass = this.itemClass.filter(item => !value.split(" ").includes(item));
			},
			hasClass(value) {
				return this.itemClass.includes(value);
			},
			nextAll() {
				return this.parent.children.filter((item) => {
					return item.index > this.index
				})
			},
			prevAll() {
				return this.parent.children.filter((item) => {
					return item.index < this.index
				}).reverse()
			},
		}
	}
</script>

<style scoped lang="scss">
	@import '../../libs/core.scss';

	.swiper-slide-loading {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
