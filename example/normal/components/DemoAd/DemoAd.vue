<template>
	<view class="item">
		<ad-custom unit-id="adunit-c23c84e71ad855ba" ad-intervals="30"></ad-custom>
	</view>
</template>

<script setup>
	const props = defineProps({
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
	})

	const getStyle = () => {
		return {
			background: props.item.background,
			height: props.height,
			...props.customStyle
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		width: 100%;
	}
</style>