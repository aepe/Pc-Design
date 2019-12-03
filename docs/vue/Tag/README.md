<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-07 17:20:23
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-29 11:06:47
 -->

# tag 标签

::: explain

```vue explain
<template>
  <z-tag>tag</z-tag>
</template>
```

:::

## Demo

::: explain 基础用法

<templatePc name="tag-demo">

<<< @/docs/.vuepress/components/tag/demo.vue

</templatePc>

:::

::: explain 可关闭

<templatePc name="tag-demo-close">

<<< @/docs/.vuepress/components/tag/demo-close.vue

</templatePc>

:::

::: explain 可选尺寸

<templatePc name="tag-demo-size">

<<< @/docs/.vuepress/components/tag/demo-size.vue

</templatePc>

:::

::: explain 切换 tag 的显示状态

<templatePc name="tag-demo-visible">

<<< @/docs/.vuepress/components/tag/demo-visible.vue

</templatePc>

:::

::: explain 可选主题

<templatePc name="tag-demo-theme">

<<< @/docs/.vuepress/components/tag/demo-theme.vue

</templatePc>

:::

::: explain 关闭确认

<templatePc name="tag-demo-confirm">

<<< @/docs/.vuepress/components/tag/demo-confirm.vue

</templatePc>

:::  
 ::: explain 可多选标签-类似于 checkbox 效果

<templatePc name="tag-demo-check-tag">

<<< @/docs/.vuepress/components/tag/demo-check-tag.vue

</templatePc>

:::

## API

::: explain tag

| Attributes      | 参数             | 描述    | 类型  | 是否必填                       | 可选值           | 默认值 |
| :-------------- | :--------------- | :------ | :---- | :----------------------------- | :--------------- | ------ |
| size            | 尺寸             | string  | false | large、small、mini             | -                |
| closable        | 是否可关闭       | boolean | false | -                              | false            |
| visible         | 是否显示         | boolean | false | -                              | true             |
| type            | 类型             | string  | false | success、info、warning、danger | info             |
| theme           | 主题             | string  | false | fill、plain                    | plain            |
| hasConfirm      | 是否关闭标签提示 | boolean | false | -                              | false            |
| confirm-message | 关闭标签提示语   | string  | false | -                              | 确认关闭标签么？ |

:::

::: explain tag Events

| Events | 事件名称              | 描述 | 回调参数 |
| :----- | :-------------------- | :--- | :------- |
| click  | 点击 Tag 时触发的事件 | -    |
| close  | 关闭 Tag 时触发的事件 | -    |

:::

::: explain check-tag

| Attributes       | 参数               | 描述    | 类型  | 是否必填 | 可选值 | 默认值 |
| :--------------- | :----------------- | :------ | :---- | :------- | :----- | ------ |
| checked(v-model) | 设置标签的选中状态 | boolean | false | -        | false  |

:::

::: explain check-tag Events

| Events | 事件名称              | 描述              | 回调参数 |
| :----- | :-------------------- | :---------------- | :------- |
| change | 改变 tag 时触发的回调 | (checked) => void |

:::
