<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper
        :modules="modules"
        :controller="{ control: swiperInstance['control'] }"
      >
        <z-swiper-item v-for="item in list1" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        :modules="modules"
        @swiper="onSwiper($event, 'control')"
      >
        <z-swiper-item v-for="item in list2" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="反向">
      <z-swiper
        :modules="modules"
        :controller="{ control: swiperInstance['inverse'], inverse: true }"
      >
        <z-swiper-item v-for="item in list1Inverse" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        :modules="modules"
        @swiper="onSwiper($event, 'inverse')"
      >
        <z-swiper-item v-for="item in list2Inverse" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="双向控制">
      <z-swiper
        :modules="modules"
        :controller="{ control: swiperInstance['example2'] }"
        @swiper="onSwiper($event, 'example1')"
      >
        <z-swiper-item v-for="item in list1" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        :modules="modules"
        :controller="{ control: swiperInstance['example1'] }"
        @swiper="onSwiper($event, 'example2')"
      >
        <z-swiper-item v-for="item in list1" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from '../../common/js/data.js'
import { Controller } from '@zebra-ui/swiper/modules'
import type { SwiperInterface } from '@zebra-ui/swiper/types'
const list1 = ref([...data])
const list2 = ref([...data])
const list1Inverse = ref([...data])
const list2Inverse = ref([...data])

const modules = ref([Controller])

const swiperInstance = ref({})

const onSwiper = (swiper: SwiperInterface, name: string) => {
  swiperInstance.value[name] = swiper
}
</script>
