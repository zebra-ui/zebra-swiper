<template>
  <view class="content">
    <z-swiper v-model:list="list" loop grabCursor pagination :modules="modules">
      <z-swiper-item v-for="item in list" :key="item.id">
        <view class="swiper-item"> {{ item.text }} </view>
      </z-swiper-item>
    </z-swiper>
    <button @click="goOther">跳转其他页面</button>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { Pagination } from '@zebra-ui/swiper/modules'

const modules = ref([Pagination])
const list = ref(
  Array.from({
    length: 5
  }).map((item, index) => {
    return {
      text: `Slide ${index + 1}`,
      id: index + 1
    }
  })
)

const goOther = (swiper, event) => {
  uni.navigateTo({
    url: '/pages/clickMethod/index'
  })
}
</script>

<style lang="scss" scoped>
.swiper-item {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  background-color: #00aa7f;
}
</style>
