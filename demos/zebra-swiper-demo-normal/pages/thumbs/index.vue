<template>
	<view class="demo-swiper">
		<demo-block title="基础用法">
			<z-swiper ref="zSwiper" v-model="list" :options="options">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
			<z-swiper ref="zSwiperThumbs" v-model="list" :options="optionsThumbs" @swiper="setThumbsSwiper">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<image class="thumbImage" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="自动播放">
			<z-swiper ref="zSwiperAuto" v-model="list" :options="optionsAuto">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
			<z-swiper ref="zSwiperThumbsAuto" v-model="list" :options="optionsThumbsAuto" @swiper="setThumbsAutoSwiper">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<image class="thumbImage" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
	</view>
</template>

<script>
	import DemoBlock from '../../components/DemoBlock/DemoBlock.vue';
	export default {
		components: {
			DemoBlock
		},
		data() {
			return {
				optionsThumbs: {
					spaceBetween: 10,
					slidesPerView: 4,
					freeMode: true,
					watchSlidesProgress: true,
					thumbs: {
						use: true
					}
				},
				options: {
					spaceBetween: 10,
					thumbs: {
						swiper: true
					}
				},
				optionsThumbsAuto: {
					spaceBetween: 10,
					slidesPerView: 4,
					freeMode: true,
					watchSlidesProgress: true,
					thumbs: {
						use: true
					}
				},
				optionsAuto: {
					spaceBetween: 10,
					thumbs: {
						swiper: true
					},
					autoplay: true
				},
				list: [
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg',
				]
			}
		},
		methods: {
			setThumbsSwiper() {
				this.$refs.zSwiper.swiper.on("beforeMount", (swiper) => {
					this.$refs.zSwiper.swiper.params.thumbs.swiper = this.$refs.zSwiperThumbs.swiper;
				})
			},
			setThumbsAutoSwiper() {
				this.$refs.zSwiperAuto.swiper.on("beforeMount", (swiper) => {
					this.$refs.zSwiperAuto.swiper.params.thumbs.swiper = this.$refs.zSwiperThumbsAuto.swiper;
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.demo-swiper {
		.image {
			height: 300rpx;
			width: 100%;
		}

		.thumbImage {
			height: 150rpx;
			width: 100%;
		}
	}
</style>
