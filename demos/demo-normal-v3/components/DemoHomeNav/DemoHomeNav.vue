<template>
	<view class="demo-home-nav">
		<view class="demo-home-nav__title">{{ group.groupName }}</view>
		<view class="demo-home-nav__group">
			<view v-for="(item, index) in group.list" :key="index" class="demo-home-nav__block"
				@click="onClick(item.path)">
				<!-- <image class="image" :src="item.image"></image> -->
				<view class="block-card">
					<view class="block-card-icon">
						<view :class="[
                'iconfont',
                'card-icon-content',
                'zebra-icon-' + item.image,
              ]" />
						<view class="block-card-title">
							{{ item.title.split(" ")[1] }}
						</view>
						<view class="block-card-text">
							{{ item.title.split(" ")[0] }}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		group: {
			type: Object,
			default: function() {
				return null;
			},
		},
	})
	const onClick = (event) => {
		const url = `/pages${event}/index`;
		if (getCurrentPages().length > 9) {
			uni.redirectTo({
				url,
			});
		} else {
			uni.navigateTo({
				url,
			});
		}
	}
</script>

<style scoped lang="scss">
	@import "@/common/style/icon.css";

	.card-icon-content {
		color: #1874ca;
		font-size: 78rpx;
	}

	.demo-home-nav__title {
		margin: 0 32rpx;
		color: rgba(69, 90, 100, 0.6);
		font-size: 14px;
	}

	.demo-home-nav__group {
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx 0;
	}

	.demo-home-nav__block {
		width: 330rpx;
		height: 300rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		.block-card {
			width: 240rpx;
			height: 240rpx;
			box-shadow: 12rpx 12rpx 24rpx #bec8e4, -12rpx -12rpx 24rpx #fff;
			border-radius: 26rpx;
			background-color: #e4ebf5;
			box-sizing: border-box;
			padding: 30rpx;

			.block-card-title {
				margin-top: 20rpx;
				font-weight: bold;
				font-size: 36rpx;
				color: #1874ca;
			}

			.block-card-text {
				margin-top: 14rpx;
				font-size: 22rpx;
				color: rgba(69, 90, 100, 0.6);
			}
		}
	}
</style>