<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 09:06:17
 * @LastEditors  : 王晓龙
 * @LastEditTime : 2020-01-16 12:05:42
 -->

# table 表格

::: explain

1. 支持多种 table 风格（'default', 'stripe', 'border'）

:::

## Demo

::: explain 基础用法

<templatePc name="table-basic">

<<< @/docs/.vuepress/components/table/basic.vue

</templatePc>

:::

::: explain 条纹型表格

<templatePc name="table-stripe">

<<< @/docs/.vuepress/components/table/stripe.vue

</templatePc>

:::

::: explain 边框型表格

<templatePc name="table-border">

<<< @/docs/.vuepress/components/table/border.vue

</templatePc>

:::

::: explain 对齐方式

<templatePc name="table-align">

<<< @/docs/.vuepress/components/table/align.vue

</templatePc>

:::

## API

::: explain table

| 参数   | 描述                           | 类型                             | 是否必填 | 可选值               | 默认值 |
| :----- | :----------------------------- | :------------------------------- | :------- | :------------------- | :----- |
| data   | 表格数据源                     | Array\<Object\>                  | false    | -                    | -      |
| column | 表格每列的配置                 | Array\<[Column](#table:column)\> | false    | -                    | -      |
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
