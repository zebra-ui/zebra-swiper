<template>
	<view class="demo-swiper">
		<demo-block title="基础用法">
			<z-swiper ref="zSwiper" v-model="list" :options="options">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<image v-if="item" class="image" :src="item.url">
					</image>
					<!-- <video :enable-progress-gesture="false" class="image" :src="item.url">
					</video> -->
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="基础用法-保留结构">
			<z-swiper ref="zSwiper" v-model="listKeep" :options="optionsKeep">
				<z-swiper-item v-for="(item,index) in listKeep" :key="index">
					<image v-if="item" class="image" :src="item.url">
					</image>
					<!-- <video :enable-progress-gesture="false" class="image" :src="item.url">
					</video> -->
				</z-swiper-item>
			</z-swiper>
		</demo-block>
<!-- 		<view>
			<image style="height: 0;width: 0;" v-for="(item,index) in preList" :key="index" class="image"
				:src="item.url">
			</image>
		</view> -->
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
					// autoplay: true,
					virtual: {
						type: 'cut',
						addSlidesBefore: 1,
						addSlidesAfter: 1,
						slides: []
					},
				},
				optionsKeep: {
					// autoplay: true,
					virtual: {
						type: 'keep',
						addSlidesBefore: 1,
						addSlidesAfter: 1,
						slides: []
					},
				},
				list: [],
				listKeep: [],
				preList: []
			}
		},
		mounted() {
			let list = [];
			for (var i = 0; i < 100; i += 1) {
				// for (var j = 0; j < 3; j++) {
				// 	list.push({
				// 		show: false,
				// 		url: `https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe${j+1}.jpg`,
				// 		// url: `https://cdn.zebraui.com/zebra-swiper/demos/video/video${j+1}`,
				// 		id: i + j + ""
				// 	})
				// }
				list.push({
					show: false,
					url: `https://picsum.photos/100/100?id=${i}`,
					// url: `https://cdn.zebraui.com/zebra-swiper/demos/video/video${j+1}`,
					id: i
				})
				// }
			}
			this.preList = [...list];
			this.options.virtual.slides = [...list];
			this.optionsKeep.virtual.slides = [...list];
		}
	}
</script>

<style scoped lang="scss">
	.demo-swiper {
		image {
			will-change: transform
		}

		.image {
			width: 100%;
			height: 300rpx;
		}
	}
</style>
