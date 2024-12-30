::: warning
v3版本不再默认引入所有`modules`，这意味着在使用modules中的模块时，都需要手动引入。

同时部分`modules`的`css`也需手动引入。需要注意的是，将`style`设置为`scoped`会导致样式失效。推荐全局引入所需要的模块样式。参考：[引入样式](/guide/faq.html#modules-not-working)

具体可查看[模块化按需引入](/guide/migrate#migrate-modules-import)
:::
