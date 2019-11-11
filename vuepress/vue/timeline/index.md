# 时间轴 `timeline`

::: warning 预计实现功能

1. 默认图标为 ⭕️（可定制修改）
2. 定制化横竖排列
3. 时间轴颜色默认为{color: '颜色可定制', theme: 'dotted' | 'solid'}
4. ...自行发挥

:::

## Demo

-   ### 基础用法

    <templates-demo name="timeline-demo1">
    <<< @/vuepress/.vuepress/components/timeline/demo1.vue
    </templates-demo>

## API

| 参数    | 描述                 | 类型   | 是否必填 | 可选值 | 默认值 |
| :------ | :------------------- | :----- | :------- | :----- | :----- |
| title   | 指定时间轴的标题     | string | true     | -      | -      |
| content | 指定时间轴的内容文字 | string | false    | -      | -      |

## Example

![Example](../../.vuepress/public/timeLine/timeLine.png)
