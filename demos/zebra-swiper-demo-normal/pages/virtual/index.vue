<template>
	<view class="demo-swiper">
		<demo-block title="基础用法-数据截断">
			<z-swiper ref="zSwiper" v-model="list" :options="options">
				<z-swiper-item v-for="(item,index) in list" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
		<demo-block title="基础用法-保留结构">
			<z-swiper ref="zSwiper" v-model="listKeep" :options="optionsKeep">
				<z-swiper-item v-for="(item,index) in listKeep" :key="index">
					<demo-item :item="item"></demo-item>
				</z-swiper-item>
			</z-swiper>
		</demo-block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {
					virtual: {
						type: 'cut',
						addSlidesBefore: 1,
						addSlidesAfter: 1,
						slides: []
					},
				},
				optionsKeep: {
					virtual: {
						type: 'keep',
						addSlidesBefore: 1,
						addSlidesAfter: 1,
						slides: []
					},
				},
				list: [],
				listKeep: [],
				preList: [],
				colorList: ['#7ED321', '#2183D3', '#2128D3', '#431058', '#1E835A', '#B1397B', '#B36021']
			}
		},
		mounted() {
			let list = [];
			for (var i = 1; i < 1000; i += 1) {
				const randomValue = Math.floor(Math.random() * 7);
				list.push({
					background: this.colorList[randomValue],
					text: `slide${i}`
				})
			}
			this.preList = [...list];
			this.options.virtual.slides = [...list];
			this.optionsKeep.virtual.slides = [...list];
		}
	}
</script>