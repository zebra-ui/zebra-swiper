<template>
	<view class="content">
		<view class="content-item" v-for="(item, index) in list" :key="index" @click="goPage(item)">{{ item.text }}
		</view>
	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue'
	const list = ref([])

	onMounted(() => {
		list.value = [{
			url: '/pages/virtual/normal/index',
			text: '默认'
		}, {
			url: '/pages/virtual/carousel/index',
			text: '轮播块'
		}, {
			url: '/pages/virtual/fade/index',
			text: 'fade'
		}]
	})

	const goPage = (item) => {
		uni.navigateTo({
			url: item.url
		})
	}
</script>

<style lang="scss">
	.content {
		padding: 0 30rpx;

		.content-item {
			margin-top: 30rpx;
			background-color: rgb(248, 248, 248);
			padding: 30rpx;
		}
	}
</style>