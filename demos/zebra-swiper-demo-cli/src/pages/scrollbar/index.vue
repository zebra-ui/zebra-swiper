<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper v-model="list" :options="options">
        <z-swiper-item v-for="(item, index) in list" :key="index">
          <image class="image" :src="item" mode="aspectFill" />
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="自动播放">
      <z-swiper v-model="list" :options="optionsAutoplay">
        <z-swiper-item v-for="(item, index) in list" :key="index">
          <image class="image" :src="item" mode="aspectFill" />
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="纵向">
      <z-swiper
        v-model="list"
        :custom-style="{ height: '300rpx' }"
        :options="optionsVertical"
      >
        <z-swiper-item v-for="(item, index) in list" :key="index">
          <image class="image" :src="item" mode="aspectFill" />
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="自动隐藏">
      <z-swiper v-model="list" :options="optionsHide">
        <z-swiper-item v-for="(item, index) in list" :key="index">
          <image class="image" :src="item" mode="aspectFill" />
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="可拖动">
      <z-swiper v-model="list" :options="optionsDraggable">
        <z-swiper-item v-for="(item, index) in list" :key="index">
          <image class="image" :src="item" mode="aspectFill" />
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
        scrollbar: {
          el: true,
        },
      },
      optionsAutoplay: {
        scrollbar: {
          el: true,
        },
        autoplay: true,
      },
      optionsVertical: {
        scrollbar: {
          el: true,
        },
        direction: "vertical",
      },
      optionsHide: {
        scrollbar: {
          el: true,
          hide: true,
        },
      },
      optionsDraggable: {
        scrollbar: {
          el: true,
          draggable: true,
        },
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
};
</script>

<style scoped lang="scss">
.demo-swiper {
  .image {
    display: block;
    height: 300rpx;
    width: 100%;
  }
}
</style>
