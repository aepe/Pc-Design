# 时间轴 `timeline`

::: warning 预计实现功能

1. 默认图标为 ⭕️（可定制修改）
2. 定制化横竖排列
3. 时间轴颜色默认为{dotColor: '颜色可定制', lineType: 'solid' | 'dashed' | 'dotted' }
4. ...自行发挥

:::

## Demo

-   ### 基础用法

    <templates-demo name="timeline-demo1">
    <<< @/vuepress/.vuepress/components/timeline/demo1.vue
    </templates-demo>

-   ### 节点&线样式

    <templates-demo name="timeline-demo2">
    <<< @/vuepress/.vuepress/components/timeline/demo2.vue
    </templates-demo>

-   ### 顺序

    <templates-demo name="timeline-demo3">
    <<< @/vuepress/.vuepress/components/timeline/demo3.vue
    </templates-demo>

## API

-   ### timeline

    | 参数    | 描述                               | 类型    | 是否必填 | 可选值        | 默认值 |
    | :------ | :--------------------------------- | :------ | :------- | :------------ | :----- |
    | reverse | 节点排序方向，默认为 false => 正序 | boolean | false    | true \| false | false  |

-   ### timeline-item

    | 参数      | 描述                 | 类型   | 是否必填 | 可选值                          | 默认值  |
    | :-------- | :------------------- | :----- | :------- | :------------------------------ | :------ |
    | title     | 指定时间轴的标题     | string | true     | -                               | -       |
    | content   | 指定时间轴的内容文字 | string | false    | -                               | -       |
    | dotColor  | 指定时间轴节点的颜色 | string | false    | -                               | #DCDFE6 |
    | lineColor | 指定时间轴线的颜色   | string | false    | -                               | #DCDFE6 |
    | lineType  | 指定时间轴线的类型   | string | false    | 'solid' \| 'dashed' \| 'dotted' | 'solid' |

<!-- ## Example

![Example](../../.vuepress/public/timeLine/timeLine.png) -->
