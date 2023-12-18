<template>
	<view class="demo-swiper">
		<demo-block title="基础用法">
			<z-swiper v-model="list" :options="options">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="无限循环">
			<z-swiper v-model="listLoop" :options="optionsLoop">
				<z-swiper-item v-for="(item,index) in listLoop" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="分式类型">
			<z-swiper v-model="list" :options="optionsFraction">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="进度条类型">
			<z-swiper v-model="list" :options="optionsProgressbar">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="动态分页器">
			<z-swiper v-model="list" :options="optionsDynamicBullets">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="点击切换">
			<z-swiper v-model="list" :options="optionsClickable">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import data from '../../common/js/data.js'
	const options = {
		pagination: {
			el: true,
		},
	}
	const optionsLoop = {
		pagination: {
			el: true,
		},
		loop: true
	}
	const optionsFraction = {
		pagination: {
			el: true,
			type: 'fraction'
		},
	}
	const optionsProgressbar = {
		pagination: {
			el: true,
			type: 'progressbar'
		},
	}
	const optionsDynamicBullets = {
		pagination: {
			el: true,
			dynamicBullets: true,
		},
	}
	const optionsClickable = {
		pagination: {
			el: true,
			clickable: true,
		},
	}
	const list = ref(data)
	const listLoop = ref(data)
</script>