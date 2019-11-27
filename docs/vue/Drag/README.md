<!--
 * @abstract:
 * @version:
 * @Author: wpp
 * @Date: 2019-11-07 17:20:23
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-26 10:57:20
 -->

# Drag

::: warning 预计实现功能

1.  Drag

:::

## 代码演示

### Drag 效果展示

<templates-demo name="Drag-demo">
<<< @/docs/.vuepress/components/Drag/demo.vue
</templates-demo>

### Drag 指令（ZDrag）

<templates-demo name="Drag-directivesDemo">
<<< @/docs/.vuepress/components/Drag/directivesDemo.vue
</templates-demo>

## Event

| 参数            | 描述           | 类型     | 是否必填 | 可选值 | 默认值 |
| :-------------- | :------------- | :------- | :------- | :----- | :----- |
| getMovePosition | 获取拖拽的位置 | function | false    | -      | -      |
