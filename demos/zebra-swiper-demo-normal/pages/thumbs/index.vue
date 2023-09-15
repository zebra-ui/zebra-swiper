<template>
	<view class="demo-swiper">
		<demo-block title="基础用法">
			<z-swiper ref="zSwiper" v-model="list" :options="options">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
			<z-swiper ref="zSwiperThumbs" :custom-style="{'margin-top':'10rpx'}" v-model="list" :options="optionsThumbs"
				@swiper="setThumbsSwiper">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item" height="150rpx"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="自动播放">
			<z-swiper ref="zSwiperAuto" v-model="list" :options="optionsAuto">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
			<z-swiper ref="zSwiperThumbsAuto" :custom-style="{'margin-top':'10rpx'}" v-model="list" :options="optionsThumbsAuto" @swiper="setThumbsAutoSwiper">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item" height="150rpx"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
	</view>
</template>

<script>
	import data from '../../common/js/data.js'
	export default {
		data() {
			return {
				optionsThumbs: {
					spaceBetween: 10,
					slidesPerView: 4,
					freeMode: true,
					watchSlidesProgress: true,
					thumbs: {
						use: true
					}
				},
				options: {
					spaceBetween: 10,
					thumbs: {
						swiper: true
					}
				},
				optionsThumbsAuto: {
					spaceBetween: 10,
					slidesPerView: 4,
					freeMode: true,
					watchSlidesProgress: true,
					thumbs: {
						use: true
					}
				},
				optionsAuto: {
					spaceBetween: 10,
					thumbs: {
						swiper: true
					},
					autoplay: true
				},
				list: data
			}
		},
		methods: {
			setThumbsSwiper() {
				this.$refs.zSwiper.swiper.on("beforeMount", (swiper) => {
					this.$refs.zSwiper.swiper.params.thumbs.swiper = this.$refs.zSwiperThumbs.swiper;
				})
			},
			setThumbsAutoSwiper() {
				this.$refs.zSwiperAuto.swiper.on("beforeMount", (swiper) => {
					this.$refs.zSwiperAuto.swiper.params.thumbs.swiper = this.$refs.zSwiperThumbsAuto.swiper;
				})
			},
		}
	}
</script>