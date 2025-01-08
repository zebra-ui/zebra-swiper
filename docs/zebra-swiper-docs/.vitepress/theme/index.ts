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
import CodeSandbox from './components/CodeSandbox/index.vue'
import DemoTemplate from './components/DemoTemplate/index.vue'
import DemoTemplateDetail from './components/DemoTemplate/content/detail.vue'
import '@zebra-ui/swiper/index.scss'
import './main.css'
import './icon-font.css'
import 'animate.css'

import packageJson from '@zebra-ui/swiper/package.json'

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
    app.component('CodeSandbox', CodeSandbox)
    app.component('DemoTemplate', DemoTemplate)
    app.component('DemoTemplateDetail', DemoTemplateDetail)

    // @ts-ignore
    if (!import.meta.env.SSR) {
      const ZebraSwiper = await import('@zebra-ui/swiper')
      app.use(ZebraSwiper.default)
      setTimeout(() => {
        const header = document.querySelector('.VPNavBarTitle .title')
        if (header && !header.querySelector('.version-tag')) {
          const versionTag = document.createElement('span')
          versionTag.className = 'version-tag'
          versionTag.textContent = `v${packageJson.version}`
          versionTag.style.fontSize = '0.8em'
          versionTag.style.color = 'var(--vp-badge-tip-text)'
          versionTag.style.marginLeft = '0.5em'
          versionTag.style.background = 'var(--vp-badge-tip-bg)'
          versionTag.style.padding = '0.2em 0.4em'
          versionTag.style.borderRadius = '4px'
          header.appendChild(versionTag)
        }
      }, 100)
    }
  }
} satisfies Theme
