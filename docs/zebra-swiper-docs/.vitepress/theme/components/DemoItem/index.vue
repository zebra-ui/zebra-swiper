<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  text: String,
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '200px'
  }
})

const contentStyle = computed(() => {
  return {
    width: props.width,
    height: props.height,
    backgroundColor: getRandomColor()
  }
})

const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
</script>

<template>
  <div class="swiper-item-content" :style="contentStyle">
    {{ text }}
  </div>
</template>

<style lang="scss" scoped>
.swiper-item-content {
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}
</style>
