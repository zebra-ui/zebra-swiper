<template>
	<view class="demo-swiper">
		<demo-block title="基础用法">
			<z-swiper ref="zswiper" v-model="list" :options="options">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
			<z-swiper ref="zswiperthumbs" :custom-style="{'margin-top':'10rpx'}" v-model="list" :options="optionsThumbs"
				@swiper="setThumbsSwiper">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item" height="150rpx"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="自动播放">
			<z-swiper ref="zswiperauto" v-model="list" :options="optionsAuto">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
			<z-swiper ref="zswiperthumbsauto" :custom-style="{'margin-top':'10rpx'}" v-model="list"
				:options="optionsThumbsAuto" @swiper="setThumbsAutoSwiper">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item" height="150rpx"></demo-item>
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
	const optionsThumbs = {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
		thumbs: {
			use: true
		}
	}
	const options = {
		spaceBetween: 10,
		thumbs: {
			swiper: true
		}
	}
	const optionsThumbsAuto = {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
		thumbs: {
			use: true
		}
	}
	const optionsAuto = {
		spaceBetween: 10,
		thumbs: {
			swiper: true
		},
		autoplay: true
	}

	const list = ref(data)

	const zswiper = ref()
	const zswiperthumbs = ref()
	const zswiperauto = ref()
	const zswiperthumbsauto = ref()

	const setThumbsSwiper = () => {
		zswiper.value.swiper.on("beforeMount", (swiper) => {
			zswiper.value.swiper.params.thumbs.swiper = zswiperthumbs.value.swiper;
		})
	}

	const setThumbsAutoSwiper = () => {
		zswiperauto.value.swiper.on("beforeMount", (swiper) => {
			zswiperauto.value.swiper.params.thumbs.swiper = zswiperthumbsauto.value.swiper;
		})
	}
</script>