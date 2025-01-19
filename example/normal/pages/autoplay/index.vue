<template>
	<view class="demo-swiper">
		<demo-block title="基础用法">
			<z-swiper autoplay :modules="modules">
				<z-swiper-item v-for="item in list" :key="item.id">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="无缝播放">
			<view class="demo-swiper-ad">
				<z-swiper v-model:list="autoPlayList" loop :autoplay="{ delay:0 }" :speed="2000" :modules="modules"
					:slidesPerView="4">
					<z-swiper-item v-for="item in autoPlayList" :key="item.id">
						<ad-custom style="width: 100%;" unit-id="adunit-ee6c78d4b6fd2f11"></ad-custom>
					</z-swiper-item>
				</z-swiper>
			</view>
		</demo-block>
		<demo-block title="时间间隔">
			<z-swiper :autoplay="{ delay: 1000 }" :modules="modules">
				<z-swiper-item v-for="item in list" :key="item.id">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="自动停止">
			<z-swiper :autoplay="{ stopOnLastSlide: true }" :modules="modules">
				<z-swiper-item v-for="item in list" :key="item.id">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
<!-- 		<demo-block title="无限循环">
			<z-swiper v-model:list="loopList" autoplay loop :modules="modules">
				<z-swiper-item v-for="item in loopList" :key="item.id">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block> -->
		<demo-block title="反向">
			<z-swiper :autoplay="{ reverseDirection: true }" :modules="modules">
				<z-swiper-item v-for="item in list" :key="item.id">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
	</view>
</template>

<script setup lang="ts">
	import {
		reactive,
		ref
	} from 'vue'
	import {
		Autoplay
	} from '@/uni_modules/zebra-swiper/modules'
	import data from '../../common/js/data.js'
	const list = ref([...data])
	const loopList = ref([...data])
	const modules = ref([Autoplay])
	const autoplayItemStyle = reactive({
		width: '160rpx',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	})
	const autoPlayList = ref(
		Array.from({
			length: 10
		}).map((item, index) => {
			return {
				id: generateUUID(),
				text: `slide${index}`
			}
		})
	)

	function generateUUID() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			const r = (Math.random() * 16) | 0
			const v = c === 'x' ? r : (r & 0x3) | 0x8
			return v.toString(16)
		})
	}
</script>

<style lang="scss">
	.demo-swiper-ad {
		--swiper-wrapper-transition-timing-function: linear;
	}
</style>