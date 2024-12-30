<template>
  <view class="demo-swiper">
    <demo-block title="切换效果-卡片">
      <z-swiper
        effect="cards"
        :modules="modules"
        :custom-style="{ width: '500rpx' }"
      >
        <z-swiper-item
          v-for="item in list"
          :key="item.id"
          :custom-style="itemCustomStyle"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="关闭旋转">
      <z-swiper
        effect="cards"
        :cardsEffect="{ rotate: false }"
        :modules="modules"
        :custom-style="{ width: '500rpx' }"
      >
        <z-swiper-item
          v-for="item in list"
          :key="item.id"
          :custom-style="itemCustomStyle"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="偏移距离">
      <z-swiper
        effect="cards"
        :cardsEffect="{ perSlideOffset: 12 }"
        :modules="modules"
        :custom-style="{ width: '500rpx' }"
      >
        <z-swiper-item
          v-for="item in list"
          :key="item.id"
          :custom-style="itemCustomStyle"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="旋转角度">
      <z-swiper
        effect="cards"
        :cardsEffect="{ perSlideRotate: 10 }"
        :modules="modules"
        :custom-style="{ width: '500rpx' }"
      >
        <z-swiper-item
          v-for="item in list"
          :key="item.id"
          :custom-style="itemCustomStyle"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper
        v-model:list="loopList"
        loop
        effect="cards"
        :modules="modules"
        :custom-style="{ width: '500rpx' }"
      >
        <z-swiper-item
          v-for="item in loopList"
          :key="item.id"
          :custom-style="itemCustomStyle"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from '../../common/js/data.js'
import { EffectCards } from '@zebra-ui/swiper/modules'

const modules = ref([EffectCards])
const itemCustomStyle = {
  'border-radius': '24rpx'
}
const list = ref([...data])
const loopList = ref([...data])
</script>
