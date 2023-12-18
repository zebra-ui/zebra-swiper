<template>
	<view class="carousel-slider">
		<demo-block title="carousel-slider">
			<z-swiper ref="zSwiper" v-model="list" :options="options">
				<z-swiper-item v-for="(item,index) in list" :key="index" :custom-style="{width:'500rpx'}">
					<div class="carousel-slider-animate-opacity">
						<demo-item :item="item"></demo-item>
					</div>
				</z-swiper-item>
			</z-swiper>
		</demo-block>

	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import data from '../../../common/js/data.js'
	const options = {
		effect: "carousel"
	}
	const list = ref(data)
</script>