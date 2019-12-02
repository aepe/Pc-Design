<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 09:06:17
 * @LastEditors: 王晓龙
 * @LastEditTime: 2019-11-29 11:36:09
 -->

# table 表格

::: explain

1. 符合原生 table 标签风格 tbody、thead...
2. 支持多种 table 风格（'default', 'stripe', 'border'）

:::

## Demo

::: explain 基础用法

<templatePc name="table-demo1">

<<< @/docs/.vuepress/components/table/demo1.vue

</templatePc>

:::

::: explain 条纹型表格

<templatePc name="table-demo2">

<<< @/docs/.vuepress/components/table/demo2.vue

</templatePc>

:::

::: explain 边框型表格

<templatePc name="table-demo3">

<<< @/docs/.vuepress/components/table/demo3.vue

</templatePc>

:::

::: explain 对齐方式

<templatePc name="table-demo4">

<<< @/docs/.vuepress/components/table/demo4.vue

</templatePc>

:::

## API

::: explain table

| 参数   | 描述                           | 类型                             | 是否必填 | 可选值               | 默认值 |
| :----- | :----------------------------- | :------------------------------- | :------- | :------------------- | :----- |
| data   | 表格数据源                     | object[]                         | false    | -                    | -      |
| column | 表格每列的配置                 | array\<[column](#table:column)\> | false    | -                    | -      |
| type   | 表格的类型 条纹和边框 默认为空 | string                           | false    | 'stripe' \| 'border' | -      |

:::

::: explain table:column

| 参数  | 描述                          | 类型   | 是否必填 | 可选值                        | 默认值 |
| :---- | :---------------------------- | :----- | :------- | :---------------------------- | :----- |
| prop  | 列内容对应的字段名 Object.key | string | false    | -                             | -      |
| label | 列内容对应的标题              | string | false    | -                             | -      |
| width | 列内容的宽度 必须有单位       | string | false    | -                             | -      |
| align | 列内容的对齐方式              | string | false    | 'left' \| 'center' \| 'right' | 'left' |

:::
