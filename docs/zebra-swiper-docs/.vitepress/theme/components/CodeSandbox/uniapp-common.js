export const fileAppVue = `
<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
@use "@zebra-ui/swiper/index";
@use "@zebra-ui/swiper/modules/pagination/pagination";
@use "@zebra-ui/swiper/modules/navigation/navigation";
@use "@zebra-ui/swiper/modules/scrollbar/scrollbar";
@use "@zebra-ui/swiper/modules/effect-fade/effect-fade";
@use "@zebra-ui/swiper/modules/effect-flip/effect-flip";
@use "@zebra-ui/swiper/modules/effect-cards/effect-cards";
@use "@zebra-ui/swiper/modules/effect-cube/effect-cube";
@use "@zebra-ui/swiper/modules/effect-creative/effect-creative";
@use "@zebra-ui/swiper/modules/virtual/virtual";

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
      `

export const fileIndexHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script>
      var coverSupport =
        "CSS" in window &&
        typeof CSS.supports === "function" &&
        (CSS.supports("top: env(a)") || CSS.supports("top: constant(a)"));
      document.write(
        '<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' +
          (coverSupport ? ", viewport-fit=cover" : "") +
          '" />'
      );
    </script>
    <title></title>
    <!--preload-links-->
    <!--app-context-->
  </head>
  <body>
    <div id="app"><!--app-html--></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
          `

export const filePackageJson = (page) => {
  return {
    name: `zebra-swiper-${page}`,
    license: 'MIT',
    scripts: {
      dev: 'uni'
    },
    dependencies: {
      '@dcloudio/uni-app': '3.0.0-4030620241128001',
      '@dcloudio/uni-app-harmony': '3.0.0-4030620241128001',
      '@dcloudio/uni-app-plus': '3.0.0-4030620241128001',
      '@dcloudio/uni-components': '3.0.0-4030620241128001',
      '@dcloudio/uni-h5': '3.0.0-4030620241128001',
      '@dcloudio/uni-mp-alipay': '3.0.0-4030620241128001',
      '@dcloudio/uni-mp-baidu': '3.0.0-4030620241128001',
      '@dcloudio/uni-mp-jd': '3.0.0-4030620241128001',
      '@dcloudio/uni-mp-kuaishou': '3.0.0-4030620241128001',
      '@dcloudio/uni-mp-lark': '3.0.0-4030620241128001',
      '@dcloudio/uni-mp-qq': '3.0.0-4030620241128001',
      '@dcloudio/uni-mp-toutiao': '3.0.0-4030620241128001',
      '@dcloudio/uni-mp-weixin': '3.0.0-4030620241128001',
      '@dcloudio/uni-mp-xhs': '3.0.0-4030620241128001',
      '@dcloudio/uni-quickapp-webview': '3.0.0-4030620241128001',
      vue: '^3.4.21',
      'vue-i18n': '^9.1.9',
      '@zebra-ui/swiper': '3.0.0'
    },
    devDependencies: {
      '@dcloudio/types': '^3.4.8',
      '@dcloudio/uni-automator': '3.0.0-4030620241128001',
      '@dcloudio/uni-cli-shared': '3.0.0-4030620241128001',
      '@dcloudio/uni-stacktracey': '3.0.0-4030620241128001',
      '@dcloudio/vite-plugin-uni': '3.0.0-4030620241128001',
      '@vue/tsconfig': '^0.1.3',
      '@vue/runtime-core': '^3.4.21',
      typescript: '^4.9.4',
      vite: '5.2.8',
      'vue-tsc': '^1.0.24',
      sass: '^1.83.0'
    }
  }
}

export const fileViteConfigJs = `
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api']
      }
    }
  },
  plugins: [uni()]
})
        `

export const srcPagesJson = `
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "zebra-swiper"
      }
    }
  ],
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "zebra-swiper",
    "navigationBarBackgroundColor": "#e4ebf5",
    "backgroundColor": "#e4ebf5"
  }
}
`

export const srcMainJs = `
import { createSSRApp } from 'vue'
import App from './App.vue'
import DemoBlock from '@/components/DemoBlock/DemoBlock.vue'
import DemoItem from '@/components/DemoItem/DemoItem.vue'
import ZSwiper from '@zebra-ui/swiper/components/z-swiper/z-swiper.vue'
import ZSwiperItem from '@zebra-ui/swiper/components/z-swiper-item/z-swiper-item.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.component('DemoBlock', DemoBlock)
  app.component('DemoItem', DemoItem)
  app.component('ZSwiper', ZSwiper)
  app.component('ZSwiperItem', ZSwiperItem)
  return {
    app
  }
}
`

export const srcManifestJson = `
{
  "name": "",
  "appid": "",
  "description": "",
  "versionName": "1.0.0",
  "versionCode": "100",
  "transformPx": false,
  "app-plus": {
    "usingComponents": true,
    "nvueStyleCompiler": "uni-app",
    "compilerVersion": 3,
    "splashscreen": {
      "alwaysShowBeforeRender": true,
      "waiting": true,
      "autoclose": true,
      "delay": 0
    },
    "modules": {},
    "distribute": {
      "android": {},
      "ios": {},
      "sdkConfigs": {}
    }
  },
  "quickapp": {},
  "mp-weixin": {
    "appid": "",
    "setting": {
      "urlCheck": false
    },
    "usingComponents": true
  },
  "mp-alipay": {
    "usingComponents": true
  },
  "mp-baidu": {
    "usingComponents": true
  },
  "mp-toutiao": {
    "usingComponents": true
  },
  "uniStatistics": {
    "enable": false
  },
  "vueVersion": "3"
}
`

export const componentsDemoBlock = `
<template>
  <view class="zebra-doc-demo-block">
    <view v-if="props.title" class="zebra-doc-demo-block__title">{{
      props.title
    }}</view>
    <view v-if="props.card" class="zebra-doc-demo-block__card">
      <slot />
    </view>
    <slot v-else />
  </view>
</template>

<script setup>
const props = defineProps({
  card: {
    type: Boolean,
    default: true
  },
  title: String
})
</script>

<style lang="scss">
.zebra-doc-demo-block {
  margin: 30rpx;
  overflow: hidden;
  background: #e4ebf5;
  border-radius: 10rpx;
  box-shadow:
    10rpx 10rpx 20rpx #cbd1da,
    -10rpx -10rpx 20rpx #fdffff;

  &__title {
    padding: 30rpx;
    margin: 0;
    font-size: 28rpx;
    font-weight: normal;
    line-height: 32rpx;
    color: rgb(69 90 100 / 60%);
    border-bottom: 2rpx solid #f7f8fa;
  }

  &__card {
    padding: 30rpx;
  }

  &__title + &__card {
    margin-top: 0;
  }
}
</style>

`

export const componentsDemoItem = `
<template>
  <view class="item" :style="[getStyle()]">
    {{ item.text }}
  </view>
</template>

<script setup>
const props = defineProps({
  item: {
    type: [Object, String],
    default: () => {}
  },
  height: {
    type: String,
    default: '300rpx'
  },
  customStyle: {
    type: Object,
    default: () => {}
  }
})

const getStyle = () => {
  return {
    background: props.item.background,
    height: props.height,
    ...props.customStyle
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;
}
</style>
`

export const srcCommonJsData = `
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export default [
  {
    id: generateUUID(),
    background: '#213DD3',
    text: 'slide1'
  },
  {
    id: generateUUID(),
    background: '#7ED321',
    text: 'slide2'
  },
  {
    id: generateUUID(),
    background: '#D32160',
    text: 'slide3'
  },
  {
    id: generateUUID(),
    background: '#D36021',
    text: 'slide4'
  },
  {
    id: generateUUID(),
    background: '#50E3C2',
    text: 'slide5'
  }
]
`

export const srcGlobalDTs = `
import { ZSwiper, ZSwiperItem } from '@zebra-ui/swiper'

declare module 'vue' {
  export interface GlobalComponents {
    ZSwiper: typeof ZSwiper
    ZSwiperItem: typeof ZSwiperItem
  }
}
`
