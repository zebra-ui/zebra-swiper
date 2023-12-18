<template>
	<view class="demo-home">
		<view class="demo-home__title">
			<image mode="aspectFit" class="demo-home__image" src="../../static/logo.png" />
		</view>
		<view class="demo-home__desc">
			适配多端的高自定义轮播组件，全面对标swiperjs并兼容全端
		</view>
		<view v-for="(group, index) in list" :key="index">
			<demo-home-nav :group="group" />
		</view>
	</view>
</template>

<script setup>
	import DemoHomeNav from "../DemoHomeNav/DemoHomeNav.vue";
	const props = defineProps({
		list: {
			type: Array,
			default: function() {
				return [];
			},
		},
	})
</script>

<style scoped lang="scss">
	.demo-home {
		box-sizing: border-box;
		width: 100%;
		min-height: 100vh;
		padding: 92rpx 40rpx 40rpx;
		background-color: #e4ebf5;
	}

	.demo-home__title,
	.demo-home__desc {
		padding-left: 32rpx;
		font-weight: normal;
		line-height: 42rpx;
		user-select: none;
	}

	.demo-home__title {
		margin: 0 0 32rpx;
		font-size: 64rpx;
	}

	.demo-home__image,
	.demo-home__text {
		display: inline-block;
	}

	.demo-home__image {
		width: 500rpx;
		height: 152rpx;
	}

	.demo-home__text {
		margin-left: 32rpx;
		font-weight: 500;
	}

	.demo-home__title .demo-home--small {
		font-size: 48rpx;
	}

	.demo-home__desc {
		margin: 0 0 80rpx;
		color: rgba(69, 90, 100, 0.6);
		font-size: 28rpx;
	}
</style>