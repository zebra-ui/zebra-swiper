import { defineConfig } from 'vitepress'
import { sidebar, nav, head } from './configs/index.mjs'
import { playground } from './configs/playground.mjs'
import { template } from './configs/template.mjs'

export default defineConfig({
  title: 'ZebraSwiper',
  description: '专为多端设计的高性能轮播组件库，支持多种复杂的 3D 轮播效果。',
  sitemap: {
    hostname: 'https://swiper.zebraui.com/',
    transformItems: (items) => {
      const modifyItems: typeof items = []
      for (const item of items) {
        if (item.url.includes('404')) {
          continue
        }
        modifyItems.push({
          ...item,
          changefreq: 'daily',
          priority: 1
        })
      }
      return modifyItems
    }
  },
  head,
  themeConfig: {
    logo: { light: '/logo-line.svg', dark: '/logo-line-dark.svg' },
    nav,
    sidebar: {
      '/': sidebar,
      '/playground/': [playground],
      '/template/': [template]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright:
        'Copyright © 2022-present <a href="https://github.com/zebra-ui">Zebra</a>'
    },
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
    },
    server: {
      port: 5166
    }
  }
})
