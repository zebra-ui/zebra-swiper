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
@use '@zebra-ui/swiper/modules/pagination/pagination';
@use '@zebra-ui/swiper/modules/navigation/navigation';
@use '@zebra-ui/swiper/modules/scrollbar/scrollbar';
@use '@zebra-ui/swiper/modules/effect-fade/effect-fade';
@use '@zebra-ui/swiper/modules/effect-flip/effect-flip';
@use '@zebra-ui/swiper/modules/effect-cards/effect-cards';
@use '@zebra-ui/swiper/modules/effect-cube/effect-cube';
@use '@zebra-ui/swiper/modules/effect-creative/effect-creative';
@use '@zebra-ui/swiper/modules/virtual/virtual';

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
