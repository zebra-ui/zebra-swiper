import type { DefaultTheme } from 'vitepress'

export const guide = {
  text: '指南',
  collapsed: false,
  items: [
    { text: '介绍', link: '/guide/introduce' },
    { text: '快速上手', link: '/guide/quickstart' },
    { text: '常见问题', link: '/guide/faq' },
    { text: '更新日志', link: '/guide/changedlog' },
    { text: '兼容性', link: '/guide/compatibility' },
    { text: '从2.x迁移', link: '/guide/migrate' }
  ]
} satisfies DefaultTheme.SidebarItem
