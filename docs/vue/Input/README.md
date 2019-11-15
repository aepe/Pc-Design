<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-12 09:06:17
 * @LastEditors: langxue
 * @LastEditTime: 2019-11-15 15:11:19
 -->
# input 组件
> 应用vue组件开发方式进行开发
> 1. 保证value双向绑定
> 2. input 可选类型(number、string...)
> 3. input loading状态
> 4. size（medium / small / mini）
> 5. @ActiveColor 为默认主色调

## demo

### 基础用法
<templates-demo name="Input-index">
<<< @/docs/.vuepress/components/Input/index.vue
</templates-demo>

### 标签
<templates-demo name="Input-demo-label">
<<< @/docs/.vuepress/components/Input/demo-label.vue
</templates-demo>

### 尺寸
<templates-demo name="Input-demo-size">
<<< @/docs/.vuepress/components/Input/demo-size.vue
</templates-demo>

### 图标
<templates-demo name="Input-demo-icon">
<<< @/docs/.vuepress/components/Input/demo-icon.vue
</templates-demo>

### 限制输入长度
<templates-demo name="Input-demo-length">
<<< @/docs/.vuepress/components/Input/demo-length.vue
</templates-demo>

### 禁用状态
<templates-demo name="Input-demo-disabled">
<<< @/docs/.vuepress/components/Input/demo-disabled.vue
</templates-demo>

## api

| 参数    | 描述                               | 类型    | 是否必填 | 可选值        | 默认值 |
| :------ | :--------------------------------- | :------ | :------- | :------------ | :----- |
| type | 文本框类型 | String | false | text和其他原生 input 的 type 值 | text |
| placeholder | 文本框占位文本 | String | false | - | 请输入内容 |
| disabled | 禁用 | Boolean | false | - | false |
| label | 文本框标签文本 | String | false | - | - |
| labelWidth | 文本框标签文本宽度 | String | false | - | auto |
| size | 文本框尺寸 | String | false | medium，small，mini | medium |
| min | 文本框输入最小值 | Number | false | - | - |
| max | 文本框输入最大值 | Number | false | - | - |
| suffixIcon | 后置icon | String | false | - | - |
| prefixIcon | 前置icon | String | false | - | - |
| showWordLimit | 是否显示输入字数统计 | Boolean | false | - | false |




## event
| 事件名称    | 描述                               | 类型    | 是否必填 | 可选值        | 默认值 |
| :------ | :--------------------------------- | :------ | :------- | :------------ | :----- |
| blur | 在 Input 失去焦点时触发 | - | - | - | - |
| input | 在 Input 值改变时触发 | - | - | - | - |
| change | 在 Input 失去焦点且值发生改变时触发 | - | - | - | - |



