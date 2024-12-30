<template>
  <view class="demo-swiper">
    <demo-block title="切换效果-3D流">
      <z-swiper effect="coverflow" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="搭配轮播块">
      <z-swiper
        effect="coverflow"
        centeredSlides
        :slidesPerView="2"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title=" Z 轴偏移深度">
      <z-swiper
        effect="coverflow"
        centeredSlides
        :slidesPerView="2"
        :coverflowEffect="{ depth: 300 }"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="旋转角度">
      <z-swiper
        effect="coverflow"
        centeredSlides
        :slidesPerView="2"
        :coverflowEffect="{ rotate: 10 }"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="缩放">
      <z-swiper
        effect="coverflow"
        centeredSlides
        :slidesPerView="2"
        :coverflowEffect="{ scale: 0.5 }"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="拉伸距离">
      <z-swiper
        effect="coverflow"
        centeredSlides
        :slidesPerView="2"
        :coverflowEffect="{ stretch: 20 }"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper
        v-model:list="loopList"
        loop
        centeredSlides
        effect="coverflow"
        :slidesPerView="3"
        :modules="modules"
      >
        <z-swiper-item v-for="(item, index) in loopList" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { EffectCoverflow } from '@zebra-ui/swiper/modules'

import data from '../../common/js/data.js'

const modules = ref([EffectCoverflow])

const list = ref([...data])
const loopList = ref([...data])
</script>
