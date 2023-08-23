<template>
	<view class="demo-swiper">
		<demo-block title="基础用法">
			<z-swiper v-model="list" :options="{autoplay:true}">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="时间间隔">
			<z-swiper v-model="list" :options="{ autoplay: {delay: 1000}}">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="自动停止">
			<z-swiper v-model="list" :options="{ autoplay: {stopOnLastSlide: true}}">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="无限循环">
			<z-swiper v-model="loopList" :options="{ autoplay:true,loop:true}">
				<z-swiper-item v-for="(item,index) in loopList" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="反向">
			<z-swiper v-model="list" :options="{ autoplay: {reverseDirection: true}}">
				<z-swiper-item v-for="(item,index) in list" :key="index">
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
