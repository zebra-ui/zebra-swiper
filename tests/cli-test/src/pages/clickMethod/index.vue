<template>
  <view class="content">
    <z-swiper grabCursor @click="onClick">
      <z-swiper-item v-for="item in list" :key="item.id">
        <view class="swiper-item"> {{ item.text }} </view>
      </z-swiper-item>
    </z-swiper>
  </view>
</template>

<script setup>
import { ref } from 'vue'
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

const onClick = (swiper, event) => {
  console.log('swiper实例：', swiper)
  console.log('点击事件：', event)
}
</script>

<style lang="scss">
.content {
  .swiper-item {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }
}
</style>
