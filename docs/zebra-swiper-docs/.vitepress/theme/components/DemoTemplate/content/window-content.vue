<script lang="ts" setup>
const props = defineProps({
  name: String
})
</script>

<template>
  <div class="zebra-window-content">
    <div class="content-top">
      <div class="top-dot" style="background-color: #ff5e57"></div>
      <div class="top-dot" style="background-color: #ffbb2e"></div>
      <div class="top-dot" style="background-color: #38c149"></div>
      <div class="top-title">{{ props.name }}</div>
    </div>
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.zebra-window-content {
  position: absolute;
  width: 200px;
  height: 150px;
  bottom: 0;
  right: 4%;
  border-radius: 10px 10px 0 0;
  background-color: var(--vp-c-neutral-inverse);
  display: flex;
  flex-direction: column;
  z-index: 3;

  .content-wrapper {
    flex: 1;
    overflow: hidden;
  }

  .content-top {
    display: flex;
    align-items: center;
    height: 20px;
    border-bottom: 1px solid var(--vp-c-gray-1);
    box-sizing: border-box;
    padding: 0 10px;
    position: relative;

    .top-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 5px;
    }

    .top-title {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
    }
  }
}
</style>
