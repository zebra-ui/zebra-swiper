import type { UserConfig } from 'vitepress'

export const head = [
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo-line.svg' }],
  ['meta', { name: 'robots', content: 'index, follow' }],
  ['meta', { name: 'author', content: 'Zebra' }],
  [
    'meta',
    {
      name: 'description',
      content:
        'A high-performance carousel component library designed for multiple terminals, supporting a variety of complex 3D carousel effects.'
    }
  ],
  [
    'meta',
    { name: 'keywords', content: 'zebra,swiper,zebra-ui,zebra-swiper,3D' }
  ],
  ['meta', { name: 'application-name', content: 'ZebraSwiper' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'ZebraSwiper' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { property: 'og:site_name', content: 'ZebraSwiper' }],
  [
    'meta',
    {
      property: 'og:description',
      content:
        'A high-performance carousel component library designed for multiple terminals, supporting a variety of complex 3D carousel effects.'
    }
  ],
  ['meta', { property: 'og:image', content: '/swiper-cover.png' }],
  ['meta', { property: 'og:url', content: 'https://swiper.zebraui.com/' }],
  ['meta', { property: 'og:type', content: 'website' }],
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
