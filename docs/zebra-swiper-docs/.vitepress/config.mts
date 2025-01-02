import { defineConfig } from 'vitepress'
import { sidebar, nav, head } from './configs/index.mjs'

export default defineConfig({
  title: 'ZebraSwiper',
  description: '专为多端设计的高性能轮播组件库，支持多种复杂的 3D 轮播效果。',
  head,
  themeConfig: {
    logo: '/logo-line.svg',
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zebra-ui/zebra-swiper' },
      { icon: 'gitee', link: 'https://gitee.com/zebra-ui/zebra-uniapp-swiper' }
    ],
    search: {
      provider: 'algolia',
      options: {
        appId: 'VX6GY276LN',
        apiKey: '1390b67f732815b32c1f89221bb014e5',
        indexName: 'swiper-zebraui'
      }
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  }
})
