<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 09:06:17
 * @LastEditors: langxue
 * @LastEditTime: 2019-12-10 10:34:38
 -->

# input 输入

::: explain

1. 保证 value 双向绑定
2. input 可选类型(number、string...)
3. input loading 状态
4. size（medium / small / mini）
5. @ActiveColor 为默认主色调

:::

## Demo

::: explain 基础用法

<templatePc name="Input-index">

<<< @/docs/.vuepress/components/Input/index.vue

</templatePc>

:::

::: explain 可清空

<templatePc name="Input-demo-clearable">

<<< @/docs/.vuepress/components/Input/demo-clearable.vue

</templatePc>

:::

::: explain 尺寸

<templatePc name="Input-demo-size">

<<< @/docs/.vuepress/components/Input/demo-size.vue

</templatePc>

:::

::: explain 图标

<templatePc name="Input-demo-icon">

<<< @/docs/.vuepress/components/Input/demo-icon.vue

</templatePc>

:::

::: explain 限制输入长度

<templatePc name="Input-demo-length">

<<< @/docs/.vuepress/components/Input/demo-length.vue

</templatePc>

:::

::: explain 禁用状态

<templatePc name="Input-demo-disabled">

<<< @/docs/.vuepress/components/Input/demo-disabled.vue

</templatePc>

:::

## API

::: explain input

| 参数           | 描述                 | 类型            | 是否必填 | 可选值                           | 默认值     |
| :------------- | :------------------- | :-------------- | :------- | :------------------------------- | :--------- |
| type           | 文本框类型           | String          | false    | text 和其他原生 input 的 type 值 | text       |
| placeholder    | 文本框占位文本       | String          | false    | -                                | 请输入内容 |
| disabled       | 禁用                 | Boolean         | false    | -                                | false      |
| clearable          | 点击清除图标清空内容       | Boolean          | false    | -                                | -          |
| size           | 文本框尺寸           | String          | false    | medium，small，mini              | medium     |
| maxlength            | 文本框输入最大长度     | Number          | false    | -                                | -          |
| suffixIcon     | 后置 icon            | String          | false    | -                                | -          |
| prefixIcon     | 前置 icon            | String          | false    | -                                | -          |
| value(v-model) | 绑定值               | string / number | false    | -                                | -          |

:::

::: explain input Slots

| 参数   | 描述           | 类型 | 是否必填 | 可选值 | 默认值 |
| :----- | :------------- | :--- | :------- | :----- | :----- |
| prefix | 输入框头部内容 | -    | -        | -      | -      |
| suffix | 输入框头部内容 | -    | -        | -      | -      |

:::

::: explain input Methods

| 参数   | 描述           | 类型 | 是否必填 | 可选值 | 默认值 |
| :----- | :------------- | :--- | :------- | :----- | :----- |
| focus | 获取Input焦点 | -    | -        | -      | -      |
| blur | Input失去焦点 | -    | -        | -      | -      |

:::

::: explain input Events

| 事件名称 | 描述                                | 类型 | 是否必填 | 可选值 | 默认值 |
| :------- | :---------------------------------- | :--- | :------- | :----- | :----- |
| blur     | 在 Input 失去焦点时触发             | -    | -        | -      | -      |
| input    | 在 Input 值改变时触发               | -    | -        | -      | -      |
| change   | 在 Input 失去焦点且值发生改变时触发 | -    | -        | -      | -      |
| clear   | 清空input内容时触发 | -    | -        | -      | -      |
:::
