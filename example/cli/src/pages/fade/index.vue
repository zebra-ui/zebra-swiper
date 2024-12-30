<template>
  <view class="demo-swiper">
    <demo-block title="切换效果-淡入">
      <z-swiper effect="fade" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="交叉淡入淡出">
      <z-swiper
        effect="fade"
        :fadeEffect="{ crossFade: true }"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper v-model:list="loopList" loop effect="fade" :modules="modules">
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
import { EffectFade } from '@zebra-ui/swiper/modules'

const modules = ref([EffectFade])
const list = ref([...data])
const loopList = ref([...data])
</script>
