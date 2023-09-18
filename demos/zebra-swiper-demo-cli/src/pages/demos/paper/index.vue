<template>
	<view class="paper-body">
		<view class="paper-wrapper">
			<view class="paper-onboarding">
				<view class="paper-onboarding-fills" :style="[fillsStyle]">
					<view v-for="(item,index) in list" :key="index" class="paper-onboarding-fill"
						:style="[{backgroundColor:item.bgColor},fillStyleList[index].fillStyle]">

					</view>
				</view>
				<z-swiper ref="zSwiper" v-model="list" :options="options" @beforeInit="init">
					<z-swiper-item v-for="(item,index) in list" :key="index">
						<view class="slide-inner">
							<image class="slide-image" :src="item.url" />
							<view class="slide-title">{{item.title}}</view>
							<view class="slide-text">{{item.text}}</view>
						</view>
					</z-swiper-item>
				</z-swiper>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					bgColor: "#6002EE",
					fillStyle: {},
					url: require("../../../static/images/banks.svg"),
					title: "Banks",
					text: "Banks are financial institutions that provide a wide range of financial services, including savings accounts, loans, investment opportunities, and more."
				}, {
					bgColor: "#008386",
					fillStyle: {},
					url: require("../../../static/images/hotels.svg"),
					title: "Hotels",
					text: "Hotels are establishments that offer accommodation, amenities, and services to travelers and guests, providing a comfortable and convenient stay away from home."
				}, {
					bgColor: "#a41fa8",
					fillStyle: {},
					url: require("../../../static/images/business.svg"),
					title: "Business",
					text: "Business involves activities aimed at creating products or services, generating profits, and contributing to the economy."
				}, {
					bgColor: "#007700",
					fillStyle: {},
					url: require("../../../static/images/checkmark.svg"),
					title: "Done",
					text: "Now you can continue using it."
				}],
				options: {
					effect: 'creative',
					direction: 'vertical',
					speed: 500,
					resistanceRatio: 0,
					grabCursor: true,
					pagination: {
						el: true,
						clickable: true,
						dynamicBullets: true,
					},
					creativeEffect: {
						progressMultiplier: 2,
						prev: {
							opacity: 0,
							// translate: direction === 'vertical' ? [0, -128, 0] : [-128, 0, 0],
							translate: [0, -128, 0],
						},
						next: {
							opacity: 0,
							// translate: direction === 'vertical' ? [0, 128, 0] : [128, 0, 0],
							translate: [0, 128, 0],
						},
					},
				},
				fillsStyle: {},
				fillStyleList: [{
						fillStyle: {}
					},
					{
						fillStyle: {}
					},
					{
						fillStyle: {}
					},
					{
						fillStyle: {}
					},
				],
			}
		},
		mounted() {
			this.calcFillSize('vertical');
		},
		methods: {
			init() {
				this.$refs.zSwiper.swiper.on("setTranslate", (swiper) => {
					this.onTranslate(swiper)
				});
				this.$refs.zSwiper.swiper.on("setTransition", (swiper, duration) => {
					this.onTransition(swiper, duration)
				});
			},
			onTranslate(swiper) {
				const {
					slides
				} = swiper;

				for (let i = 0; i < slides.length; i += 1) {
					const slideEl = slides[i];
					const slideProgress = slideEl.progress;
					const progress = 1 - Math.max(Math.min(Math.abs(slideProgress), 1), 0);
					if (slideProgress < 0) {
						this.$set(this.fillStyleList[i].fillStyle, 'transform', `scale(${progress})`);
					} else {
						this.$set(this.fillStyleList[i].fillStyle, 'transform', `scale(1)`);
					}
				}
			},
			onTransition(swiper, duration) {
				this.fillStyleList.forEach((fillEl) => {
					this.$set(fillEl.fillStyle, 'transitionDuration', `${duration}ms`);
				});
			},
			calcFillSize(direction) {
				const res = uni.getSystemInfoSync();
				let offsetWidth = res.screenWidth;
				let offsetHeight = res.screenHeight;
				const radius = ((offsetWidth / 2) ** 2 + (offsetHeight / 2) ** 2) ** 0.5;
				this.fillsStyle = {
					width: `${radius * 4}px`,
					height: `${radius * 4}px`,
					marginLeft: direction === 'vertical' ? `-${radius * 2}px` : `-${radius}px`,
					marginTop: direction === 'vertical' ? `-${radius}px` : `-${radius * 2}px`
				};
			}
		}
	}
</script>

<style lang="scss" scoped>
	.paper-body {
		position: relative;
		height: 100%;
		margin: 0;
		padding: 0;
		background: #000;
		color: #fff;
		line-height: 1.5;
		font-family: -apple-system, system-ui, 'Helvetica Neue', Helvetica, Arial,
			'Segoe UI', Roboto, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		.paper-wrapper {
			height: 100vh;

			.slide-inner {
				padding: 16px;
			}

			.slide-image {
				width: 128px;
				height: 128px;
			}

			.slide-title {
				font-size: 28px;
				font-weight: bold;
				margin: 24px 0;
			}

			.slide-text {
				font-size: 18px;
			}


			.paper-onboarding {
				width: 100%;
				height: 100%;
				position: relative;
				overflow: hidden;
				--swiper-theme-color: #fff;

				.swiper-pagination-bullet {
					background: #fff;
				}


				::v-deep .swiper {
					width: 100%;
					height: 100%;
					z-index: 1;
				}


				.slide-inner {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					width: 100%;
					height: 100%;
					box-sizing: border-box;
					padding: 16px;
					text-align: center;
				}

				.paper-onboarding-fills {
					left: 50%;
					top: 50%;
					z-index: 0;
				}

				.paper-onboarding-fills,
				.paper-onboarding-fill {
					position: absolute;
					pointer-events: none;
					width: 100%;
					height: 100%;
				}

				.paper-onboarding-fill {
					left: 0;
					top: 0;
					transform-origin: center center;
					border-radius: 50%;
				}
			}
		}
	}
</style>