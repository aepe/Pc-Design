<!--
 * @Description:
 * @Version: 0.0.1
 * @Author: 王晓龙
 * @Date: 2019-11-12 10:53:37
 * @LastEditors: 王晓龙
 * @LastEditTime: 2019-12-13 12:13:30
 -->

# timeline 时间轴

::: explain

1. 可自定义时间轴节点 可更改颜色
2. 可更改时间轴线的颜色和类型
3. 可更改时间节点顺序
4. 可自定义时间轴文字内容

:::

## Demo

::: explain 基础用法

<templatePc name="timeline-basic">

<<< @/docs/.vuepress/components/timeline/basic.vue

</templatePc>

:::

::: explain 节点&线样式

<templatePc name="timeline-dotStyle">

<<< @/docs/.vuepress/components/timeline/dotStyle.vue

</templatePc>

:::

::: explain 节点顺序

<templatePc name="timeline-dotSort">

<<< @/docs/.vuepress/components/timeline/dotSort.vue

</templatePc>

:::

::: explain 自定义 dot 插槽

<templatePc name="timeline-dotSlot">

<<< @/docs/.vuepress/components/timeline/dotSlot.vue

</templatePc>

:::

::: explain 自定义内容插槽

<templatePc name="timeline-contentSlot">

<<< @/docs/.vuepress/components/timeline/contentSlot.vue

</templatePc>

:::

## API

::: explain timeline

| 参数    | 描述                               | 类型    | 是否必填 | 可选值        | 默认值 |
| :------ | :--------------------------------- | :------ | :------- | :------------ | :----- |
| reverse | 节点排序方向，默认为 false => 正序 | boolean | false    | true \| false | false  |

:::

::: explain timeline-item

| 参数      | 描述                 | 类型   | 是否必填 | 可选值                          | 默认值  |
| :-------- | :------------------- | :----- | :------- | :------------------------------ | :------ |
| title     | 指定时间轴的标题     | string | false    | -                               | -       |
| content   | 指定时间轴的文字内容 | string | false    | -                               | -       |
| dotColor  | 指定时间轴节点的颜色 | string | false    | -                               | #DCDFE6 |
| lineColor | 指定时间轴线的颜色   | string | false    | -                               | #DCDFE6 |
| lineType  | 指定时间轴线的类型   | string | false    | 'solid' \| 'dashed' \| 'dotted' | 'solid' |

:::

::: explain timeline-item Slots

| 参数    | 描述                 |
| :------ | :------------------- |
| dot     | 自定义时间轴节点     |
| content | 自定义时间轴文字内容 |

:::
