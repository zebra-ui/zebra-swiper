<template>
	<view class="demo-swiper">
		<demo-block title="数量">
			<z-swiper v-model="list" :options="{slidesPerView : 2}">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="自适应">
			<z-swiper v-model="list" :options="{slidesPerView : 'auto',centeredSlides: true,spaceBetween: 14}">
				<z-swiper-item v-for="(item,index) in list" :key="index" :custom-style="{width:'500rpx'}">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="居中">
			<z-swiper v-model="list" :options="{slidesPerView : 2,centeredSlides : true}">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="贴合边缘">
			<z-swiper v-model="list" :options="{slidesPerView : 3,centeredSlides : true,centeredSlidesBounds: true}">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="分组">
			<z-swiper v-model="list" :options="{slidesPerView : 3, slidesPerGroup : 3}">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="距离">
			<z-swiper v-model="list" :options="{slidesPerView : 3,spaceBetween : 20}">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
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
				options: {
					direction: 'vertical'
				},
				list: data
			}
		}
	}
</script>