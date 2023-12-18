<template>
	<view class="demo-swiper">
		<demo-block title="基础用法">
			<z-swiper ref="zswiper" v-model="list1" :options="options">
				<z-swiper-item v-for="(item,index) in list1" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
			<z-swiper :custom-style="{'margin-top':'20rpx'}" ref="zswiperthumbs" v-model="list2"
				:options="optionsThumbs" @swiper="setThumbsSwiper">
				<z-swiper-item v-for="(item,index) in list2" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="反向">
			<z-swiper ref="zswiperinverse" v-model="list1Inverse" :options="optionsInverse">
				<z-swiper-item v-for="(item,index) in list1Inverse" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
			<z-swiper :custom-style="{'margin-top':'20rpx'}" ref="zswiperthumbsinverse" v-model="list2Inverse"
				:options="optionsThumbsInverse" @swiper="setThumbsSwiperInverse">
				<z-swiper-item v-for="(item,index) in list2Inverse" :key="index">
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
	const zswiper = ref()
	const zswiperinverse = ref()
	const zswiperthumbs = ref()
	const zswiperthumbsinverse = ref()
	const optionsThumbs = {
		controller: {
			control: null,
			inverse: false,
		}
	}
	const options = {
		controller: {
			control: null,
			inverse: false,
		}
	}
	const optionsThumbsInverse = {
		controller: {
			control: null,
			inverse: true,
		}
	}
	const optionsInverse = {
		controller: {
			control: null,
			inverse: true,
		}
	}
	const list1 = ref(data)
	const list2 = ref(data)
	const list1Inverse = ref(data)
	const list2Inverse = ref(data)
	const setThumbsSwiper = () => {
		zswiper.value.swiper.on("beforeMount", (swiper) => {
			zswiper.value.swiper.params.controller.control = zswiperthumbs.value.swiper;
		})

		zswiperthumbs.value.swiper.on("beforeMount", (swiper) => {
			zswiperthumbs.value.swiper.params.controller.control = zswiper.value.swiper;
		})
	}
	const setThumbsSwiperInverse = () => {
		zswiperinverse.value.swiper.on("beforeMount", (swiper) => {
			zswiperinverse.value.swiper.params.controller.control = zswiperthumbsinverse.value
				.swiper;
		})

		zswiperthumbsinverse.value.swiper.on("beforeMount", (swiper) => {
			zswiperthumbsinverse.value.swiper.params.controller.control = zswiperinverse.value
				.swiper;
		})
	}
</script>