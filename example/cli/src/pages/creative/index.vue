<template>
  <view class="demo-swiper">
    <demo-block title="切换效果-创意性">
      <z-swiper effect="creative" :creativeEffect="options1" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        effect="creative"
        :creativeEffect="options2"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        effect="creative"
        :creativeEffect="options3"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        effect="creative"
        :creativeEffect="options4"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        effect="creative"
        :creativeEffect="options5"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        effect="creative"
        :creativeEffect="options6"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import data from '../../common/js/data.js'
import { EffectCreative } from '@zebra-ui/swiper/modules'

const modules = ref([EffectCreative])
const options1 = {
  prev: {
    shadow: true,
    translate: [0, 0, -400]
  },
  next: {
    translate: ['100%', 0, 0]
  }
}
const options2 = {
  prev: {
    shadow: true,
    translate: ['-120%', 0, -500]
  },
  next: {
    shadow: true,
    translate: ['120%', 0, -500]
  }
}
const options3 = {
  prev: {
    shadow: true,
    translate: ['-20%', 0, -1]
  },
  next: {
    translate: ['100%', 0, 0]
  }
}

const options4 = {
  prev: {
    shadow: true,
    translate: [0, 0, -800],
    rotate: [180, 0, 0]
  },
  next: {
    shadow: true,
    translate: [0, 0, -800],
    rotate: [-180, 0, 0]
  }
}

const options5 = {
  prev: {
    shadow: true,
    translate: ['-125%', 0, -800],
    rotate: [0, 0, -90]
  },
  next: {
    shadow: true,
    translate: ['125%', 0, -800],
    rotate: [0, 0, 90]
  }
}

const options6 = {
  prev: {
    shadow: true,
    origin: 'left center',
    translate: ['-5%', 0, -200],
    rotate: [0, 100, 0]
  },
  next: {
    origin: 'right center',
    translate: ['5%', 0, -200],
    rotate: [0, -100, 0]
  }
}
const list = ref([...data])
</script>
