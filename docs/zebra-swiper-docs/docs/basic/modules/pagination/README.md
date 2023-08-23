# Pagination （分页器）

## pagination

- 类型：`object`

使用分页器导航。分页器可使用小圆点样式（默认）、分式样式或进度条样式。如果只有一个 slide，则隐藏分页器导航。

```js
options: {
    pagination: {
        el: true,
    },
},
```

## type

- 类型：`string`
- 默认值：bullets

分页器样式类型，可选

`bullets` 圆点（默认）
`fraction` 分式
`progressbar` 进度条
`custom` 自定义

```js
options: {
    pagination: {
        el: true,
        type: 'bullets',
    },
},
```

## progressbarOpposite

- 类型：`boolean`
- 默认值：false

使进度条分页器与 Swiper 的 direction 参数相反，也就是说水平方向切换的 swiper 显示的是垂直进度条而垂直方向切换的 swiper 显示水平进度条

```js
options: {
    pagination: {
        el: true,
        type: 'progressbar',
        progressbarOpposite: true,
    },
},
```

## dynamicBullets

- 类型：`boolean`
- 默认值：false

动态分页器，当你的 slide 很多时，开启后，分页器小点的数量会部分隐藏。

```js
options: {
    pagination: {
        el: true,
        dynamicBullets: true,
    },
},
```

## dynamicMainBullets

- 类型：`number`
- 默认值：1

动态分页器的主指示点的数量

```js
options: {
    pagination: {
        el: true,
        dynamicBullets: true,
        dynamicMainBullets: 2
    },
},
```

## clickable

- 类型：`boolean`
- 默认值：false

此参数设置为 true 时，点击分页器的指示点分页器会控制 Swiper 切换。

```js
options: {
    pagination: {
        el: true,
        clickable: true,
    },
},
```

## mySwiper.pagination.render()

渲染分页器。

```js
methods: {
    render() {
        this.$refs.zSwiper.swiper.pagination.render();
    }
}
```

## mySwiper.pagination.update()

更新分页器。

```js
methods: {
    update() {
        this.$refs.zSwiper.swiper.pagination.update();
    }
}
```

## paginationRender()

事件函数，当你的 pagination 渲染时执行。每次切换 Swiper，分页器都会渲染一次。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @paginationRender="paginationRender">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    paginationRender() {
        console.log("分页器渲染了", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("paginationRender", (swiper) => {
            console.log("分页器渲染了", swiper)
        })
    }
}
```

:::

## paginationUpdate()

事件函数，当你的 pagination 更新时执行。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @paginationUpdate="paginationUpdate">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    paginationUpdate() {
        console.log("分页器更新了", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("paginationUpdate", (swiper) => {
            console.log("分页器更新了", swiper)
        })
    }
}
```

:::
