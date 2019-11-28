<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 09:06:17
 * @LastEditors: 王晓龙
 * @LastEditTime: 2019-11-28 11:56:02
 -->

# button 按钮

::: explain

:::

## Demo

::: explain 基础用法

<templatePc name="Button-index">

<<< @/docs/.vuepress/components/Button/index.vue

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

::: explain button Events

| 事件名称 | 描述     | 类型     | 是否必填 | 可选值   | 默认值 |
| :------- | :------- | :------- | :------- | :------- | :----- |
| @click   | 单击事件 | Function | 否       | Function | null   |

:::
