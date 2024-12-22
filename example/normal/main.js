import { createSSRApp } from 'vue'
import App from './App.vue'
import DemoBlock from '@/components/DemoBlock/DemoBlock.vue'
import DemoItem from '@/components/DemoItem/DemoItem.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.component('DemoBlock', DemoBlock)
  app.component('DemoItem', DemoItem)
  return {
    app
  }
}
