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
  ['meta', { name: 'og:site_name', content: 'Zebra-Swiper' }],
  ['meta', { name: 'baidu-site-verification', content: 'codeva-NpHtnN32z6' }],
  [
    'script',
    {
      async: '',
      src: 'https://www.googletagmanager.com/gtag/js?id=G-D1CHLNGL5G'
    }
  ],
  [
    'script',
    {},
    "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-D1CHLNGL5G');"
  ],
  [
    'script',
    {},
    "var _hmt = _hmt || [];\n(function() {var hm = document.createElement('script');hm.src = 'https://hm.baidu.com/hm.js?8928bfb993528684081d873da98813ed';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(hm, s);})();"
  ]
] satisfies UserConfig['head']
