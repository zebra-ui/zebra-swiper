import type { DefaultTheme } from 'vitepress'

export const advanced = {
  text: '进阶',
  collapsed: false,
  items: [
    { text: '与animate.css搭配', link: '/advanced/animatecss' },
    { text: '制作modules模块', link: '/advanced/makemodules' }
  ]
} satisfies DefaultTheme.SidebarItem
