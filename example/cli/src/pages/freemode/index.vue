<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper freeMode :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="关闭惯性">
      <z-swiper :freeMode="{ momentum: false }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="反弹强度">
      <z-swiper :freeMode="{ momentumBounceRatio: 5 }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="释放后滑动距离">
      <z-swiper :freeMode="{ momentumRatio: 5 }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="释放后滑动速度">
      <z-swiper :freeMode="{ momentumVelocityRatio: 5 }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="贴合边缘">
      <z-swiper :freeMode="{ sticky: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FreeMode } from '@zebra-ui/swiper/modules'
import data from '../../common/js/data.js'
const list = ref([...data])
const modules = ref([FreeMode])
</script>
