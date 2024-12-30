<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper
        v-if="!!swiperInstance['thumbs']"
        :modules="modules"
        :thumbs="{ swiper: swiperInstance['thumbs'] }"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <view class="thumb-swiper">
        <z-swiper
          :custom-style="{ height: '100rpx' }"
          :modules="modules"
          watch-slides-progress
          :spaceBetween="10"
          :slidesPerView="4"
          freeMode
          @swiper="onSwiper($event, 'thumbs')"
        >
          <z-swiper-item v-for="item in list" :key="item.id">
            <demo-item :item="item" height="100rpx"></demo-item>
          </z-swiper-item>
        </z-swiper>
      </view>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper
        v-if="!!swiperInstance['thumbsLoop']"
        v-model:list="loopList"
        loop
        :modules="modules"
        :thumbs="{ swiper: swiperInstance['thumbsLoop'] }"
      >
        <z-swiper-item v-for="item in loopList" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <view class="thumb-swiper">
        <z-swiper
          v-model:list="loopListThumbs"
          loop
          :custom-style="{ height: '100rpx' }"
          :modules="modules"
          watch-slides-progress
          :spaceBetween="10"
          :slidesPerView="4"
          freeMode
          @swiper="onSwiper($event, 'thumbsLoop')"
        >
          <z-swiper-item v-for="item in loopListThumbs" :key="item.id">
            <demo-item :item="item" height="100rpx"></demo-item>
          </z-swiper-item>
        </z-swiper>
      </view>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from '../../common/js/data.js'
import { Thumb } from '@zebra-ui/swiper/modules'
import type { SwiperInterface } from '@zebra-ui/swiper/types'

const modules = ref([Thumb])
const list = ref([...data])
const loopList = ref([...data])
const loopListThumbs = ref([...data])

const swiperInstance = ref({})

const onSwiper = (swiper: SwiperInterface, name: string) => {
  swiperInstance.value[name] = swiper
}
</script>

<style lang="scss">
.thumb-swiper {
  margin-top: 10px;

  .swiper-slide {
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
