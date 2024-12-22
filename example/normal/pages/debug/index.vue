<template>
  <view class="debug-swiper">
    <view class="debug-swiper-header">
      <view class="header-content">
        <view class="header-content-info">
          <view class="logo">
            <image
              class="image"
              src="https://swiper.zebraui.com/logo.png"
              mode="widthFix"
            ></image>
          </view>
        </view>
        <view class="header-content-button">
          <a
            class="button-item"
            href="https://swiper.zebraui.com/"
            target="_blank"
            >文档</a
          >
          <a
            class="button-item"
            href="https://ext.dcloud.net.cn/plugin?id=7273"
            target="_blank"
            >插件地址</a
          >
        </view>
      </view>
    </view>
    <view class="debug-swiper-bottom">
      <view class="debug-swiper-left">
        <view class="left-content-wrapper">
          <view class="left-content">
            <view class="left-content-view">
              <demo-block title="调试">
                <z-swiper
                  ref="zSwiper"
                  v-model="list"
                  :options="options"
                  :custom-style="customStyle"
                >
                  <z-swiper-item v-for="(item, index) in list" :key="index">
                    <image class="image" :src="item.img" mode="aspectFill">
                    </image>
                  </z-swiper-item>
                </z-swiper>
              </demo-block>
            </view>
          </view>
        </view>
      </view>

      <view class="debug-swiper-content">
        <scroll-view scroll-y="true" class="content-scroll">
          <view class="content-scroll-wrapper">
            <view class="wrapper-item">
              <view class="item-title"> 数据 </view>
              <view class="item-content-list">
                <view class="content-list-item">
                  <view class="item-left"> 条数 </view>
                  <view class="item-right">
                    <radio-group @change="radioChangeData">
                      <radio value="1" />1
                      <radio style="margin-left: 20rpx" value="2" />2
                      <radio style="margin-left: 20rpx" value="3" />3
                      <radio style="margin-left: 20rpx" value="4" />4
                      <radio style="margin-left: 20rpx" value="5" />5
                      <radio style="margin-left: 20rpx" value="6" checked />6
                      <radio style="margin-left: 20rpx" value="7" />7
                      <radio style="margin-left: 20rpx" value="8" />8
                    </radio-group>
                  </view>
                </view>
              </view>
            </view>
            <view class="wrapper-item">
              <view class="item-title"> Basic （swiper一般选项） </view>
              <view class="item-content-list">
                <view class="content-list-item">
                  <view class="item-left"> direction </view>
                  <view class="item-right">
                    <radio-group @change="radioChangeDirection">
                      <radio value="horizontal" checked />horizontal
                      <radio
                        style="margin-left: 20rpx"
                        value="vertical"
                      />vertical
                    </radio-group>
                  </view>
                </view>
                <view class="content-list-item">
                  <view class="item-left"> speed </view>
                  <view class="item-right">
                    <input
                      v-model="speedValue"
                      style="width: 100rpx"
                      type="number"
                      maxlength="4"
                      placeholder="毫秒"
                    />
                    <button size="mini" @click="confirmSpeed()">确定</button>
                  </view>
                </view>
                <view class="content-list-item">
                  <view class="item-left"> enabled </view>
                  <view class="item-right">
                    <radio-group @change="radioChangeEnabled">
                      <radio value="true" checked />true
                      <radio style="margin-left: 20rpx" value="false" />false
                    </radio-group>
                  </view>
                </view>
              </view>
            </view>
            <view class="wrapper-item">
              <view class="item-title"> Carousel （旋转木马） </view>
              <view class="item-content-list">
                <view class="content-list-item">
                  <view class="item-left"> slidesPerView </view>
                  <view class="item-right">
                    <radio-group @change="radioChangeSlidesPerView">
                      <radio value="1" checked />1
                      <radio style="margin-left: 20rpx" value="2" />2
                      <radio style="margin-left: 20rpx" value="3" />3
                    </radio-group>
                  </view>
                </view>
                <view class="content-list-item">
                  <view class="item-left"> centeredSlides </view>
                  <view class="item-right">
                    <radio-group @change="radioChangeCenteredSlides">
                      <radio value="true" />true
                      <radio
                        style="margin-left: 20rpx"
                        value="false"
                        checked
                      />false
                    </radio-group>
                  </view>
                </view>
                <view class="content-list-item">
                  <view class="item-left"> centeredSlidesBounds </view>
                  <view class="item-right">
                    <radio-group @change="radioChangeCenteredSlidesBounds">
                      <radio value="true" />true
                      <radio
                        style="margin-left: 20rpx"
                        value="false"
                        checked
                      />false
                    </radio-group>
                  </view>
                </view>
                <view class="content-list-item">
                  <view class="item-left"> slidesPerGroup </view>
                  <view class="item-right">
                    <radio-group @change="radioChangeSlidesPerGroup">
                      <radio value="1" checked />1
                      <radio style="margin-left: 20rpx" value="2" />2
                      <radio style="margin-left: 20rpx" value="3" />3
                      <radio style="margin-left: 20rpx" value="3" />4
                      <radio style="margin-left: 20rpx" value="3" />5
                    </radio-group>
                  </view>
                </view>
                <view class="content-list-item">
                  <view class="item-left"> spaceBetween </view>
                  <view class="item-right">
                    <input
                      v-model="spaceBetween"
                      style="width: 100rpx"
                      type="number"
                      maxlength="2"
                      placeholder="距离"
                    />
                    <button size="mini" @click="confirmSpaceBetween()">
                      确定
                    </button>
                  </view>
                </view>
                <view class="content-list-item">
                  <view class="item-left"> slidesOffsetBefore </view>
                  <view class="item-right">
                    <input
                      v-model="slidesOffsetBefore"
                      style="width: 100rpx"
                      type="number"
                      maxlength="2"
                      placeholder="距离"
                    />
                    <button size="mini" @click="confirmSlidesOffsetBefore()">
                      确定
                    </button>
                  </view>
                </view>
                <view class="content-list-item">
                  <view class="item-left"> slidesOffsetAfter </view>
                  <view class="item-right">
                    <input
                      v-model="slidesOffsetAfter"
                      style="width: 100rpx"
                      type="number"
                      maxlength="2"
                      placeholder="距离"
                    />
                    <button size="mini" @click="confirmSlidesOffsetAfter()">
                      确定
                    </button>
                  </view>
                </view>
                <view class="content-list-item">
                  <view class="item-left"> centerInsufficientSlides </view>
                  <view class="item-right">
                    <radio-group @change="radioChangeCenterInsufficientSlides">
                      <radio value="true" />true
                      <radio
                        style="margin-left: 20rpx"
                        value="false"
                        checked
                      />false
                    </radio-group>
                  </view>
                </view>
              </view>
            </view>

            <view class="wrapper-item">
              <view class="item-title"> Loop （无限循环） </view>
              <view class="item-content-list">
                <view class="content-list-item">
                  <view class="item-left"> loop </view>
                  <view class="item-right">
                    <radio-group @change="radioChangeLoop">
                      <radio value="true" checked />true
                      <radio style="margin-left: 20rpx" value="false" />false
                    </radio-group>
                  </view>
                </view>
                <view class="content-list-item">
                  <view class="item-left"> speed </view>
                  <view class="item-right">
                    <input
                      v-model="speedValue"
                      style="width: 100rpx"
                      type="number"
                      maxlength="4"
                      placeholder="毫秒"
                    />
                    <button size="mini" @click="confirmSpeed()">确定</button>
                  </view>
                </view>
                <view class="content-list-item">
                  <view class="item-left"> enabled </view>
                  <view class="item-right">
                    <radio-group @change="radioChangeEnabled">
                      <radio value="true" checked />true
                      <radio style="margin-left: 20rpx" value="false" />false
                    </radio-group>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import DemoBlock from '../../components/DemoBlock/DemoBlock.vue'
export default {
  components: {
    DemoBlock
  },
  data() {
    return {
      customStyle: {},
      options: {
        speed: 300,
        slidesPerView: 1,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesPerGroup: 1,
        spaceBetween: 0,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        centerInsufficientSlides: false,
        loop: false,
        pagination: {
          el: true
        }
        // effect: 'coverflow',
        // centeredSlides: true,
        // spaceBetween: 60,
        // slidesPerView: 3,
        // width: 200,
        // loop: true
      },
      speedValue: 300,
      spaceBetween: 0,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      list: [
        {
          img: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg'
        },
        {
          img: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg'
        },
        {
          img: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg'
        },
        {
          img: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg'
        },
        {
          img: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg'
        },
        {
          img: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe6.jpg'
        }
      ]
    }
  },
  methods: {
    radioChangeData(val) {
      this.list = Array(...Array(parseInt(val.detail.value))).map(
        (item, index) => {
          return {
            img: `https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe${index + 1}.jpg`
          }
        }
      )
    },
    radioChangeDirection(value) {
      if (value.detail.value == 'vertical') {
        Object.assign(this.customStyle, {
          height: '900rpx'
        })
      }
      this.$refs.zSwiper.swiper.changeDirection(value.detail.value)
    },
    radioChangeEnabled(value) {
      Object.assign(this.options, {
        enabled: value.detail.value == 'true' ? true : false
      })
      if (value.detail.value == 'true') {
        this.$refs.zSwiper.swiper.enable()
      } else {
        this.$refs.zSwiper.swiper.disable()
      }
    },
    radioChangeSlidesPerView(value) {
      Object.assign(this.options, {
        slidesPerView: parseInt(value.detail.value)
      })
    },
    radioChangeCenteredSlides(value) {
      Object.assign(this.options, {
        centeredSlides: value.detail.value == 'true' ? true : false
      })
    },
    radioChangeCenteredSlidesBounds(value) {
      Object.assign(this.options, {
        centeredSlidesBounds: value.detail.value == 'true' ? true : false
      })
    },
    radioChangeCenterInsufficientSlides(value) {
      Object.assign(this.options, {
        centerInsufficientSlides: value.detail.value == 'true' ? true : false
      })
    },
    radioChangeLoop(value) {
      Object.assign(this.options, {
        loop: value.detail.value == 'true' ? true : false
      })
    },
    radioChangeSlidesPerGroup(value) {
      Object.assign(this.options, {
        slidesPerGroup: parseInt(value.detail.value)
      })
    },
    confirmSpeed() {
      Object.assign(this.options, {
        speed: parseInt(this.speedValue)
      })
    },
    confirmSpaceBetween() {
      Object.assign(this.options, {
        spaceBetween: parseInt(this.spaceBetween)
      })
    },
    confirmSlidesOffsetBefore() {
      Object.assign(this.options, {
        slidesOffsetBefore: parseInt(this.slidesOffsetBefore)
      })
    },
    confirmSlidesOffsetAfter() {
      Object.assign(this.options, {
        slidesOffsetAfter: parseInt(this.slidesOffsetAfter)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.debug-swiper {
  height: 100%;

  .debug-swiper-bottom {
    display: flex;
    flex-wrap: wrap;

    .debug-swiper-left {
      width: 860rpx;
      height: calc(100vh - 170rpx);

      // padding: 0 100rpx;

      .left-content-wrapper {
        margin: 50rpx;

        .left-content {
          // height: 1200rpx;
          height: calc(100vh - 270rpx);
          overflow: hidden;
          background: linear-gradient(131.16deg, #f0f2f7, snow 100%, #d8dce6 0);
          border-radius: 8rpx;
          box-shadow: 0 8rpx 24rpx #ebedf0;

          .left-content-view {
            padding: 50rpx 0;

            .image {
              width: 100%;
              height: 900rpx;
            }
          }
        }
      }
    }

    .debug-swiper-content {
      width: calc(100vw - 860rpx);
      height: calc(100vh - 170rpx);

      .content-scroll {
        height: 100%;

        .content-scroll-wrapper {
          padding: 50rpx;

          .wrapper-item {
            margin-bottom: 80rpx;

            .item-title {
              font-size: 40rpx;
              font-weight: bold;
            }

            .item-content-list {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              margin-top: 30rpx;

              .content-list-item {
                display: flex;
                align-items: center;
                margin-right: 100rpx;
                margin-bottom: 20rpx;

                .item-left {
                  font-size: 34rpx;
                  font-weight: bold;
                }

                .item-right {
                  display: flex;
                  align-items: center;
                  margin-left: 30rpx;
                  font-size: 28rpx;
                }
              }
            }
          }
        }
      }
    }
  }

  .debug-swiper-header {
    width: 100%;
    height: 120rpx;
    user-select: none;
    background-color: #08c6c8;

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 60rpx;

      .header-content-button {
        display: flex;
        align-items: center;

        .button-item {
          position: relative;
          display: block;
          padding: 0 24rpx;
          margin-left: 50rpx;
          font-size: 28rpx;
          line-height: 48rpx;
          color: #fff;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          border: 1rpx solid hsl(0deg 0% 100% / 70%);
          border-radius: 40rpx;
          transition: 0.3s ease-in-out;
        }
      }

      .header-content-info {
        display: flex;
        align-items: center;

        .logo {
          display: flex;
          align-items: center;
          width: 220rpx;
          height: 120rpx;

          .image {
            width: 100%;
            height: 100%;
          }
        }

        .name {
          font-size: 32rpx;
          color: #fff;
        }
      }
    }
  }
}
</style>
