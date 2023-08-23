<template>
	<view class="demo-swiper">
		<demo-block title="基础用法">
			<z-swiper ref="zSwiper" v-model="list1" :options="options">
				<z-swiper-item v-for="(item,index) in list1" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
			<z-swiper ref="zSwiperThumbs" v-model="list2" :options="optionsThumbs" @swiper="setThumbsSwiper">
				<z-swiper-item v-for="(item,index) in list2" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="反向">
			<z-swiper ref="zSwiperInverse" v-model="list1Inverse" :options="optionsInverse">
				<z-swiper-item v-for="(item,index) in list1Inverse" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
			<z-swiper ref="zSwiperThumbsInverse" v-model="list2Inverse" :options="optionsThumbsInverse"
				@swiper="setThumbsSwiperInverse">
				<z-swiper-item v-for="(item,index) in list2Inverse" :key="index">
					<image class="image" :src="item" mode="aspectFill">
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
					controller: {
						control: null,
						inverse: false,
					}
				},
				options: {
					controller: {
						control: null,
						inverse: false,
					}
				},
				optionsThumbsInverse: {
					controller: {
						control: null,
						inverse: true,
					}
				},
				optionsInverse: {
					controller: {
						control: null,
						inverse: true,
					}
				},
				list1: [
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg',
				],
				list2: [
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg',
				],
				list1Inverse: [
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg',
				],
				list2Inverse: [
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg',
				]
			}
		},
		methods: {
			setThumbsSwiper() {
				this.$refs.zSwiper.swiper.on("beforeMount", (swiper) => {
					this.$refs.zSwiper.swiper.params.controller.control = this.$refs.zSwiperThumbs.swiper;
				})

				this.$refs.zSwiperThumbs.swiper.on("beforeMount", (swiper) => {
					this.$refs.zSwiperThumbs.swiper.params.controller.control = this.$refs.zSwiper.swiper;
				})
			},
			setThumbsSwiperInverse() {
				this.$refs.zSwiperInverse.swiper.on("beforeMount", (swiper) => {
					this.$refs.zSwiperInverse.swiper.params.controller.control = this.$refs.zSwiperThumbsInverse.swiper;
				})

				this.$refs.zSwiperThumbsInverse.swiper.on("beforeMount", (swiper) => {
					this.$refs.zSwiperThumbsInverse.swiper.params.controller.control = this.$refs.zSwiperInverse.swiper;
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
	}
</style>