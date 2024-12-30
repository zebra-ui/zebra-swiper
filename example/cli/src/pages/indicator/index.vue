<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper pagination :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper v-model:list="listLoop" loop pagination :modules="modules">
        <z-swiper-item v-for="item in listLoop" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="分式类型">
      <z-swiper :pagination="{ type: 'fraction' }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="进度条类型">
      <z-swiper :pagination="{ type: 'progressbar' }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="反方向进度条">
      <z-swiper
        :pagination="{ type: 'progressbar', progressbarOpposite: true }"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="动态分页器">
      <z-swiper :pagination="{ dynamicBullets: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="点击切换">
      <z-swiper :pagination="{ clickable: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="点击隐藏">
      <z-swiper :pagination="{ hideOnClick: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="自定义">
      <z-swiper
        :pagination="{ type: 'custom' }"
        :modules="modules"
        @swiper="onSwiper($event, 'custom1')"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
        <template #pagination>
          <view class="custom-indicator">
            <view class="custom-indicator-text">
              {{
                swiperInstance['custom1'] &&
                swiperInstance['custom1'].activeIndex + 1
              }}/{{ list.length }}
            </view>
          </view>
        </template>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        :pagination="{ type: 'custom' }"
        :modules="modules"
        @swiper="onSwiper($event, 'custom2')"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
        <template #pagination>
          <view class="custom-indicator-list">
            <view
              v-for="(item, index) in list"
              :key="item.id"
              class="custom-indicator-list-item"
              :class="{
                'custom-indicator-list-item-active':
                  index ==
                  (swiperInstance['custom2'] &&
                    swiperInstance['custom2'].activeIndex)
              }"
              @click="
                swiperInstance['custom2'] &&
                swiperInstance['custom2'].slideTo(index, 300, false)
              "
            >
              {{ index + 1 }}
            </view>
          </view>
        </template>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        :pagination="{ type: 'custom' }"
        :modules="modules"
        @swiper="onSwiper($event, 'custom3')"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
        <template #pagination>
          <view class="custom-indicator-list1">
            <view
              v-for="(item, index) in list"
              :key="index"
              class="custom-indicator-list-item1"
              :class="{
                'custom-indicator-list-item1-active':
                  index ==
                  (swiperInstance['custom3'] &&
                    swiperInstance['custom3'].activeIndex)
              }"
            >
            </view>
          </view>
        </template>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        :pagination="{ type: 'custom' }"
        :modules="modules"
        @swiper="onSwiper($event, 'custom4')"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
        <template #pagination>
          <view class="custom-indicator-list2">
            <template v-for="(item, index) in list" :key="item.id">
              <view
                v-if="
                  index ==
                  (swiperInstance['custom4'] &&
                    swiperInstance['custom4'].activeIndex) -
                    2
                "
                class="custom-indicator-list2-bullet custom-indicator-list2-bullet-prev-prev"
              >
              </view>
              <view
                v-else-if="
                  index ==
                  (swiperInstance['custom4'] &&
                    swiperInstance['custom4'].activeIndex) -
                    1
                "
                class="custom-indicator-list2-bullet custom-indicator-list2-bullet-prev"
              >
              </view>
              <view
                v-else-if="
                  index ==
                  (swiperInstance['custom4'] &&
                    swiperInstance['custom4'].activeIndex)
                "
                class="custom-indicator-list2-bullet custom-indicator-list2-bullet-active"
              >
              </view>
              <view
                v-else-if="
                  index ==
                  (swiperInstance['custom4'] &&
                    swiperInstance['custom4'].activeIndex) +
                    1
                "
                class="custom-indicator-list2-bullet custom-indicator-list2-bullet-next"
              >
              </view>
              <view
                v-else-if="
                  index ==
                  (swiperInstance['custom4'] &&
                    swiperInstance['custom4'].activeIndex) +
                    2
                "
                class="custom-indicator-list2-bullet custom-indicator-list2-bullet-next-next"
              >
              </view>
            </template>
          </view>
        </template>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination } from '@zebra-ui/swiper/modules'
import type { SwiperInterface } from '@zebra-ui/swiper/types'
import data from '../../common/js/data.js'
const modules = ref([Pagination])
const list = ref([...data])
const listLoop = ref([...data])
const swiperInstance = ref({})
const onSwiper = (swiper: SwiperInterface, name: string) => {
  swiperInstance.value[name] = swiper
}
</script>

<style scoped lang="scss">
.demo-swiper {
  .custom-indicator {
    display: flex;
    justify-content: flex-end;
    margin-right: 30rpx;

    .custom-indicator-text {
      padding: 4rpx 10rpx;
      font-size: 24rpx;
      color: #fff;
      background: rgb(0 0 0 / 10%);
    }
  }

  .custom-indicator-list {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .custom-indicator-list-item {
      width: 40rpx;
      height: 40rpx;
      margin: 0 8rpx;
      font-size: 24rpx;
      line-height: 40rpx;
      color: #000;
      text-align: center;
      background: rgb(0 0 0 / 20%);
      border-radius: 50%;
      opacity: 1;

      &-active {
        color: #fff;
        background: #007aff;
      }
    }
  }

  .custom-indicator-list1 {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .custom-indicator-list-item1 {
      width: 20rpx;
      height: 10rpx;
      margin: 0 5rpx;
      background-color: #e8f5ff;
      border-radius: 5rpx;
      opacity: 1;
      transition:
        opacity 0.3s,
        background-color 0.3s,
        width 0.3s;

      &-active {
        width: 35rpx;
        background-color: #3eb2f3;
      }
    }
  }

  .custom-indicator-list2 {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .custom-indicator-list2-bullet {
      position: relative;
      width: 16rpx;
      height: 16rpx;
      margin: 0 8rpx;
      background-color: #e8f5ff;
      border-radius: 2rpx;
      opacity: 1;
      transition:
        0.2s width,
        0.2s height,
        0.2s background-color,
        0.2s opacity,
        0.2s transform;

      &-active {
        background-color: #3eb2f3;
        opacity: 1;
        transform: scale(1);
      }

      &-prev {
        transform: scale(0.66);
      }

      &-prev-prev {
        transform: scale(0.33);
      }

      &-next {
        transform: scale(0.66);
      }

      &-next-next {
        transform: scale(0.33);
      }
    }
  }
}
</style>
