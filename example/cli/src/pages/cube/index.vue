<template>
  <view class="demo-swiper">
    <demo-block title="切换效果-方块">
      <z-swiper effect="cube" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="阴影偏离">
      <z-swiper
        effect="cube"
        :cubeEffect="{ shadowOffset: 0 }"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="阴影缩放">
      <z-swiper
        effect="cube"
        :cubeEffect="{ shadowScale: 0.3 }"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper v-model:list="loopList" loop effect="cube" :modules="modules">
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
import { EffectCube } from '@zebra-ui/swiper/modules'

const modules = ref([EffectCube])
const list = ref([...data])
const loopList = ref([...data])
</script>
