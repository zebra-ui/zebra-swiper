<template>
	<view class="z-swiper-loading-wrapper">
		<view class="container z-swiper-loading">
			<view class="shape shape1"></view>
			<view class="shape shape2"></view>
			<view class="shape shape3"></view>
			<view class="shape shape4"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'z-swiper-loading',
		data() {
			return {

			};
		}
	}
</script>
<style lang="scss" scoped>
	.z-swiper-loading-wrapper {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}


	.container {
		width: 30px;
		height: 30px;
		position: relative;
	}

	.container.z-swiper-loading {
		-webkit-animation: rotation 1s infinite;
		animation: rotation 1s infinite;
	}

	.container.z-swiper-loading .shape {
		width: 12px;
		height: 12px;
		border-radius: 2px;
	}

	.container .shape {
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 1px;
	}

	.container .shape.shape1 {
		left: 0;
		background-color: #5C6BC0;
	}

	.container .shape.shape2 {
		right: 0;
		background-color: #8BC34A;
	}

	.container .shape.shape3 {
		bottom: 0;
		background-color: #FFB74D;
	}

	.container .shape.shape4 {
		bottom: 0;
		right: 0;
		background-color: #F44336;
	}


	.z-swiper-loading .shape1 {
		-webkit-animation: animation6shape1 2s linear 0s infinite normal;
		animation: animation6shape1 2s linear 0s infinite normal;
	}

	@-webkit-keyframes animation6shape1 {
		0% {
			-webkit-transform: translate(0, 0);
			transform: translate(0, 0);
		}

		25% {
			-webkit-transform: translate(0, 18px);
			transform: translate(0, 18px);
		}

		50% {
			-webkit-transform: translate(18px, 18px);
			transform: translate(18px, 18px);
		}

		75% {
			-webkit-transform: translate(18px, 0);
			transform: translate(18px, 0);
		}
	}

	@keyframes animation6shape1 {
		0% {
			-webkit-transform: translate(0, 0);
			transform: translate(0, 0);
		}

		25% {
			-webkit-transform: translate(0, 18px);
			transform: translate(0, 18px);
		}

		50% {
			-webkit-transform: translate(18px, 18px);
			transform: translate(18px, 18px);
		}

		75% {
			-webkit-transform: translate(18px, 0);
			transform: translate(18px, 0);
		}
	}

	.z-swiper-loading .shape2 {
		-webkit-animation: animation6shape2 2s linear 0s infinite normal;
		animation: animation6shape2 2s linear 0s infinite normal;
	}

	@-webkit-keyframes animation6shape2 {
		0% {
			-webkit-transform: translate(0, 0);
			transform: translate(0, 0);
		}

		25% {
			-webkit-transform: translate(-18px, 0);
			transform: translate(-18px, 0);
		}

		50% {
			-webkit-transform: translate(-18px, 18px);
			transform: translate(-18px, 18px);
		}

		75% {
			-webkit-transform: translate(0, 18px);
			transform: translate(0, 18px);
		}
	}

	@keyframes animation6shape2 {
		0% {
			-webkit-transform: translate(0, 0);
			transform: translate(0, 0);
		}

		25% {
			-webkit-transform: translate(-18px, 0);
			transform: translate(-18px, 0);
		}

		50% {
			-webkit-transform: translate(-18px, 18px);
			transform: translate(-18px, 18px);
		}

		75% {
			-webkit-transform: translate(0, 18px);
			transform: translate(0, 18px);
		}
	}

	.z-swiper-loading .shape3 {
		-webkit-animation: animation6shape3 2s linear 0s infinite normal;
		animation: animation6shape3 2s linear 0s infinite normal;
	}

	@-webkit-keyframes animation6shape3 {
		0% {
			-webkit-transform: translate(0, 0);
			transform: translate(0, 0);
		}

		25% {
			-webkit-transform: translate(18px, 0);
			transform: translate(18px, 0);
		}

		50% {
			-webkit-transform: translate(18px, -18px);
			transform: translate(18px, -18px);
		}

		75% {
			-webkit-transform: translate(0, -18px);
			transform: translate(0, -18px);
		}
	}

	@keyframes animation6shape3 {
		0% {
			-webkit-transform: translate(0, 0);
			transform: translate(0, 0);
		}

		25% {
			-webkit-transform: translate(18px, 0);
			transform: translate(18px, 0);
		}

		50% {
			-webkit-transform: translate(18px, -18px);
			transform: translate(18px, -18px);
		}

		75% {
			-webkit-transform: translate(0, -18px);
			transform: translate(0, -18px);
		}
	}

	.z-swiper-loading .shape4 {
		-webkit-animation: animation6shape4 2s linear 0s infinite normal;
		animation: animation6shape4 2s linear 0s infinite normal;
	}

	@-webkit-keyframes animation6shape4 {
		0% {
			-webkit-transform: translate(0, 0);
			transform: translate(0, 0);
		}

		25% {
			-webkit-transform: translate(0, -18px);
			transform: translate(0, -18px);
		}

		50% {
			-webkit-transform: translate(-18px, -18px);
			transform: translate(-18px, -18px);
		}

		75% {
			-webkit-transform: translate(-18px, 0);
			transform: translate(-18px, 0);
		}
	}

	@keyframes animation6shape4 {
		0% {
			-webkit-transform: translate(0, 0);
			transform: translate(0, 0);
		}

		25% {
			-webkit-transform: translate(0, -18px);
			transform: translate(0, -18px);
		}

		50% {
			-webkit-transform: translate(-18px, -18px);
			transform: translate(-18px, -18px);
		}

		75% {
			-webkit-transform: translate(-18px, 0);
			transform: translate(-18px, 0);
		}
	}
</style>
