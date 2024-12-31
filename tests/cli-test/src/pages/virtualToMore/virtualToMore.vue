<template>
  <view class="content">
    <z-swiper
      v-model:list="list"
      virtual
      :modules="modules"
      :virtualList="virtualList"
    >
      <z-swiper-item
        v-for="item in list"
        :key="item.id"
        :custom-style="item.props.style"
        :virtualIndex="item.virtualIndex"
      >
        <view class="swiper-item"> {{ item.text }} </view>
      </z-swiper-item>
    </z-swiper>

    <button @click="loadMore">追加两条数据</button>
  </view>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Virtual } from '@zebra-ui/swiper/modules'

const modules = ref([Virtual])
const list = ref([])

const virtualList = ref([])

onMounted(() => {
  virtualList.value = Array.from({
    length: 10
  }).map((item, index) => {
    return {
      text: `Slide ${index + 1}`,
      id: index + 1
    }
  })
})

const loadMore = () => {
  virtualList.value = [
    ...virtualList.value,
    {
      text: `Slide 11`,
      id: 11
    },
    ,
    {
      text: `Slide 12`,
      id: 12
    }
  ]
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
