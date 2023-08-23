# Effects （切换效果）

## effect

- 类型：`string`
- 默认：`slide`
- 可选值：`slide`（普通位移切换）, `fade`（淡入）, `cube`（方块）, `coverflow`（3d 流）, `flip`（3d 翻转）, `cards`（卡片式）, `creative`（创意性）。

设置 Slide 的切换效果

```js
options: {
    effect: 'fade'
},
```

## fadeEffect

fade 效果参数。可选参数：crossFade。

默认：false。关闭淡出。过渡时，原 slide 透明度为 1（不淡出），过渡中的 slide 透明度从 0->1（淡入），其他 slide 透明度 0。

可选值：true。开启淡出。过渡时，原 slide 透明度从 1->0（淡出），过渡中的 slide 透明度从 0->1（淡入），其他 slide 透明度 0。

当你的 slide 中图片大小不同时可以用到。

- 类型：`object`

```js
options: {
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    }
},
```

## cubeEffect

cube 效果参数，可选值：

slideShadows：开启 slide 阴影。默认 true。

shadow： 开启投影。默认 true。

shadowOffset：投影距离。默认 20，单位 px。

shadowScale： 投影缩放比例。默认 0.94。

- 类型：`object`

```js
options: {
    effect: 'cube',
    cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 100,
        shadowScale: 0.6
    },
},
```

## coverflowEffect

- 类型：`object`

coverflow 效果参数，可选值：

| 参数名   | 默认 | 描述                                                                                                                         |
| -------- | ---- | ---------------------------------------------------------------------------------------------------------------------------- |
| rotate   | 50   | slide 做 3d 旋转时 Y 轴的旋转角度                                                                                            |
| stretch  | 0    | 每个 slide 之间的拉伸值，越大 slide 靠得越紧。可使用%百分比                                                                  |
| depth    | 100  | slide 的位置深度。值越大 z 轴距离越远，看起来越小。                                                                          |
| modifier | 1    | depth 和 rotate 和 stretch 的倍率，相当于 depth*modifier、rotate*modifier、stretch\*modifier，值越大这三个参数的效果越明显。 |

```js
options: {
    effect: 'coverflow',
    slidesPerView: 3,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 30,
        stretch: 10,
        depth: 60,
        modifier: 2
    },
},
```

## flipEffect

- 类型：`object`

3d 翻转参数：

limitRotation：限制最大旋转角度为 180 度，默认 true。

```js
options: {
    effect: 'flip',
    flipEffect: {
        limitRotation: true,
    }
},
```

## cardsEffect

- 类型：`object`

卡片参数：

rotate：卡片是否发生旋转偏移，默认为 true。

perSlideOffset：每张幻灯片的偏移距离，默认为 8。

perSlideRotate：每张幻灯片的旋转角度，默认为 2。

```js
options: {
    effect: 'cards',
    cardsEffect: {
        rotate: false,
        perSlideOffset: 8,
        perSlideRotate: 2
    }
},
```

## creativeEffect

- 类型：`object`

设置 effect 为 `creative` 后开启创意切换。由于创意切换的 Slide 全部层叠在当前窗口，因此你还需要设置 creativeEffect 来制作想要的效果。

| 参数名             | 类型                    | 默认 | 描述                                                                                                                                                         |
| ------------------ | ----------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| prev               | CreativeEffectTransform |      | prve(左、上)Slide 的变形方式                                                                                                                                 |
| next               | CreativeEffectTransform |      | next(右、下)Slide 的变形方式                                                                                                                                 |
| limitProgress      | number                  | 1    | 设置 progress 应用的数量限制（变形数量）。默认 1，上一页/下一页之后的所有 Slide 都具有相同的状态。如果设置 2，则前/后第二张开始的所有 Slide 具有相同的状态。 |
| perspective        | boolean                 | true | 开启景深。如果你的切换包含 3D 变形(translateZ, rotateX, rotateY )时不可禁止此参数。                                                                          |
| progressMultiplier | number                  | 1    | 设置 progress 的乘数（变形强度）。例如效果是 200，乘数为 2 则效果变成了 400。                                                                                |

prev 参数详情：

```js
translate: (string | number)[]; // 位移，例如["5%", 0, -200]
rotate ? : number[]; //旋转，单位deg，例如[0, -100, 90]
opacity ? : number; //透明度
scale ? : number; //缩放
shadow ? : boolean; //Slide内部阴影
origin ? : string; //变形中心点，例如'left bottom'
```

next 参数详情：

```js
translate: (string | number)[]; // 位移，例如["5%", 0, -200]
rotate ? : number[]; //旋转，单位deg，例如[0, -100, 90]
opacity ? : number; //透明度
scale ? : number; //缩放
shadow ? : boolean; //Slide内部阴影
origin ? : string; //变形中心点，例如'left bottom'
```
