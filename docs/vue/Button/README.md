<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 09:06:17
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-28 16:14:51
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

::: explain 禁用状态

<templatePc name="Button-disabled">

<<< @/docs/.vuepress/components/Button/disabled.vue

</templatePc>

:::

## API

::: explain button

| 参数     | 描述                 | 类型    | 是否必填 | 可选值                                      | 默认值        |
| :------- | :------------------- | :------ | :------- | :------------------------------------------ | :------------ |
| type     | 决定按钮标签颜色主题 | string  | 否       | primary / success / warning / danger / text | default（空） |
| disabled | 是否禁用             | Boolean | 否       | disabled                                    | false         |
| size     | 按钮大小             | string  | 否       | medium / small / mini                       | medium        |

:::

---

::: explain button Events

| 事件名称 | 描述     | 类型     | 是否必填 | 可选值   | 默认值 |
| :------- | :------- | :------- | :------- | :------- | :----- |
| @click   | 单击事件 | Function | 否       | Function | null   |

:::
