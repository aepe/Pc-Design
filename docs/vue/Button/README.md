<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 09:06:17
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-13 15:31:25
 -->

# button 组件

> 应用 vue 组件开发方式进行开发

## demo

<templates-demo name="Button-index">
<<< @/docs/.vuepress/components/Button/index.vue
</templates-demo>

## api

| 参数     | 描述                 | 类型    | 是否必填 | 可选值                                      | 默认值        |
| :------- | :------------------- | :------ | :------- | :------------------------------------------ | :------------ |
| type     | 决定按钮标签颜色主题 | string  | 否       | primary / success / warning / danger / text | default（空） |
| disabled | 是否禁用             | Boolean | 否       | disabled                                    | false         |
| size     | 按钮大小             | string  | 否       | medium / small / mini                       | medium        |

### button event

| 事件名称 | 描述     | 类型     | 是否必填 | 可选值   | 默认值 |
| :------- | :------- | :------- | :------- | :------- | :----- |
| @click   | 单击事件 | Function | 否       | Function | null   |
