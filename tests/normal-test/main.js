import App from './App'

import {
	createSSRApp
} from 'vue'
import DemoBlock from '@/components/DemoBlock/DemoBlock.vue'
import DemoItem from '@/components/DemoItem/DemoItem.vue'
import {
	ZSwiperNative,
	ZSwiperItemNative
} from '@/uni_modules/zebra-swiper/components/z-swiper-native/swiper-vue.js'
export function createApp() {
	const app = createSSRApp(App)
	app.component('DemoBlock', DemoBlock)
	app.component('DemoItem', DemoItem)
	app.component('ZSwiperNative', ZSwiperNative)
	app.component('ZSwiperItemNative', ZSwiperItemNative)
	return {
		app
	}
}