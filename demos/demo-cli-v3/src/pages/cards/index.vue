<template>
	<view class="demo-swiper">
		<demo-block title="切换效果-卡片">
			<z-swiper v-model="list" :options="options">
				<z-swiper-item :custom-style="slideCustomStyle" v-for="(item,index) in list" :key="index">
					<demo-item :custom-style="itemCustomStyle" :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="自动播放">
			<z-swiper v-model="list" :options="optionsAutoplay">
				<z-swiper-item :custom-style="slideCustomStyle" v-for="(item,index) in list" :key="index">
					<demo-item :custom-style="itemCustomStyle" :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="纵向">
			<z-swiper v-model="list" :custom-style="{height:'800rpx'}" :options="optionsVertical">
				<z-swiper-item :custom-style="slideCustomStyle" v-for="(item,index) in list" :key="index">
					<demo-item :custom-style="itemCustomStyle" :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="关闭旋转">
			<z-swiper v-model="list" :options="optionsRotate">
				<z-swiper-item :custom-style="slideCustomStyle" v-for="(item,index) in list" :key="index">
					<demo-item :custom-style="itemCustomStyle" :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="偏移距离">
			<z-swiper v-model="list" :options="optionsOffset">
				<z-swiper-item :custom-style="slideCustomStyle" v-for="(item,index) in list" :key="index">
					<demo-item :custom-style="itemCustomStyle" :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="旋转角度">
			<z-swiper v-model="list" :options="optionsRotateNumber">
				<z-swiper-item :custom-style="slideCustomStyle" v-for="(item,index) in list" :key="index">
					<demo-item :custom-style="itemCustomStyle" :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="无限循环">
			<z-swiper v-model="loopList" :options="optionsLoop">
				<z-swiper-item :custom-style="slideCustomStyle" v-for="(item,index) in loopList
				" :key="index">
					<demo-item :custom-style="itemCustomStyle" :item="item"></demo-item>
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

	const slideCustomStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
	const itemCustomStyle = {
		"height": "640rpx",
		"width": "480rpx",
		"border-radius": "24rpx"
	}
	const options = {
		effect: 'cards'
	}
	const optionsAutoplay = {
		effect: 'cards',
		autoplay: true
	}
	const optionsVertical = {
		effect: 'cards',
		direction: 'vertical'
	}
	const optionsRotate = {
		effect: 'cards',
		cardsEffect: {
			rotate: false
		}
	}
	const optionsOffset = {
		effect: 'cards',
		cardsEffect: {
			perSlideOffset: 14
		}
	}
	const optionsRotateNumber = {
		effect: 'cards',
		cardsEffect: {
			perSlideRotate: 20
		}
	}
	const optionsLoop = {
		effect: 'cards',
		loop: true,
		loopedSlides: 2,
	}
	const list = ref(data)
	const loopList = ref(data)
</script>