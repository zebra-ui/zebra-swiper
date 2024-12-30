import type { DefaultTheme } from 'vitepress'
import { guide } from './guide.mjs'
import { api } from './api.mjs'
import { modules } from './modules.mjs'
import { advanced } from './advanced.mjs'

import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const packageJson = require('@zebra-ui/swiper/package.json')

export const nav = [
  guide,
  api,
  modules,
  advanced,
  {
    text: `v${packageJson.version}`,
    items: [
      {
        text: '2.x',
        link: 'https://v2.swiper.zebraui.com/'
      }
    ]
  }
] satisfies DefaultTheme.NavItem[]
