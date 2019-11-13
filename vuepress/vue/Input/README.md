<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-12 09:06:17
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-12 13:47:43
 -->
# button 组件
> 应用vue组件开发方式进行开发


## 基本应用
<templates-demo name="Input-index">
<<< @/vuepress/.vuepress/components/Input/index.vue
</templates-demo>


## api

| 参数    | 描述                               | 类型    | 是否必填 | 可选值        | 默认值 |
| :------ | :--------------------------------- | :------ | :------- | :------------ | :----- |
| type |  决定按钮标签颜色主题 | string | 否 | primary / success / warning / danger / text  | default（空） |
| disabled |  是否禁用 | Boolean | 否 | disabled | false |
| size |  按钮大小 | string | 否 | medium / small / mini | medium |
