<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper v-model="list">
        <z-swiper-item v-for="(item, index) in list" :key="index">
          <image class="image" :src="item" mode="aspectFill" />
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="监听事件">
      <z-swiper v-model="list" ref="zSwiper" @slideChange="onChange">
        <z-swiper-item v-for="(item, index) in list" :key="index">
          <image class="image" :src="item" mode="aspectFill" />
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="纵向">
      <z-swiper
        v-model="list"
        :custom-style="{ height: '300rpx' }"
        :options="options"
      >
        <z-swiper-item v-for="(item, index) in list" :key="index">
          <image class="image" :src="item" mode="aspectFill" />
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="切换速度">
      <z-swiper v-model="list" :options="{ speed: 2000 }">
        <z-swiper-item v-for="(item, index) in list" :key="index">
          <image class="image" :src="item" mode="aspectFill" />
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="禁用">
      <z-swiper v-model="list" :options="{ enabled: false }">
        <z-swiper-item v-for="(item, index) in list" :key="index">
          <image class="image" :src="item" mode="aspectFill" />
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="高度自适应">
      <z-swiper v-model="autoHeightList" :options="{ autoHeight: true }">
        <z-swiper-item v-for="(item, index) in autoHeightList" :key="index">
          <image style="width: 100%" :src="item" mode="widthFix" />
        </z-swiper-item>
      </z-swiper>
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
        direction: "vertical",
      },
      list: [
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg",
      ],
      autoHeightList: [
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe11.png",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe10.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg",
      ],
    };
  },
  methods: {
    onChange() {
      uni.showToast({
        title: "当前 swiper 索引：" + this.$refs.zSwiper.swiper.activeIndex,
        icon: "none",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.demo-swiper {
  .image {
    height: 300rpx;
    width: 100%;
  }
}
</style>
