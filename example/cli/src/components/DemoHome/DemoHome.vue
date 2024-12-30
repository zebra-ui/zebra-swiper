<template>
  <view class="demo-home">
    <view class="demo-home__title">
      <image
        mode="aspectFit"
        class="demo-home__image"
        src="../../static/logo.png"
      />
      <view class="title-content"> ZebraSwiper </view>
    </view>
    <view class="demo-home__desc">
      一款专为多端设计的高性能轮播组件库，支持多种复杂的 3D 轮播效果。
    </view>
    <view v-for="(group, index) in props.list" :key="index">
      <demo-home-nav :group="group" />
    </view>
  </view>
</template>

<script setup>
import DemoHomeNav from '../DemoHomeNav/DemoHomeNav.vue'
const props = defineProps({
  list: {
    type: Array,
    default: function () {
      return []
    }
  }
})
</script>

<style scoped lang="scss">
.demo-home {
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 92rpx 40rpx 40rpx;
  background-color: #e4ebf5;
}

.demo-home__title,
.demo-home__desc {
  padding-left: 32rpx;
  font-weight: normal;
  line-height: 48rpx;
  user-select: none;
}

.demo-home__title {
  display: flex;
  align-items: center;
  margin: 0 0 32rpx;
  font-size: 62rpx;

  .title-content {
    font-weight: bold;
    color: #1874ca;
  }
}

.demo-home__image,
.demo-home__text {
  display: inline-block;
}

.demo-home__image {
  width: 200rpx;
  height: 200rpx;
}

.demo-home__text {
  margin-left: 32rpx;
  font-weight: 500;
}

.demo-home__title .demo-home--small {
  font-size: 48rpx;
}

.demo-home__desc {
  margin: 0 0 80rpx;
  font-size: 28rpx;
  color: rgb(69 90 100 / 60%);
}
</style>
