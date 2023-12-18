<template>
	<view class="demo-swiper">
		<demo-block title="切换效果-淡入">
			<z-swiper v-model="list" :options="options">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="自动播放">
			<z-swiper v-model="list" :options="optionsAutoplay">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="纵向">
			<z-swiper v-model="list" :custom-style="{height:'300rpx'}" :options="optionsVertical">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="无限循环">
			<z-swiper v-model="loopList" :options="optionsLoop">
				<z-swiper-item v-for="(item,index) in loopList" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import data from '../../common/js/data.js'
	const options = {
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		}
	}
	const optionsAutoplay = {
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		autoplay: true
	}
	const optionsVertical = {
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		direction: 'vertical'
	}
	const optionsLoop = {
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		loop: true
	}
	const list = ref(data)
	const loopList = ref(data)
</script>