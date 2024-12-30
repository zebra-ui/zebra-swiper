<template>
  <view class="demo-swiper">
    <demo-block title="切换效果-3D翻转">
      <z-swiper effect="flip" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="纵向">
      <z-swiper
        :custom-style="{ height: '300rpx' }"
        direction="vertical"
        effect="flip"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper v-model:list="loopList" loop effect="flip" :modules="modules">
        <z-swiper-item v-for="item in loopList" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from '../../common/js/data.js'
import { EffectFlip } from '@zebra-ui/swiper/modules'

const modules = ref([EffectFlip])
const list = ref([...data])
const loopList = ref([...data])
</script>
