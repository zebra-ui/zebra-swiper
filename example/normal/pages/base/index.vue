<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper>
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="监听事件">
      <z-swiper @slide-change="onChange">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="纵向">
      <z-swiper :custom-style="{ height: '300rpx' }" direction="vertical">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="切换速度">
      <z-swiper :speed="3000">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="禁用">
      <z-swiper :enabled="false">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="高度自适应">
      <z-swiper auto-height>
        <z-swiper-item>
          <demo-item :item="list[0]" height="200rpx"></demo-item>
        </z-swiper-item>
        <z-swiper-item>
          <demo-item :item="list[1]" height="400rpx"></demo-item>
        </z-swiper-item>
        <z-swiper-item>
          <demo-item :item="list[2]" height="500rpx"></demo-item>
        </z-swiper-item>
        <z-swiper-item>
          <demo-item :item="list[3]" height="300rpx"></demo-item>
        </z-swiper-item>
        <z-swiper-item>
          <demo-item :item="list[4]" height="100rpx"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="嵌套轮播">
      <z-swiper>
        <z-swiper-item>
          <demo-item
            :item="{ text: 'Parent1' }"
            :custom-style="{ background: '#1b2b33' }"
          ></demo-item>
        </z-swiper-item>
        <z-swiper-item>
          <z-swiper nested :resistanceRatio="0">
            <z-swiper-item v-for="item in list" :key="item.id">
              <demo-item :item="item"></demo-item>
            </z-swiper-item>
          </z-swiper>
        </z-swiper-item>
        <z-swiper-item>
          <demo-item
            :item="{ text: 'Parent2' }"
            :custom-style="{ background: '#0b2b33' }"
          ></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import data from '../../common/js/data.js'
const list = ref(data)
const onChange = (swiper) => {
  uni.showToast({
    title: '当前 swiper 索引：' + swiper.activeIndex,
    icon: 'none'
  })
}
</script>
