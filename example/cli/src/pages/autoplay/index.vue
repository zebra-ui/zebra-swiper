<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper autoplay :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="时间间隔">
      <z-swiper :autoplay="{ delay: 1000 }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="自动停止">
      <z-swiper :autoplay="{ stopOnLastSlide: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper v-model:list="loopList" autoplay loop :modules="modules">
        <z-swiper-item v-for="item in loopList" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="反向">
      <z-swiper :autoplay="{ reverseDirection: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autoplay } from '@zebra-ui/swiper/modules'
import type { SwiperModule } from '@zebra-ui/swiper/types/shared'
import data from '../../common/js/data.js'
const list = ref([...data])
const loopList = ref([...data])
const modules = ref<SwiperModule[]>([Autoplay])
</script>
