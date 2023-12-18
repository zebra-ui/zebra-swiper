<template>
	<view class="demo-swiper">
		<demo-block title="切换效果-创意性">
			<z-swiper v-model="list" :options="options1">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
			<z-swiper :custom-style="{'margin-top':'20rpx'}" v-model="list" :options="options2">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
			<z-swiper :custom-style="{'margin-top':'20rpx'}" v-model="list" :options="options3">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
			<z-swiper :custom-style="{'margin-top':'20rpx'}" v-model="list" :options="options4">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
			<z-swiper :custom-style="{'margin-top':'20rpx'}" v-model="list" :options="options5">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
			<z-swiper :custom-style="{'margin-top':'20rpx'}" v-model="list" :options="options6">
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
	const options1 = {
		effect: 'creative',
		creativeEffect: {
			prev: {
				shadow: true,
				translate: [0, 0, -400],
			},
			next: {
				translate: ['100%', 0, 0]
			}
		}
	}
	const options2 = {
		effect: 'creative',
		creativeEffect: {
			prev: {
				shadow: true,
				translate: ['-120%', 0, -500],
			},
			next: {
				shadow: true,
				translate: ['120%', 0, -500]
			}
		}
	}
	const options3 = {
		effect: 'creative',
		creativeEffect: {
			prev: {
				shadow: true,
				translate: ['-20%', 0, -1],
			},
			next: {
				translate: ['100%', 0, 0]
			}
		}
	}
	const options4 = {
		effect: 'creative',
		creativeEffect: {
			prev: {
				shadow: true,
				translate: [0, 0, -800],
				rotate: [180, 0, 0],
			},
			next: {
				shadow: true,
				translate: [0, 0, -800],
				rotate: [-180, 0, 0]
			}
		}
	}
	const options5 = {
		effect: 'creative',
		creativeEffect: {
			prev: {
				shadow: true,
				translate: ['-125%', 0, -800],
				rotate: [0, 0, -90],
			},
			next: {
				shadow: true,
				translate: ['125%', 0, -800],
				rotate: [0, 0, 90]
			}
		}
	}
	const options6 = {
		effect: 'creative',
		creativeEffect: {
			prev: {
				shadow: true,
				origin: 'left center',
				translate: ['-5%', 0, -200],
				rotate: [0, 100, 0],
			},
			next: {
				origin: 'right center',
				translate: ['5%', 0, -200],
				rotate: [0, -100, 0],
			}
		}
	}
	const list = ref(data)
</script>