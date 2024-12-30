<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper v-model:list="list" loop>
        <z-swiper-item v-for="(item, index) in list" :key="index">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="自动播放">
      <z-swiper v-model:list="listAutoplay" loop autoplay :modules="modules">
        <z-swiper-item v-for="item in listAutoplay" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autoplay } from '@zebra-ui/swiper/modules'
import data from '../../common/js/data.js'
const modules = ref([Autoplay])
const list = ref([...data])
const listAutoplay = ref([...data])
</script>
