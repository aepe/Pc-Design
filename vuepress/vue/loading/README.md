<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-07 17:20:23
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-08 09:43:47
 -->
# Loading

::: warning 预计实现功能

1. loading
2. 根据指令进行loading
3. 定制化loading样式

:::

## loading

-   ### 效果展示:

    <templates-demo name="loading-loadingDemo">
    <<< @/vuepress/.vuepress/components/loading/loadingDemo.vue
    </templates-demo>


## Loading 指令 (mt-loading)

-   ### 效果展示:

    <templates-demo name="loading-directivesDemo">
    <<< @/vuepress/.vuepress/components/loading/directivesDemo.vue
    </templates-demo>


## 定制化loading样式

-   ### 效果展示:

    <templates-demo name="loading-customLoadingDemo">
    <<< @/vuepress/.vuepress/components/loading/customLoadingDemo.vue
    </templates-demo>

## API

| 参数            | 描述                 | 类型    | 是否必填 | 可选值          | 默认值                   |
| :---------------| :-------------------| :-------| :------- | :--------------| :---------------------- |
| dotBackground   | 豆豆背景颜色         | string  | false    | -              | #333                    |
| markBackground  | 遮罩层背景颜色       | string  | false    | -              | rgba(119, 111, 111, .7)'|
| visible         | 显示隐藏             | boolean  | false   | true/false     | false                   |
| fullScreen      | 全屏还是模块内       | boolean  | false   | true/false     | true                     |