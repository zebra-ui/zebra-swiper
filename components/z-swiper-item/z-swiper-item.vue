<template>
	<view :class="['swiper-slide',slideClass]" :style="[itemStyle,customStyle]">
		<template v-if="swiperInited">
			<slot></slot>
		</template>
		<template v-else>
			<view class="swiper-slide-loading">
				<z-swiper-loading></z-swiper-loading>
			</view>
		</template>
	</view>
</template>

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
			this.getHeight();
		},
		computed: {
			slideClass() {
				return this.itemClass.join(" ");
			}
		},
		methods: {
			toJSON() {
				return this;
			},
			transform(value) {
				this.$set(this.itemStyle, 'transform', value)
			},
			transition(value) {
				this.$set(this.itemStyle, 'transitionDuration', value)
			},
			setCss(value) {
				Object.keys(value).forEach((item) => {
					this.$set(this.itemStyle, item, value[item])
				})
			},
			promiseMethod() {
				return new Promise((resolve, reject) => {
					resolve(this);
				});
			},
			async getRect() {
				let rectInfoParent = await getRect(this.parent, '.swiper');
				let rectInfo = await getRect(this, '.swiper-slide');
				/*
				 * 百度小程序等待此bug被修复 （https://ask.dcloud.net.cn/question/139681?notification_id-1037363__rf-false）
				 */
				// #ifndef MP-BAIDU
				this.offsetLeft = rectInfo.left - rectInfoParent.left;
				// #endif
				// #ifdef MP-BAIDU
				this.offsetLeft = rectInfo.width * this.index;
				// #endif
				this.offsetTop = rectInfo.top - rectInfoParent.top;
				return true;
			},
			async getWidth() {
				let rectInfo = await getRect(this, '.swiper-slide');
				this.width = rectInfo.width;
			},
			async getHeight() {
				let rectInfo = await getRect(this, '.swiper-slide');
				this.height = rectInfo.height;
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
