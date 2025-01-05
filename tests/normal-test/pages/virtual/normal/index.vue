<template>
	<view class="demo-swiper">
		<demo-block title="normal">
			<z-swiper v-model:list="list" virtual :modules="modules" :virtualList="virtualList">
				<z-swiper-item v-for="(item,index) in list" :key="index" :virtualIndex="item.virtualIndex"
					:custom-style="item.props.style">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<!-- #ifdef H5 -->
		<demo-block title="native">
			<z-swiper-native loop virtual :modules="modules">
				<z-swiper-item-native v-for="(item,index) in virtualListNative" :key="index" :virtualIndex="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item-native>
			</z-swiper-native>
		</demo-block>
		<!-- #endif -->
	</view>
</template>

<script setup>
	import {
		ref,
		watch
	} from 'vue'
	import {
		Virtual
	} from '@/uni_modules/zebra-swiper/modules'

	const modules = ref([Virtual])
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