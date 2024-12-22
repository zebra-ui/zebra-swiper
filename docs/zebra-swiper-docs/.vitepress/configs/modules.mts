import type { DefaultTheme } from 'vitepress'

export const modules = {
  text: 'Modules',
  collapsed: false,
  items: [
    { text: '自动播放', link: '/modules/autoplay' },
    { text: '自由滑动', link: '/modules/freemode' },
    { text: '切换器', link: '/modules/navigation' },
    { text: '分页器', link: '/modules/pagination' },
    { text: '滚动条', link: '/modules/scrollbar' },
    { text: '缩略图', link: '/modules/thumbs' },
    { text: '控制器', link: '/modules/controller' },
    {
      text: '切换效果',
      collapsed: false,
      items: [
        { text: '切换效果-fade', link: '/modules/fade' },
        { text: '切换效果-coverflow', link: '/modules/coverflow' },
        { text: '切换效果-cube', link: '/modules/cube' },
        { text: '切换效果-flip', link: '/modules/flip' },
        { text: '切换效果-card', link: '/modules/card' },
        { text: '切换效果-creative', link: '/modules/creative' }
      ]
    },
    { text: '虚拟', link: '/modules/virtual' }
  ]
} satisfies DefaultTheme.SidebarItem
