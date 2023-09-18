<template>
	<view class="demo-swiper">
		<demo-block title="基础用法">
			<z-swiper v-model="list" :options="{loop : true}">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="自动播放">
			<z-swiper v-model="listAutoplay" :options="{loop : true,autoplay:true}">
				<z-swiper-item v-for="(item,index) in listAutoplay" :key="index">
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
				list: data,
				listAutoplay: data,
			}
		},
	}
</script>