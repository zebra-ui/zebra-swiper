import type { DefaultTheme } from 'vitepress'
import { guide } from './guide.mjs'
import { api } from './api.mjs'
import { modules } from './modules.mjs'
import { advanced } from './advanced.mjs'
import { playground } from './playground.mjs'
import { template } from './template.mjs'

export const nav = [
  guide,
  api,
  modules,
  advanced,
  template,
  playground,
  {
    text: `关于`,
    items: [
      {
        text: 'H5预览',
        link: 'https://swiper.zebraui.com/h5/#/'
      },
      {
        text: '2.x',
        link: 'https://v2.swiper.zebraui.com/'
      },
      {
        text: 'uniapp插件市场',
        link: 'https://ext.dcloud.net.cn/plugin?id=7273'
      },
      {
        text: 'ZebraUI',
        link: 'https://zebraui.com/'
      },
      {
        text: 'ZebraAxios',
        link: 'https://axios.zebraui.com/'
      },
      {
        text: 'ZebraColor',
        link: 'https://color.zebraui.com/'
      }
    ]
  }
] satisfies DefaultTheme.NavItem[]
