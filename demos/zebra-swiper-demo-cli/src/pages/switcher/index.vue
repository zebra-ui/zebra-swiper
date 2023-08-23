<template>
  <view class="demo-switcher">
    <demo-block title="基础用法">
      <z-swiper v-model="list" :options="options">
        <z-swiper-item v-for="(item, index) in list" :key="index">
          <image class="image" :src="item" mode="aspectFill" />
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="插槽自定义">
      <z-swiper v-model="list" :options="optionsSlot">
        <z-swiper-item v-for="(item, index) in list" :key="index">
          <image class="image" :src="item" mode="aspectFill" />
        </z-swiper-item>
        <template #pre-button>
          <view class="custom-switcher"> prev </view>
        </template>
        <template #next-button>
          <view class="custom-switcher"> next </view>
        </template>
      </z-swiper>
    </demo-block>
    <demo-block title="完全自定义">
      <z-swiper v-model="loopList" ref="zSwiper" :options="optionsCustom">
        <z-swiper-item v-for="(item, index) in loopList" :key="index">
          <image class="image" :src="item" mode="aspectFill" />
        </z-swiper-item>
      </z-swiper>
      <view class="custom-switcher-group">
        <button
          type="primary"
          size="mini"
          class="custom-switcher-group-button"
          @click="prev()"
        >
          prev
        </button>
        <button
          type="primary"
          size="mini"
          class="custom-switcher-group-button"
          @click="next()"
        >
          next
        </button>
      </view>
    </demo-block>
  </view>
</template>

<script>
import DemoBlock from "../../components/DemoBlock/DemoBlock.vue";
export default {
  components: {
    DemoBlock,
  },
  data() {
    return {
      options: {
        navigation: {
          nextEl: true,
          prevEl: true,
        },
      },
      optionsSlot: {
        navigation: {
          slot: true,
        },
      },
      optionsCustom: {
        navigation: {
          custom: true,
        },
        loop: true,
      },
      list: [
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg",
      ],
      loopList: [
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg",
      ],
    };
  },
  methods: {
    prev() {
      this.$refs.zSwiper.swiper.slidePrev();
    },
    next() {
      this.$refs.zSwiper.swiper.slideNext();
    },
  },
};
</script>

<style scoped lang="scss">
.demo-switcher {
  .image {
    height: 300rpx;
    width: 100%;
  }

  .custom-switcher {
    display: flex;
    align-items: center;
  }

  .custom-switcher-group {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
