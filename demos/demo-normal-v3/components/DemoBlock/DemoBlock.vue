<template>
	<view class="zebra-doc-demo-block">
		<view v-if="title" class="zebra-doc-demo-block__title">{{ title }}</view>
		<view v-if="card" class="zebra-doc-demo-block__card">
			<slot />
		</view>
		<slot v-else />
	</view>
</template>

<script>
	export default {
		name: "demo-block",
		props: {
			card: {
				type: Boolean,
				default: true,
			},
			title: String,
		},
	};
</script>

<style lang="scss">
	@import "../../common/style/var";

	.zebra-doc-demo-block {
		margin: 30rpx;
		border-radius: 10rpx;
		overflow: hidden;
		background: #e4ebf5;
		box-shadow: 10rpx 10rpx 20rpx #cbd1da, -10rpx -10rpx 20rpx #fdffff;

		&__title {
			margin: 0;
			padding: 30rpx;
			color: $zebra-doc-text-light-blue;
			font-weight: normal;
			font-size: 28rpx;
			line-height: 32rpx;
			border-bottom: 2rpx solid $zebra-doc-background-color;
		}

		&__card {
			padding: 30rpx;
		}

		&__title+&__card {
			margin-top: 0;
		}
	}
</style>