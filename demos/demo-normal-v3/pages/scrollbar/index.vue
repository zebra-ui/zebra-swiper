<template>
	<view class="demo-swiper">
		<demo-block title="基础用法">
			<z-swiper v-model="list" :options="options">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="自动播放">
			<z-swiper v-model="list" :options="optionsAutoplay">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="纵向">
			<z-swiper v-model="list" :custom-style="{height:'300rpx'}" :options="optionsVertical">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="自动隐藏">
			<z-swiper v-model="list" :options="optionsHide">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="可拖动">
			<z-swiper v-model="list" :options="optionsDraggable">
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
					scrollbar: {
						el: true
					},
				},
				optionsAutoplay: {
					scrollbar: {
						el: true
					},
					autoplay: true
				},
				optionsVertical: {
					scrollbar: {
						el: true
					},
					direction: 'vertical'
				},
				optionsHide: {
					scrollbar: {
						el: true,
						hide: true,
					},
				},
				optionsDraggable: {
					scrollbar: {
						el: true,
						draggable: true,
					},
				},
				list: data,
			}
		},
	}
</script>