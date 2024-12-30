import type { DefaultTheme } from 'vitepress'

export const api = {
  text: 'API',
  collapsed: false,
  items: [
    { text: '组件', link: '/api/components' },
    { text: '实例属性', link: '/api/property' },
    { text: '基础配置', link: '/api/basic' },
    { text: '轮播块', link: '/api/carousel' },
    { text: '无限循环', link: '/api/loop' },
    { text: '触摸滑动', link: '/api/touch' },
    { text: '方法', link: '/api/methods' },
    { text: '事件', link: '/api/events' }
  ]
} satisfies DefaultTheme.SidebarItem
