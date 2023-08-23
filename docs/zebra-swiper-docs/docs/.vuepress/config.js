module.exports = {
    title: 'zebra-swiper',
    description: '基于uniapp，适配多端的高度自定义轮播组件',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/favicon.ico'
            }
        ]
    ],
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '指南', link: '/guide/' },
            { text: '组件', link: '/component/' },
            { text: '配置', link: '/basic/' },
            { text: '性能', link: '/performance/' },
            { text: 'h5演示', link: 'https://swiper.zebraui.com/h5' },
            { text: 'uniapp使用', link: 'https://ext.dcloud.net.cn/plugin?id=7273' },
            { text: 'zebra-ui组件库', link: 'https://zebraui.com' },
            { text: 'github', link: 'https://github.com/zebra-ui/zebra-uniapp-swiper' },
            { text: 'gitee', link: 'https://gitee.com/zebra-ui/zebra-uniapp-swiper' },
        ],
        sidebarDepth: 3,
        sidebar: {
            '/guide/': [{
                title: '指南',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/guide/',
                    '/guide/plan/',
                    '/guide/notice/',
                    '/guide/questions/',
                    '/guide/changelog/'
                ]
            }],
            '/component/': [{
                    title: '组件',
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
                        '/component/start/',
                        '/component/base/',
                    ]
                },
                {
                    title: '轮播块',
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
                        '/component/carousel/',
                    ]
                },
                {
                    title: '循环',
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
                        '/component/loop/',
                    ]
                },
                {
                    title: '切换效果',
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
                        '/component/effect/fade/',
                        '/component/effect/cube/',
                        '/component/effect/coverflow/',
                        '/component/effect/flip/',
                        '/component/effect/cards/',
                        '/component/effect/panorama/',
                        '/component/effect/creative/',
                    ]
                }
            ],
            '/basic/': [{
                title: '配置',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/basic/',
                    '/basic/base/',
                    '/basic/carousel/',
                    '/basic/loop/',
                    '/basic/events/',
                    '/basic/methods/',
                ]
            }, {
                title: '模块',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/basic/modules/',
                    '/basic/modules/autoplay/',
                    '/basic/modules/pagination/',
                    '/basic/modules/effects/',
                ]
            }],
            '/performance/': [{
                title: '性能',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/performance/',
                    '/performance/size/',
                ]
            }],
        }
    }
}