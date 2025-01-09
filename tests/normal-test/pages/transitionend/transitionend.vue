<template>
	<view class="demo-swiper">
		<demo-block title="normal">
			<z-swiper v-model:list="virtualList" loop :autoplay="{ delay:0 }" :speed="3000" :modules="modules">
				<z-swiper-item v-for="(item,index) in virtualList" :key="item.id">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
	</view>
</template>

<script setup>
	import {
		ref,
		watch
	} from 'vue'
	import {
		Virtual,
		EffectFade,
		EffectCube,
		EffectFlip,
		EffectCoverflow,
		EffectCards,
		EffectCreative,
		Autoplay
	} from '@/uni_modules/zebra-swiper/modules'

	const modules = ref([Autoplay, Virtual, EffectFade, EffectCube, EffectCoverflow, EffectFlip, EffectCards,
		EffectCreative
	])
	const colorList = [
		'#7ED321',
		'#2183D3',
		'#2128D3',
		'#431058',
		'#1E835A',
		'#B1397B',
		'#B36021'
	]
	const list = ref([])

	const virtualList = ref(
		Array.from({
			length: 3
		}).map((item, index) => {
			const randomValue = Math.floor(Math.random() * 7)
			return {
				id: generateUUID(),
				background: colorList[randomValue],
				text: `slide${index}`
			}
		})
	)
	const virtualListNative = ref(
		Array.from({
			length: 1000
		}).map((item, index) => {
			const randomValue = Math.floor(Math.random() * 7)
			return {
				id: generateUUID(),
				background: colorList[randomValue],
				text: `slide${index}`
			}
		})
	)

	function generateUUID() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			const r = (Math.random() * 16) | 0
			const v = c === 'x' ? r : (r & 0x3) | 0x8
			return v.toString(16)
		})
	}
</script>

<style>
	.demo-swiper {
		--swiper-wrapper-transition-timing-function: linear;
	}
</style>