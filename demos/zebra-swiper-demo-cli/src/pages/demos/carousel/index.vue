<template>
  <view class="carousel-slider">
    <z-swiper ref="zSwiper" v-model="list" :options="options">
      <z-swiper-item
        v-for="(item, index) in list"
        :key="index"
        :custom-style="{ width: '500rpx' }"
      >
        <div class="carousel-slider-animate-opacity">
          <image class="image" :src="item" mode="aspectFill" />
          <div class="slide-content">
            <view class="slide-content-title">Guardians Of The Galaxy</view>
            <view class="slide-content-detail"
              >A group of intergalactic criminals must pull together to stop a
              fanatical warrior with plans to purge the universe.</view
            >
          </div>
        </div>
      </z-swiper-item>
    </z-swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {
      options: {
        effect: "carousel",
      },
      list: [
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg",
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.carousel-slider {
  background: #18212b;
  height: calc(100vh - (44px + env(safe-area-inset-top)));
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .carousel-slider-animate-opacity {
    height: 100%;
  }

  .image {
    width: 500rpx;
    height: 600rpx;
    display: block;
    object-fit: cover;
    border-radius: 8px;
    // prettier-ignore
    -webkit-box-reflect: below 5px -webkit-linear-gradient(bottom, rgba(255, 0, 0, 0.1) 0%, transparent 32px, transparent 100%);
  }

  .slide-content {
    position: absolute;
    left: 0;
    width: 500rpx;
    bottom: 0;
    padding: 88px 16px 24px;
    box-sizing: border-box;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75)
    );
    border-radius: 0 0 8px 8px;
  }
}
</style>
