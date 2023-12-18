<template>
	<view class="demo-swiper">
		<demo-block title="基础用法-数据截断">
			<z-swiper ref="zSwiper" v-model="list" :options="options">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="基础用法-保留结构">
			<z-swiper ref="zSwiper" v-model="listKeep" :options="optionsKeep">
				<z-swiper-item v-for="(item,index) in listKeep" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted
	} from 'vue';
	import data from '../../common/js/data';
	const options = reactive({
		virtual: {
			type: 'cut',
			addSlidesBefore: 1,
			addSlidesAfter: 1,
			slides: []
		},
	})
	const optionsKeep = reactive({
		virtual: {
			type: 'keep',
			addSlidesBefore: 1,
			addSlidesAfter: 1,
			slides: []
		},
	})
	const colorList = ['#7ED321', '#2183D3', '#2128D3', '#431058', '#1E835A', '#B1397B', '#B36021']
	const list = ref([])
	const listKeep = ref([])
	onMounted(() => {
		let list = [];
		for (var i = 1; i < 1000; i += 1) {
			const randomValue = Math.floor(Math.random() * 7);
			list.push({
				background: colorList[randomValue],
				text: `slide${i}`
			})
		}
		options.virtual.slides = [...list];
		optionsKeep.virtual.slides = [...list];
	})
</script>