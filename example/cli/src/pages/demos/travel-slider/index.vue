<template>
  <view class="travel-body">
    <view class="travel-wrapper">
      <view class="travel-slider">
        <!-- Rotating Planet -->
        <view class="travel-slider-planet" :style="[planetStyle]">
          <image
            class="planet-image"
            src="../../../static/images/earth.svg"
            mode="heightFix"
          />
          <view
            :class="[
              'travel-slider-cities',
              `travel-slider-cities-${list.length > 4 ? '8' : '4'}`
            ]"
          >
            <image class="cities-image" src="../../../static/images/usa.svg" />
            <image
              class="cities-image"
              src="../../../static/images/england.svg"
            />
            <image
              class="cities-image"
              src="../../../static/images/france.svg"
            />
            <image
              class="cities-image"
              src="../../../static/images/italy.svg"
            />
            <image
              class="cities-image"
              src="../../../static/images/russia.svg"
            />
            <image
              class="cities-image"
              src="../../../static/images/egypt.svg"
            />
            <image
              class="cities-image"
              src="../../../static/images/india.svg"
            />
            <image
              class="cities-image"
              src="../../../static/images/japan.svg"
            />
          </view>
        </view>
        <!-- Swiper -->
        <z-swiper
          :speed="500"
          slidesPerView="auto"
          centeredSlides
          :spaceBetween="24"
          watchSlidesProgress
          @init="init"
          :custom-style="swiperStyle"
        >
          <z-swiper-item
            v-for="item in list"
            :key="item.id"
            :custom-style="itemStyle"
          >
            <image :src="item.url" class="travel-slider-bg-image" />
            <view class="travel-slider-content">
              <view class="travel-slider-title">{{ item.title }}</view>
              <view class="travel-slider-subtitle">{{ item.subTitle }}</view>
            </view>
          </z-swiper-item>
        </z-swiper>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const list = ref([
  {
    id: 'travel1',
    url: '../../../static/images/usa.jpg',
    title: 'United States',
    subTitle: '8,295 properties'
  },
  {
    id: 'travel2',
    url: '../../../static/images/england.jpg',
    title: 'England',
    subTitle: '1,110 properties'
  },
  {
    id: 'travel3',
    url: '../../../static/images/france.jpg',
    title: 'France',
    subTitle: '314 properties'
  },
  {
    id: 'travel4',
    url: '../../../static/images/italy.jpg',
    title: 'Italy',
    subTitle: '1,200 properties'
  },
  {
    id: 'travel5',
    url: '../../../static/images/russia.jpg',
    title: 'Russia',
    subTitle: '12,231 properties'
  },
  {
    id: 'travel6',
    url: '../../../static/images/egypt.jpg',
    title: 'Egypt',
    subTitle: '505 properties'
  },
  {
    id: 'travel7',
    url: '../../../static/images/india.jpg',
    title: 'India',
    subTitle: '2,300 properties'
  },
  {
    id: 'travel8',
    url: '../../../static/images/japan.jpg',
    title: 'Japan',
    subTitle: '1,700 properties'
  }
])
const planetStyle = ref({})
const itemStyle = {
  width: '560rpx',
  'max-width': '640px',
  'box-sizing': 'border-box',
  position: 'relative'
}
const swiperStyle = {
  height: '300px',
  'padding-top': '64px',
  'padding-bottom': '64px'
}
const init = (swiper) => {
  swiper.on('progress', (s, progress) => {
    const max = s.slides.length > 4 ? 360 - (8 - s.slides.length + 1) * 45 : 270
    planetStyle.value.transform = `translate(-50%, -50%) rotate(${max * -progress}deg)`
  })
  swiper.on('setTransition', (s, duration) => {
    const max = s.slides.length > 4 ? 360 - (8 - s.slides.length + 1) * 45 : 270
    planetStyle.value.transitionDuration = `${duration}ms`
  })
}
</script>

<style lang="scss" scoped>
.travel-body {
  position: relative;
  height: 100vh;
  padding: 0;
  margin: 0;
  font-family: -apple-system, system-ui, 'Helvetica Neue', Helvetica, Arial,
    'Segoe UI', Roboto, sans-serif;
  line-height: 1.5;
  color: #000;
  background: #ccc;
  background-image: linear-gradient(to bottom, #6c08ca, #fff);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.travel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
}

.travel-slider {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;

  &-bg-image {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    box-shadow:
      0 10px 20px rgb(0 0 0 / 50%),
      0 -1px 0 rgb(255 255 255 / 50%);
  }

  &-content {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding: 32px;
    line-height: 1.25;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    background-image: linear-gradient(
      to top,
      rgb(0 0 0 / 50%),
      rgb(0 0 0 / 0%)
    );
    border-radius: 0 0 16px 16px;
  }

  &-title {
    font-size: 32px;
    font-weight: bold;
  }

  &-subtitle {
    font-size: 18px;
  }

  &-planet {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    transform: translate(-50%, -50%);

    > .planet-image {
      display: block;
      width: auto;
      height: 100%;
      margin: 0 auto;
    }
  }

  &-cities {
    .cities-image {
      --travel-slider-planet-size: calc(300px + 64px * 2);
      --travel-slider-image-rotate: 0deg;
      --travel-slider-image-scale: 1;

      position: absolute;
      bottom: 95%;
      left: 50%;
      width: 120px;
      height: 120px;
      object-fit: contain;
      object-position: center bottom;
      transform: translateX(-50%) scale(var(--travel-slider-image-scale))
        rotate(var(--travel-slider-image-rotate));
      transform-origin: center
        calc(var(--travel-slider-planet-size) / 2 * 0.95 * 0.95 + 120px * 1);
    }

    &-8 {
      .cities-image:nth-child(2) {
        --travel-slider-image-rotate: 45deg;
      }

      .cities-image:nth-child(3) {
        --travel-slider-image-rotate: 90deg;
      }

      .cities-image:nth-child(4) {
        --travel-slider-image-rotate: 135deg;
      }

      .cities-image:nth-child(5) {
        --travel-slider-image-rotate: 180deg;
      }

      .cities-image:nth-child(6) {
        --travel-slider-image-rotate: 225deg;
      }

      .cities-image:nth-child(7) {
        --travel-slider-image-rotate: 270deg;
      }

      .cities-image:nth-child(8) {
        --travel-slider-image-rotate: 315deg;
      }
    }

    &-4 {
      img:nth-child(2) {
        --travel-slider-image-rotate: 90deg;
      }

      img:nth-child(3) {
        --travel-slider-image-rotate: 180deg;
      }

      img:nth-child(4) {
        --travel-slider-image-rotate: 270deg;
      }
    }
  }
}

.travel-slider::after {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50vh;
  content: '';
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0%),
    #b0a5d1 50%
  );
}
</style>
