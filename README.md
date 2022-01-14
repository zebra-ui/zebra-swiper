<p align="center">
	<img alt="logo" src="https://cdn.zebraui.com/zebra-swiper/logo.png" width="220" style="margin-bottom: 10px;">
</p>

<h1 align="center">ZebraSwiper</h1>

<p align="center">基于uniapp，适配多端的高度自定义轮播组件</p>

<p align="center">
	🔥 <a href="https://swiper.zebraui.com/">文档网站</a>
	&nbsp;
	&nbsp;
	🚀 <a href="https://zebraui.com/" target="_blank">zebraUI组件库</a>
</p>

## 介绍

[zebra-swiper](https://github.com/zebra-ui/zebra-uniapp-swiper) 是基于uniapp开发的一款移动端轮播组件。

[uniapp](https://uniapp.dcloud.io/README)的[swiper](https://uniapp.dcloud.io/component/swiper)组件存在很大的局限性，无法完成一些复杂的轮播效果。

而zebra-swiper不仅可以实现一些3D轮播效果，还可以通过参数来定义你想要的效果。

## 特性

- 兼容多端，小程序也可以实现3D轮播效果
- 可自定义3D效果
- 多种示例，总有一种适合你

## 安装

### npm方式

```bash
npm i @zebra-ui/swiper
```

```js
// main.js

import Swiper from '@zebra-ui/swiper';
Vue.use(Swiper);

```

```js
// pages.json

{
	"easycom": {
		"^z-(.*)": "@zebra-ui/swiper/components/z-$1/z-$1.vue"
	},
	"pages": [...],
	"globalStyle": {...}
}
```
