<template>
	<view :class="['swiper-slide',slideClass]" :style="[itemStyle,customStyle]" @click.stop="onClickSlide"
		:prop="itemWxsProp" :change:prop="zSwiperWxs.itemPropObserver">
		<slot></slot>
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
	export default {
		name: "z-swipe-item",
		mixins: [ChildrenMixin('zSwipe')],
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
			};
		},
		mounted() {
			this.getSize();
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
				this.$set(this.itemStyle, 'transitionDuration', `${value}ms`)
				// #endif
				// #ifdef MP-WEIXIN || MP-QQ
				this.$set(this.itemWxsProp.itemStyle, 'transition-duration', `${value}ms`)
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
			css(value) {
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
			transitionEnd(callback, duration) {
				setTimeout(callback, duration)
			},
			getSize() {
				const query = uni.createSelectorQuery().in(this);
				return new Promise((resolve, reject) => {
					query.select('.swiper-slide').boundingClientRect(data => {
						this.width = data.width;
						this.height = data.height;
						resolve({
							width: data.width,
							height: data.height
						})
					}).exec();
				})
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
</style>
