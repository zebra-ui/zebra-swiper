<template>
  <view class="demo-swiper" style="

--swiper-scrollbar-size: 20rpx">
    <demo-block title="基础用法">
      <z-swiper scrollbar :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="纵向">
      <z-swiper
        direction="vertical"
        :custom-style="{ height: '300rpx' }"
        scrollbar
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="自动隐藏">
      <z-swiper :scrollbar="{ hide: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="可拖动">
      <z-swiper :scrollbar="{ draggable: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from '../../common/js/data.js'
import { Scrollbar } from '@zebra-ui/swiper/modules'
const modules = ref([Scrollbar])
const list = ref([...data])
</script>
