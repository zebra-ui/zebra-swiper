<template>
  <demo-home :list="list" />
</template>

<script setup>
import { ref } from 'vue'
import config from '../../common/js/config.js'
import DemoHome from '../../components/DemoHome/DemoHome.vue'
const list = ref(config)
</script>

<style scoped lang="scss">
.demo-home {
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 92rpx 40rpx 40rpx;
  background: linear-gradient(
    131.16deg,
    rgb(240 242 247 / 100%) 0%,
    rgb(255 250 250 / 100%) 100%,
    rgb(216 220 230 / 100%) 100%
  );
}

.demo-home__title,
.demo-home__desc {
  padding-left: 32rpx;
  font-weight: normal;
  line-height: 1;
  user-select: none;
}

.demo-home__title {
  margin: 0 0 32rpx;
  font-size: 64rpx;
}

.demo-home__image,
.demo-home__text {
  display: inline-block;
  vertical-align: middle;
}

.demo-home__image {
  width: 64rpx;
  height: 64rpx;
}

.demo-home__text {
  margin-left: 32rpx;
  font-weight: 500;
}

.demo-home__title .demo-home--small {
  font-size: 48rpx;
}

.demo-home__desc {
  margin: 0 0 80rpx;
  font-size: 28rpx;
  color: rgb(69 90 100 / 60%);
}
</style>
