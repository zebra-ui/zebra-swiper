import type { DefaultTheme } from 'vitepress'

export const playground = {
  text: 'Playground',
  collapsed: false,
  items: [
    { text: '基础', link: '/playground/base' },
    { text: '轮播块', link: '/playground/carousel' },
    { text: '无限循环', link: '/playground/loop' },
    { text: '自动播放', link: '/playground/autoplay' },
    { text: '自由滑动', link: '/playground/freemode' },
    { text: '切换器', link: '/playground/navigation' },
    { text: '分页器', link: '/playground/pagination' },
    { text: '滚动条', link: '/playground/scrollbar' },
    { text: '缩略图', link: '/playground/thumbs' },
    { text: '控制器', link: '/playground/controller' },
    { text: '虚拟', link: '/playground/virtual' },
    { text: '淡入淡出', link: '/playground/fade' },
    { text: '方块', link: '/playground/cube' },
    { text: '3D流', link: '/playground/coverflow' },
    { text: '3D翻转', link: '/playground/flip' },
    { text: '卡片式', link: '/playground/cards' },
    { text: '创意性', link: '/playground/creative' }
  ]
} satisfies DefaultTheme.SidebarItem
