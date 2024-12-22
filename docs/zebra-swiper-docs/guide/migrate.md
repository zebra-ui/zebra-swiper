---
outline: deep
---

# 从 2.x 迁移

::: warning
`zebra-swiper` v3 版本已全面基于 Vue 3 重构，因此不再兼容 Vue 2。
:::

如果您的项目仍在使用 Vue 2，可以选择继续使用 `zebra-swiper` 2.x 版本或考虑升级项目以支持 Vue 3。

## 1. 参数传递的结构性调整

### 2.x

在 2.x 版本中，`swiper` 参数通常通过 `options` 对象传递。例如：

```html
<z-swiper v-model="list" :options="{slidesPerView: 2}">
  // [!code --]
  <z-swiper-item v-for="(item, index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"></image>
  </z-swiper-item>
</z-swiper>
```

### v3

在 v3 中，这种配置方式被废弃，参数直接通过组件的属性传递，使其更加直观和符合 Vue 3 的设计理念。例如：

```html
<z-swiper :slidesPerView="2"> // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <image class="image" :src="item.url" mode="aspectFill"></image>
  </z-swiper-item>
</z-swiper>
```

---

## 2. 事件监听机制的优化

### 2.x

在 2.x 版本中，事件监听提供了两种方法：

- **传统的 `v-on` 监听**。
- **`swiper` 内置的事件监听**（推荐）。

推荐第二种方法的原因是，某些小程序环境中，`swiper` 实例在传递过程中会产生兼容性问题。例如：

```vue
<script>
slideChange(swiper) {
  console.log(swiper); // 小程序环境下 swiper 实例可能为空
  console.log("当前 Slide 切换时", this.$refs.zSwiper.swiper); // 需要通过 ref 获取实例
}
</script>
```

### v3

在 v3 中，这一问题已被解决。通过 Vue 3 的 Proxy 机制，小程序环境下的实例兼容性得到了显著改进，同时推荐统一使用 `v-on` 方式监听事件。例如：

```html
<z-swiper @swiper="..." @slideChange="..." @reachEnd="..."></z-swiper> // [!code
++]
```

```vue
<script setup>
const slideChange = (swiper) => {
  console.log(swiper)
}
</script>
```

---

## 3. v-model 的使用调整

### 2.x

在 2.x 中，`z-swiper` 组件的使用需要通过 `v-model` 绑定数据列表。例如：

```html
<z-swiper v-model="list">
  <z-swiper-item v-for="(item, index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"></image>
  </z-swiper-item>
</z-swiper>
```

### v3

在 v3 中，当不启用 `loop` 功能时，`v-model` 的使用已不是必需条件。例如：

#### 最基础的轮播

```html
<z-swiper>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <view class="swiper-item">{{ item.text }}</view>
  </z-swiper-item>
</z-swiper>
```

#### 启用 `loop` 时的注意事项

当使用 `loop` 功能时，除 H5 平台外，其他平台仍需通过 `v-model` 绑定数据列表。例如：

```html
<z-swiper v-model:list="list" loop>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <view class="swiper-item">{{ item.text }}</view>
  </z-swiper-item>
</z-swiper>
```

---

## 4. `loop` 逻辑的深度重构

### 2.x 中的 `loop` 实现

2.x 版本中的 `loop` 功能是通过克隆节点的方式实现的。这种设计虽然简单，但在性能和维护性上存在显著问题：

- **性能瓶颈**：克隆节点会显著增加内存占用，尤其是在节点较多时。
- **数据一致性问题**：在数据更新时，`loop` 的 `update` 方法难以判断变更来源，导致视图更新逻辑复杂且容易出错。

### v3 中的优化设计

v3 版本完全摒弃了克隆节点的模式，采用更高效的节点移动机制：

- **在 H5 平台**：通过 DOM 的 `append` 和 `prepend` 操作直接实现节点的循环。
- **在小程序平台**：由于无法直接操作 DOM，`swiper` 组件会在内部处理数据并传递给视图更新逻辑。

这种优化显著提升了性能和数据更新的可靠性，同时减少了开发者在维护复杂场景时的困扰。

## 5. 模块化按需引入 {#migrate-modules-import}

### 2.x

在 `2.x` 版本中，Swiper 默认加载了所有模块（`module`）及其相关样式文件。这种设计简化了开发者的使用流程，无需手动引入即可直接访问所有模块功能。

然而，这种策略存在一个显著的缺陷：对于未使用或仅使用少量模块的场景，这种全量加载方式显著增加了代码体积，导致资源的浪费和性能的下降，尤其在注重轻量化的现代前端开发中，这一弊端尤为突出。

### 3.x

在 `3.x` 版本中，Swiper 引入了模块化按需加载机制。模块及其样式文件不再默认加载，开发者需根据实际需求显式引入相关模块。这一设计大幅度减少了冗余代码的引入，优化了项目的体积和性能。

通过 `modules` 配置项，开发者可以将所需模块添加到模块列表中，使其在运行时被正确加载。例如，当需要使用 `Pagination` 分页器功能时，可按照以下步骤操作：

```vue
<script lang="ts" setup>
import { Pagination } from '@zebra-ui/swiper/modules'

const modules = ref([Pagination])
</script>
```

与此同时，相关的样式文件也需手动引入：

```scss
<style lang="scss">
@use "@zebra-ui/swiper/modules/pagination/pagination.scss";
</style>
```

这种按需引入机制不仅提高了资源利用率，还为开发者提供了更高的灵活性和模块管理能力，在复杂项目中尤为适用。
