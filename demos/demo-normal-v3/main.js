import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import DemoBlock from '@/components/DemoBlock/DemoBlock.vue';
import DemoItem from '@/components/DemoItem/DemoItem.vue';
export function createApp() {
	const app = createSSRApp(App)

	app.component('demo-block', DemoBlock)
	app.component('demo-item', DemoItem)
	return {
		app
	}
}
// #endif