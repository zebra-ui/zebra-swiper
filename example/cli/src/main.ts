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
