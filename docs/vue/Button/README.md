<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 09:06:17
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-13 11:49:56
 -->

# button 按钮

::: explain

```vue
<z-button type="success" size="small">中等</z-button>
```

:::

## Demo

::: explain 基础用法

<templatePc name="Button-index">

<<< @/docs/.vuepress/components/Button/index.vue

</templatePc>

:::

---

::: explain 不同大小

<templatePc name="Button-size">

<<< @/docs/.vuepress/components/Button/size.vue

</templatePc>

:::

---

::: explain 不同形状

<templatePc name="Button-shape">

<<< @/docs/.vuepress/components/Button/shape.vue

</templatePc>

:::

::: explain icon button

<templatePc name="Button-icon">

<<< @/docs/.vuepress/components/Button/icon.vue

</templatePc>

:::

---

::: explain 禁用状态

<templatePc name="Button-disabled">

<<< @/docs/.vuepress/components/Button/disabled.vue

</templatePc>

:::

## API

::: explain button

| 参数     | 描述               | 类型    | 是否必填 | 可选值                         | 默认值 |
| :------- | :----------------- | :------ | :------- | :----------------------------- | :----- |
| shape    | 形状               | string  | false    | square/round/plain             | 默认   |
| disabled | 禁用               | Boolean | false    | true/false                     | false  |
| type     | 类型               | string  | false    | primary/success/warning/danger | false  |
| size     | 大小               | string  | false    | large/small/mini               | false  |
| href     | 点击打开新的标签页 | string  | false    |                                | false  |

:::

---

::: explain button Events

| 事件名称 | 描述     | 返回值 |
| :------- | :------- | :----- |
| @click   | 单击事件 | null   |

:::
