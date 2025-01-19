<template>
	<view class="demo-swiper">
		<demo-block title="基础用法">
			<z-swiper v-model:list="list" loop>
				<z-swiper-item v-for="(item,index) in list" :key="item.id">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="自动播放">
			<z-swiper v-model:list="listAutoplay" loop autoplay :modules="modules">
				<z-swiper-item v-for="item in listAutoplay" :key="item.id">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="循坏广告">
			<z-swiper v-model:list="listAd" loop>
				<z-swiper-item v-for="(item,index) in listAd" :key="item.id">
					<demo-ad :item="item"></demo-ad>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		Autoplay
	} from '@/uni_modules/zebra-swiper/modules'
	import data from '../../common/js/data.js'
	const modules = ref([Autoplay])
	const list = ref([...data])
	const listAutoplay = ref([...data])
	const listAd = ref([...data])
</script>