<template>
	<view class="demo-swiper">
		<demo-block title="基础用法">
			<z-swiper v-model="list" :options="{loop : true}">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="自动播放">
			<z-swiper v-model="listAutoplay" :options="{loop : true,autoplay:true}">
				<z-swiper-item v-for="(item,index) in listAutoplay" :key="index">
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
				list: [
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg'
				],
				listAutoplay: [
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg'
				],
			}
		},
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
