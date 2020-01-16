<!--
 * @abstract:
 * @version:
 * @Author: 王晓龙
 * @Date: 2019-12-12 15:33:45
 * @LastEditors  : 王晓龙
 * @LastEditTime : 2020-01-16 13:25:31
 -->

# select 选择器

::: explain

1. 目前仅支持单选

:::

## Demo

::: explain 基础用法

<templatePc name="select-basic">

<<< @/docs/.vuepress/components/select/basic.vue

</templatePc>

:::

## API

::: explain select

| 参数          | 描述       | 类型             | 是否必填 | 可选值 | 默认值 |
| :------------ | :--------- | :--------------- | :------- | :----- | :----- |
| value/v-model | 双向绑定值 | number \| string | true     | -      | -      |

:::

::: explain select-option

| 参数     | 描述              | 类型             | 是否必填 | 可选值        | 默认值 |
| :------- | :---------------- | :--------------- | :------- | :------------ | :----- |
| value    | 每项对应的value值 | number \| string | true     | -             | -      |
| label    | 每项对应的label   | number \| string | true     | -             | -      |
| disabled | 是否禁用当前项    | boolean          | false    | true \| false | -      |

:::

<!-- ::: explain select Events

| 参数 | 描述 | 回调参数 | 返回值 |
| :--- | :--- | :------- | :----- |


::: -->
