<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style lang="scss">
@use '@zebra-ui/swiper/index';

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

page {
  background-color: #e4ebf5;
}

.demo-swiper {
  padding-bottom: 16rpx;
}
</style>
