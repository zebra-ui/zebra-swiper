<template>
  <view class="demo-switcher">
    <demo-block title="基础用法">
      <z-swiper navigation :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="点击后隐藏">
      <z-swiper :navigation="{ hideOnClick: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="插槽自定义">
      <z-swiper navigation :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
        <template #navigation-prev>
          <view class="custom-switcher"> prev </view>
        </template>
        <template #navigation-next>
          <view class="custom-switcher"> next </view>
        </template>
      </z-swiper>
    </demo-block>
    <demo-block title="完全自定义">
      <z-swiper v-model:list="loopList" loop @swiper="onSwiper">
        <z-swiper-item v-for="item in loopList" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <view class="custom-switcher-group">
        <button
          type="primary"
          size="mini"
          class="custom-switcher-group-button"
          @click="prev()"
        >
          prev
        </button>
        <button
          type="primary"
          size="mini"
          class="custom-switcher-group-button"
          @click="next()"
        >
          next
        </button>
      </view>
    </demo-block>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import data from '../../common/js/data.js'
import { Navigation } from '@zebra-ui/swiper/modules'
const list = ref([...data])
const loopList = ref([...data])
const swiperInstance = ref(null)
const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}
const prev = () => {
  swiperInstance.value.slidePrev()
}
const next = () => {
  swiperInstance.value.slideNext()
}
const modules = ref([Navigation])
</script>

<style scoped lang="scss">
.demo-switcher {
  .image {
    width: 100%;
    height: 300rpx;
  }

  .custom-switcher {
    display: flex;
    align-items: center;
  }

  .custom-switcher-group {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20rpx;
  }
}
</style>
