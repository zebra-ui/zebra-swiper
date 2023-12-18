<template>
	<view class="travel-body">
		<view class="travel-wrapper">
			<view class="travel-slider">
				<!-- Rotating Planet -->
				<view class="travel-slider-planet" :style="[planetStyle]">
					<image class="planet-image" src="../../../static/images/earth.svg" mode="heightFix" />
					<view :class="['travel-slider-cities',`travel-slider-cities-${list.length > 4 ? '8' : '4'}`]">
						<image class="cities-image" src="../../../static/images/usa.svg" />
						<image class="cities-image" src="../../../static/images/england.svg" />
						<image class="cities-image" src="../../../static/images/france.svg" />
						<image class="cities-image" src="../../../static/images/italy.svg" />
						<image class="cities-image" src="../../../static/images/russia.svg" />
						<image class="cities-image" src="../../../static/images/egypt.svg" />
						<image class="cities-image" src="../../../static/images/india.svg" />
						<image class="cities-image" src="../../../static/images/japan.svg" />
					</view>
				</view>
				<!-- Swiper -->
				<z-swiper ref="zswiper" v-model="list" :custom-style="swiperStyle" :options="options" @swiper="init">
					<z-swiper-item v-for="(item,index) in list" :key="index" :custom-style="itemStyle">
						<image :src="item.url" class="travel-slider-bg-image" />
						<view class="travel-slider-content">
							<view class="travel-slider-title">{{item.title}}</view>
							<view class="travel-slider-subtitle">{{item.subTitle}}</view>
						</view>
					</z-swiper-item>
				</z-swiper>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	const zswiper = ref()
	const list = ref([{
		url: "../../../static/images/usa.jpg",
		title: "United States",
		subTitle: "8,295 properties"
	}, {
		url: "../../../static/images/england.jpg",
		title: "England",
		subTitle: "1,110 properties"
	}, {
		url: "../../../static/images/france.jpg",
		title: "France",
		subTitle: "314 properties"
	}, {
		url: "../../../static/images/italy.jpg",
		title: "Italy",
		subTitle: "1,200 properties"
	}, {
		url: "../../../static/images/russia.jpg",
		title: "Russia",
		subTitle: "12,231 properties"
	}, {
		url: "../../../static/images/egypt.jpg",
		title: "Egypt",
		subTitle: "505 properties"
	}, {
		url: "../../../static/images/india.jpg",
		title: "India",
		subTitle: "2,300 properties"
	}, {
		url: "../../../static/images/japan.jpg",
		title: "Japan",
		subTitle: "1,700 properties"
	}])
	const options = {
		speed: 600,
		grabCursor: true,
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 24,
		watchSlidesProgress: true
	}
	const planetStyle = ref({})
	const itemStyle = {
		'width': 'calc(100vw * 0.8)',
		'max-width': '640px',
		'box-sizing': 'border-box',
		'position': 'relative'
	}
	const swiperStyle = {
		'height': '300px',
		'padding-top': '64px',
		'padding-bottom': '64px'
	}
	const init = () => {
		zswiper.value.swiper.on("progress", (s, progress) => {
			const max =
				s.slides.length > 4 ? 360 - (8 - s.slides.length + 1) * 45 : 270;
			planetStyle.value.transform = `translate(-50%, -50%) rotate(${
			          max * -progress
			        }deg)`
		})
		zswiper.value.swiper.on("setTransition", (s, duration) => {
			const max =
				s.slides.length > 4 ? 360 - (8 - s.slides.length + 1) * 45 : 270;
			planetStyle.value.transitionDuration = `${duration}ms`
		})
	}
</script>

<style lang="scss" scoped>
	.travel-body {
		position: relative;
		height: 100vh;
		margin: 0;
		padding: 0;
		background: #ccc;
		color: #000;
		line-height: 1.5;
		font-family: -apple-system, system-ui, 'Helvetica Neue', Helvetica, Arial,
			'Segoe UI', Roboto, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-image: linear-gradient(to bottom, #6c08ca, #fff);
	}

	.travel-wrapper {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.travel-slider {
		position: relative;
		box-sizing: border-box;
		width: 100%;
		margin: 0 auto;

		// ::v-deep .swiper {
		// 	height: 300px;
		// 	padding-top: 64px;
		// 	padding-bottom: 64px;
		// }

		// ::v-deep .swiper-slide {

		// }

		&-bg-image {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
			left: 0;
			top: 0;
			border-radius: 16px;
			box-sizing: border-box;
			box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5),
				0px -1px 0px rgba(255, 255, 255, 0.5);
		}

		&-content {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			padding: 32px;
			box-sizing: border-box;
			color: #fff;
			text-shadow: 1px 1px 1px #000;
			line-height: 1.25;
			border-radius: 0 0 16px 16px;
			background-image: linear-gradient(to top,
					rgba(0, 0, 0, 0.5),
					rgba(0, 0, 0, 0));
		}

		&-title {
			font-weight: bold;
			font-size: 32px;
		}

		&-subtitle {
			font-size: 18px;
		}

		&-planet {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			height: 100%;

			>.planet-image {
				display: block;
				width: auto;
				height: 100%;
				margin: 0 auto;
			}
		}

		&-cities {
			.cities-image {
				--travel-slider-planet-size: calc(300px + 64px * 2);
				--travel-slider-image-rotate: 0deg;
				--travel-slider-image-scale: 1;
				position: absolute;
				bottom: 95%;
				left: 50%;
				transform: translateX(-50%) scale(var(--travel-slider-image-scale)) rotate(var(--travel-slider-image-rotate));
				transform-origin: center calc(var(--travel-slider-planet-size) / 2 * 0.95 * 0.95 + 120px * 1);
				height: 120px;
				width: 120px;
				object-position: center bottom;
				object-fit: contain;
			}

			&-8 {
				.cities-image:nth-child(2) {
					--travel-slider-image-rotate: 45deg;
				}

				.cities-image:nth-child(3) {
					--travel-slider-image-rotate: 90deg;
				}

				.cities-image:nth-child(4) {
					--travel-slider-image-rotate: 135deg;
				}

				.cities-image:nth-child(5) {
					--travel-slider-image-rotate: 180deg;
				}

				.cities-image:nth-child(6) {
					--travel-slider-image-rotate: 225deg;
				}

				.cities-image:nth-child(7) {
					--travel-slider-image-rotate: 270deg;
				}

				.cities-image:nth-child(8) {
					--travel-slider-image-rotate: 315deg;
				}
			}

			&-4 {
				img:nth-child(2) {
					--travel-slider-image-rotate: 90deg;
				}

				img:nth-child(3) {
					--travel-slider-image-rotate: 180deg;
				}

				img:nth-child(4) {
					--travel-slider-image-rotate: 270deg;
				}
			}
		}
	}

	.travel-slider:after {
		content: '';
		position: absolute;
		height: 50vh;
		top: 50%;
		width: 100%;
		left: 0;
		background-image: linear-gradient(to bottom,
				rgba(255, 255, 255, 0),
				#b0a5d1 50%);
	}
</style>