import type { Theme } from 'vitepress'
// import * as components from '@zebra-ui/swiper'
import DefaultTheme from 'vitepress/theme-without-fonts'
import DemoBlock from './components/DemoBlock/index.vue'
import DemoCard from './components/DemoCard/index.vue'
import DemoCardExpand from './components/DemoCard/expand.vue'
import DemoItem from './components/DemoItem/index.vue'
import ComponentInfo from './components/DemoBlock/info.vue'
import DemoOprate from './components/DemoOprate/index.vue'
import AnimatedText from './components/Animated/text.vue'
import AnimatedElement from './components/Animated/element.vue'
import AnimatedCounter from './components/Animated/counter.vue'
import DemoShow from './components/DemoShow/index.vue'
import DemoHome from './components/DemoHome/index.vue'
import '@zebra-ui/swiper/index.scss'
import './main.css'
import 'animate.css'

export default {
  extends: DefaultTheme,
  async enhanceApp(ctx) {
    const { app } = ctx
    app.component('DemoBlock', DemoBlock)
    app.component('DemoCard', DemoCard)
    app.component('DemoCardExpand', DemoCardExpand)
    app.component('DemoItem', DemoItem)
    app.component('ComponentInfo', ComponentInfo)
    app.component('DemoOprate', DemoOprate)
    app.component('AnimatedText', AnimatedText)
    app.component('AnimatedElement', AnimatedElement)
    app.component('AnimatedCounter', AnimatedCounter)
    app.component('DemoShow', DemoShow)
    app.component('DemoHome', DemoHome)

    // @ts-ignore
    if (!import.meta.env.SSR) {
      const ZebraSwiper = await import('@zebra-ui/swiper')
      app.use(ZebraSwiper.default)
    }
  }
} satisfies Theme
