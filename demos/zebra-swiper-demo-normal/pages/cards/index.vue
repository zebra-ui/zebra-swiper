<template>
	<view class="demo-swiper">
		<demo-block title="切换效果-卡片">
			<z-swiper v-model="list" :options="options">
				<z-swiper-item :custom-style="slideCustomStyle" v-for="(item,index) in list" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="自动播放">
			<z-swiper v-model="list" :options="optionsAutoplay">
				<z-swiper-item :custom-style="slideCustomStyle" v-for="(item,index) in list" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="纵向">
			<z-swiper v-model="list" :custom-style="{height:'800rpx'}" :options="optionsVertical">
				<z-swiper-item :custom-style="slideCustomStyle" v-for="(item,index) in list" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="关闭旋转">
			<z-swiper v-model="list" :options="optionsRotate">
				<z-swiper-item :custom-style="slideCustomStyle" v-for="(item,index) in list" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="偏移距离">
			<z-swiper v-model="list" :options="optionsOffset">
				<z-swiper-item :custom-style="slideCustomStyle" v-for="(item,index) in list" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="旋转角度">
			<z-swiper v-model="list" :options="optionsRotateNumber">
				<z-swiper-item :custom-style="slideCustomStyle" v-for="(item,index) in list" :key="index">
					<image class="image" :src="item" mode="aspectFill">
					</image>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="无限循环">
			<z-swiper v-model="loopList" :options="optionsLoop">
				<z-swiper-item :custom-style="slideCustomStyle" v-for="(item,index) in loopList
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
				slideCustomStyle: {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '36rpx'
				},
				options: {
					effect: 'cards'
				},
				optionsAutoplay: {
					effect: 'cards',
					autoplay: true
				},
				optionsVertical: {
					effect: 'cards',
					direction: 'vertical'
				},
				optionsRotate: {
					effect: 'cards',
					cardsEffect: {
						rotate: false
					}
				},
				optionsOffset: {
					effect: 'cards',
					cardsEffect: {
						perSlideOffset: 14
					}
				},
				optionsRotateNumber: {
					effect: 'cards',
					cardsEffect: {
						perSlideRotate: 20
					}
				},
				optionsLoop: {
					effect: 'cards',
					loop: true,
					loopedSlides: 2,
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
			height: 640rpx;
			width: 480rpx;
			border-radius: 24rpx;
		}
	}
</style>
