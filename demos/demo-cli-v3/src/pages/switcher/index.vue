<template>
	<view class="demo-switcher">
		<demo-block title="基础用法">
			<z-swiper v-model="list" :options="options">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="插槽自定义">
			<z-swiper v-model="list" :options="optionsSlot">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
				<template #pre-button>
					<view class="custom-switcher">
						prev
					</view>
				</template>
				<template #next-button>
					<view class="custom-switcher">
						next
					</view>
				</template>
			</z-swiper>
		</demo-block>
		<demo-block title="完全自定义">
			<z-swiper v-model="loopList" ref="zswiper" :options="optionsCustom">
				<z-swiper-item v-for="(item,index) in loopList" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
			<view class="custom-switcher-group">
				<button type="primary" size="mini" class="custom-switcher-group-button" @click="prev()">prev</button>
				<button type="primary" size="mini" class="custom-switcher-group-button" @click="next()">next</button>
			</view>
		</demo-block>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import data from '../../common/js/data.js'
	const options = {
		navigation: {
			nextEl: true,
			prevEl: true
		},
	}
	const optionsSlot = {
		navigation: {
			slot: true
		},
	}
	const optionsCustom = {
		navigation: {
			custom: true
		},
		loop: true
	}
	const list = ref(data)
	const loopList = ref(data)
	const zswiper = ref(null)
	const prev = () => {
		zswiper.value.swiper.slidePrev();
	}
	const next = () => {
		zswiper.value.swiper.slideNext();
	}
</script>

<style scoped lang="scss">
	.demo-switcher {
		.image {
			height: 300rpx;
			width: 100%;
		}

		.custom-switcher {
			display: flex;
			align-items: center;
		}

		.custom-switcher-group {
			margin-top: 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;
		}
	}
</style>