<template>
	<view class="item" :style="[getStyle()]">
		{{item.text}}
	</view>
</template>

<script>
	export default {
		name: "demo-item",
		props: {
			item: {
				type: [Object, String],
				default: () => {}
			},
			height: {
				type: String,
				default: '300rpx'
			},
			customStyle: {
				type: Object,
				default: () => {}
			}
		},
		methods: {
			getStyle() {
				return {
					background: this.item.background,
					height: this.height,
					...this.customStyle
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		color: #ffffff;
	}
</style>