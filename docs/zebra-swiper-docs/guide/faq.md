---
outline: deep
---

# 常见问题

## 关于模块引入样式后未生效的原因分析与解决方案 {#modules-not-working}

在 3.x 版本中，部分模块附带样式文件，但需要开发者手动引入这些样式。然而，当 `style` 标签的 `scoped` 属性启用时，样式隔离机制会生效，导致引入的模块样式被局部作用域限制，无法全局生效。这种情形可能会妨碍模块样式的正常应用。

为解决此问题，推荐以下两种方法：

### 方法一：全局引入样式（推荐） {#faq-style-allimport}

::: tip
全局引入与单独引入的代码体积无差别，更推荐全局引入。
:::

通过在 `App.vue` 文件中全局引入样式，避免局部作用域的隔离问题。示例如下：

```css
/* App.vue */
<style lang="scss">
   @use "@/uni_modules/zebra-swiper/modules/navigation/navigation.scss";
</style>
```

此方式确保模块样式可以在整个项目范围内生效，无需额外配置。

### 方法二：分离 `style` 标签 {#faq-style-twotags}

在需要使用模块样式的组件文件中，分别声明两个 `style` 标签：一个不启用样式隔离，专门用于模块样式引入；另一个启用样式隔离，用于组件的自定义样式。具体实现如下：

```vue
<!-- index.vue -->
<!-- 自定义样式，启用样式隔离 -->
<style scoped lang="scss">
 .demo {}
</style>

<!-- 引入模块样式，不启用样式隔离 -->
<style lang="scss"> 
 @use "@/uni_modules/zebra-swiper/modules/navigation/navigation.scss";
</style>
```
