<template>
	<view class="demo-swiper">
		<demo-block title="切换效果-全景">
			<z-swiper v-model="list" :options="options">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="自动播放">
			<z-swiper v-model="list" :options="optionsAutoplay">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="无限循环">
			<z-swiper v-model="loopList" :options="optionsLoop">
				<z-swiper-item v-for="(item,index) in loopList
				" :key="index">
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
				options: {
					effect: 'panorama',
					slidesPerView: 1.5,
					centeredSlides: true,
					panorama: {
						depth: 150,
						rotate: 45,
					},
				},
				optionsAutoplay: {
					effect: 'panorama',
					slidesPerView: 1.5,
					centeredSlides: true,
					panorama: {
						depth: 150,
						rotate: 45,
					},
					autoplay: true
				},
				optionsLoop: {
					effect: 'panorama',
					slidesPerView: 1.5,
					centeredSlides: true,
					loopedSlides: 2,
					panorama: {
						depth: 150,
						rotate: 45,
					},
					loop: true
				},
				list: [
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg',
				],
				loopList: [
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg',
				],
			}
		},
	}
</script>

<style scoped lang="scss">
	.demo-swiper {
		.image {
			height: 560rpx;
			width: 100%;
		}
	}
</style>
