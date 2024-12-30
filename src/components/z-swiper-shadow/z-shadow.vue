<template>
  <view :class="[classNames]" :style="[styles]"></view>
</template>

<script setup lang="ts">
import { useClass, useStyle } from '../adapter/index.js'

defineOptions({
  options: {
    virtualHost: true
  },
  name: 'ZSwiperShadow'
})
const { classList, classNames } = useClass()
const { style, styles } = useStyle()

defineExpose({
  classList,
  style
})
</script>
