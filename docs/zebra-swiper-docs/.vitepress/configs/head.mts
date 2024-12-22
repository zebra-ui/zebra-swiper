import type { UserConfig } from 'vitepress'

export const head = [
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo-line.svg' }],
  //   [
  //     'link',
  //     { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }
  //   ],
  ['meta', { name: 'robots', content: 'index, follow' }],
  ['meta', { name: 'application-name', content: 'Zebra-Swiper' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Zebra-Swiper' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'og:site_name', content: 'Zebra-Swiper' }]
] satisfies UserConfig['head']
