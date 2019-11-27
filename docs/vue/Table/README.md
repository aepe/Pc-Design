<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 09:06:17
 * @LastEditors: 王晓龙
 * @LastEditTime: 2019-11-26 11:02:37
 -->

# table 组件

::: warning 实现功能

1. 符合原生 table 标签风格 tbody、thead...
2. 支持多种 table 风格（'default', 'stripe', 'border'）

:::

## Demo

<!-- > 目前编译有问题下次更新 -->

### 基础用法

<templates-demo name="table-demo1">
<<< @/docs/.vuepress/components/table/demo1.vue
</templates-demo>

<!-- ### 条纹型表格

<templates-demo name="table-demo2">
<<< @/docs/.vuepress/components/table/demo2.vue
</templates-demo>

### 边框型表格

<templates-demo name="table-demo3">
<<< @/docs/.vuepress/components/table/demo3.vue
</templates-demo>

### 对齐方式

<templates-demo name="table-demo4">
<<< @/docs/.vuepress/components/table/demo4.vue
</templates-demo> -->

## API

### table

| 参数   | 描述                                             | 类型     | 是否必填 | 可选值               | 默认值 |
| :----- | :----------------------------------------------- | :------- | :------- | :------------------- | :----- |
| data   | 表格数据源                                       | object[] | false    | -                    | -      |
| column | 表格每列的配置 详细配置见[下表](./#table-column) | object[] | false    | -                    | -      |
| type   | 表格的类型 条纹和边框 默认为空                   | string   | false    | 'stripe' \| 'border' | -      |

### table:column

| 参数  | 描述                          | 类型   | 是否必填 | 可选值                        | 默认值 |
| :---- | :---------------------------- | :----- | :------- | :---------------------------- | :----- |
| prop  | 列内容对应的字段名 Object.key | string | false    | -                             | -      |
| label | 列内容对应的标题              | string | false    | -                             | -      |
| width | 列内容的宽度 必须有单位       | string | false    | -                             | -      |
| align | 列内容的对齐方式              | string | false    | 'left' \| 'center' \| 'right' | 'left' |
