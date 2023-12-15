<template>
	<!-- #ifndef MP-WEIXIN || MP-QQ -->
	<view :class="['swiper-slide',slideClass]" :style="[itemStyle,customStyle]" @click.stop="onClickSlide">
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN || MP-QQ -->
		<view :class="['swiper-slide',slideClass]" :style="[itemStyle,customStyle]" @click.stop="onClickSlide"
			:swiperItemTransform="wxsItemTransform" :change:swiperItemTransform="zSwiperWxs.wxsItemTransformObserver">
			<!-- #endif -->
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
		// #ifdef MP-WEIXIN
		options: {
			virtualHost: true
		},
		// #endif
		mixins: [ChildrenMixin('zSwipe')],
		props: {
			customStyle: {
				type: Object,
				default: () => {
					return {};
				}
			},
			swiperItemWidth: {
				type: [String, Number],
				default: 0
			},
			swiperItemHeight: {
				type: [String, Number],
				default: 0
			},
		},
		data() {
			return {
				wxsItemTransform: "",
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
		watch: {
			swiperItemWidth: {
				handler(val) {
					if (val) {
						this.$set(this.itemStyle, 'width', this.unitFormat(val, "rpx"))
					}
				},
				immediate: true
			},
			swiperItemHeight: {
				handler(val) {
					if (val) {
						this.$set(this.itemStyle, 'height', this.unitFormat(val, "rpx"))
					}
				},
				immediate: true
			}
		},
		methods: {
			unitFormat(val, type) {
				if (type == "rpx") {
					if (val.includes("rpx") || val.includes("px")) {
						return val;
					} else {
						return val + 'px';
					}
				}
				if (type == "number") {
					if (val.includes("rpx")) {
						return uni.upx2px(parseInt(val.replace("rpx", "")))
					} else if (!val.includes("rpx") && val.includes("px")) {
						return parseInt(val.replace("px", ""))
					} else {
						return val;
					}
				}
			},
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
				this.wxsItemTransform = value
				// #endif
			},
			transition(value) {
				// #ifdef MP-BAIDU
				this.$set(this.itemStyle, 'transitionDuration', `${value}ms`)
				// #endif
				// #ifndef MP-BAIDU
				this.$set(this.itemStyle, 'transition-duration', `${value}ms`)
				// #endif
			},
			willChange(value) {
				this.$set(this.itemStyle, 'will-change', value)
			},
			css(value) {
				Object.keys(value).forEach((item) => {
					this.$set(this.itemStyle, item, value[item])
				})
			},
			transitionEnd(callback, duration) {
				setTimeout(callback, duration)
			},
			getSize() {
				const query = uni.createSelectorQuery().in(this);
				return new Promise((resolve, reject) => {
					query.select('.swiper-slide').boundingClientRect(data => {
						if (this.swiperItemWidth) {
							this.width = this.unitFormat(this.swiperItemWidth, "number");
							this.height = data.height;
						}
						if (this.swiperItemHeight) {
							this.width = data.width;
							this.height = this.unitFormat(this.swiperItemHeight, "number");
						}
						if (!this.swiperItemWidth && !this.swiperItemHeight) {
							this.width = data.width;
							this.height = data.height;
						}
						resolve({
							width: this.width,
							height: this.height
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
