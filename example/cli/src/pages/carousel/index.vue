<template>
  <view class="demo-swiper">
    <demo-block title="数量">
      <z-swiper :slidesPerView="2">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="自适应">
      <z-swiper slidesPerView="auto" centeredSlides :spaceBetween="14">
        <z-swiper-item
          v-for="item in list"
          :key="item.id"
          :custom-style="{ width: '500rpx' }"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="居中">
      <z-swiper :slidesPerView="2" centeredSlides>
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="贴合边缘">
      <z-swiper :slidesPerView="3" centeredSlides centeredSlidesBounds>
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="分组">
      <z-swiper :slidesPerView="3" :slidesPerGroup="3">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="距离">
      <z-swiper :slidesPerView="3" :spaceBetween="20">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper
        v-model:list="loopList"
        loop
        slidesPerView="auto"
        centeredSlides
        :spaceBetween="14"
      >
        <z-swiper-item
          v-for="(item, index) in loopList"
          :key="item.id"
          :custom-style="{ width: '500rpx' }"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import data from '../../common/js/data.js'
const list = ref([...data])
const loopList = ref([...data])
</script>
