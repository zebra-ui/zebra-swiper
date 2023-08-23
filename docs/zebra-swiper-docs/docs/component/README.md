# 组件

swiper 组件通常用于轮播。当然，你也可以在 `z-swiper-item` 中自定义内容，来实现一些你想要的效果。

swiper 还支持多种炫酷的切换效果，当前可设置的选项： `fade` （淡入）, `cube` （方块）, `coverflow` （3d 流）, `flip` （3d 翻转）, `cards` （卡片式）, `panomara` （全景）, `creative` （创意性）。

swiper 所有的配置项都由 `options` 设置，这个参数是一个对象类型。例如我想设置为自动播放，则代码为：

```vue
<z-swiper v-model="list" :options="{ autoplay: true }">
	<z-swiper-item v-for="(item,index) in list" :key="index">
		<image class="image" :src="item" mode="aspectFill">
		</image>
	</z-swiper-item>
</z-swiper>
```

:::warning 注意
2.0 版本后需要加入 `v-model` 属性
:::
