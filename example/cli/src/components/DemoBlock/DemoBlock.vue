<template>
  <view class="zebra-doc-demo-block">
    <view v-if="props.title" class="zebra-doc-demo-block__title">{{
      props.title
    }}</view>
    <view v-if="props.card" class="zebra-doc-demo-block__card">
      <slot />
    </view>
    <slot v-else />
  </view>
</template>

<script setup>
const props = defineProps({
  card: {
    type: Boolean,
    default: true
  },
  title: String
})
</script>

<style lang="scss">
@use '../../common/style/var';

.zebra-doc-demo-block {
  margin: 30rpx;
  overflow: hidden;
  background: #e4ebf5;
  border-radius: 10rpx;
  box-shadow:
    10rpx 10rpx 20rpx #cbd1da,
    -10rpx -10rpx 20rpx #fdffff;

  &__title {
    padding: 30rpx;
    margin: 0;
    font-size: 28rpx;
    font-weight: normal;
    line-height: 32rpx;
    color: var.$zebra-doc-text-light-blue;
    border-bottom: 2rpx solid var.$zebra-doc-background-color;
  }

  &__card {
    padding: 30rpx;
  }

  &__title + &__card {
    margin-top: 0;
  }
}
</style>
