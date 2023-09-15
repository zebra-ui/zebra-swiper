<template>
	<view class="demo-swiper">
		<demo-block title="基础用法">
			<z-swiper v-model="list">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="监听事件">
			<z-swiper v-model="list" ref="zSwiper" @slideChange="onChange">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="纵向">
			<z-swiper v-model="list" :custom-style="{height:'300rpx'}" :options="options">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="切换速度">
			<z-swiper v-model="list" :options="{speed:2000}">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="禁用">
			<z-swiper v-model="list" :options="{enabled:false}">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="高度自适应">
			<z-swiper v-model="list" :options="{autoHeight:true}">
				<z-swiper-item>
					<demo-item :item="list[0]" height="200rpx"></demo-item>
				</z-swiper-item>
				<z-swiper-item>
					<demo-item :item="list[1]" height="400rpx"></demo-item>
				</z-swiper-item>
				<z-swiper-item>
					<demo-item :item="list[2]" height="500rpx"></demo-item>
				</z-swiper-item>
				<z-swiper-item>
					<demo-item :item="list[3]" height="300rpx"></demo-item>
				</z-swiper-item>
				<z-swiper-item>
					<demo-item :item="list[4]" height="100rpx"></demo-item>
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
				list: data,
				options: {
					direction: 'vertical',
					bubbling: false
				}
			}
		},
		methods: {
			onChange(swiper, index) {
				uni.showToast({
					title: '当前 swiper 索引：' + this.$refs.zSwiper.swiper.activeIndex,
					icon: 'none'
				})
			}
		}
	}
</script>