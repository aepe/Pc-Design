<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 09:06:17
 * @LastEditors: langxue
 * @LastEditTime: 2019-11-29 13:41:21
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

::: explain 标签

<templatePc name="Input-demo-label">

<<< @/docs/.vuepress/components/Input/demo-label.vue

### 可清空

<templates-demo name="Input-demo-clearable">
<<< @/docs/.vuepress/components/Input/demo-clearable.vue
</templates-demo>

### 尺寸

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
| label          | 文本框标签文本       | String          | false    | -                                | -          |
| labelWidth     | 文本框标签文本宽度   | String          | false    | -                                | auto       |
| size           | 文本框尺寸           | String          | false    | medium，small，mini              | medium     |
| min            | 文本框输入最小值     | Number          | false    | -                                | -          |
| max            | 文本框输入最大值     | Number          | false    | -                                | -          |
| suffixIcon     | 后置 icon            | String          | false    | -                                | -          |
| prefixIcon     | 前置 icon            | String          | false    | -                                | -          |
| showWordLimit  | 是否显示输入字数统计 | Boolean         | false    | -                                | false      |
| value(v-model) | 绑定值               | string / number | false    | -                                | -          |

:::

::: explain input Slots

| 参数   | 描述           | 类型 | 是否必填 | 可选值 | 默认值 |
| :----- | :------------- | :--- | :------- | :----- | :----- |
| prefix | 输入框头部内容 | -    | -        | -      | -      |
| suffix | 输入框头部内容 | -    | -        | -      | -      |

:::

::: explain input Events

| 事件名称 | 描述                                | 类型 | 是否必填 | 可选值 | 默认值 |
| :------- | :---------------------------------- | :--- | :------- | :----- | :----- |
| blur     | 在 Input 失去焦点时触发             | -    | -        | -      | -      |
| input    | 在 Input 值改变时触发               | -    | -        | -      | -      |
| change   | 在 Input 失去焦点且值发生改变时触发 | -    | -        | -      | -      |

:::
