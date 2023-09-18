<template>
	<demo-home :list="list" />
</template>

<script>
	import config from '../../common/js/config.js';
	import DemoHome from '../../components/DemoHome/DemoHome.vue';
	export default {
		components: {
			DemoHome
		},
		data() {
			return {
				list: config
			}
		},
	}
</script>


<style scoped lang="scss">
	.demo-home {
		box-sizing: border-box;
		width: 100%;
		min-height: 100vh;
		padding: 92rpx 40rpx 40rpx;
		background: linear-gradient(131.16deg, rgba(240, 242, 247, 1) 0%, rgba(255, 250, 250, 1) 100%, rgba(216, 220, 230, 1) 100%);
	}

	.demo-home__title,
	.demo-home__desc {
		padding-left: 32rpx;
		font-weight: normal;
		line-height: 1;
		user-select: none;
	}

	.demo-home__title {
		margin: 0 0 32rpx;
		font-size: 64rpx;
	}

	.demo-home__image,
	.demo-home__text {
		display: inline-block;
		vertical-align: middle;
	}

	.demo-home__image {
		width: 64rpx;
		height: 64rpx;
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
