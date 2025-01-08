<script lang="ts" setup>
const props = defineProps({
  name: String
})
</script>

<template>
  <div class="zebra-icon-content">
    <span :class="`iconfont zebra-template-${props.name}`"></span>
  </div>
</template>

<style lang="scss" scoped>
.zebra-icon-content {
  .iconfont {
    position: absolute;
    top: 30%;
    left: 6%;
    font-size: 80px;
  }
}
</style>
