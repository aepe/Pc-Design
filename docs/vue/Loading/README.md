<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-07 17:20:23
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-02 14:32:06
 -->

# lading 加载

::: explain 预计实现功能

1. loading
2. 根据指令进行 loading
3. 定制化 loading 样式

:::

## Demo

::: explain 基础用法

<templatePc name="loading-loadingDemo">

<<< @/docs/.vuepress/components/loading/loadingDemo.vue

</templatePc>

:::

::: explain Loading 指令 (Zloading)

<templatePc name="loading-directivesDemo">

<<< @/docs/.vuepress/components/loading/directivesDemo.vue

</templatePc>

:::

::: explain 定制化 loading 样式

<templatePc name="loading-customLoadingDemo">

<<< @/docs/.vuepress/components/loading/customLoadingDemo.vue

</templatePc>

:::

## API

::: explain loading

| 参数           | 描述           | 类型    | 是否必填 | 可选值     | 默认值                  |
| :------------- | :------------- | :------ | :------- | :--------- | :---------------------- |
| dotBackground  | 豆豆背景颜色   | string  | false    | -          | #333                    |
| markBackground | 遮罩层背景颜色 | string  | false    | -          | rgba(119, 111, 111, .7) |
| visible        | 显示隐藏       | boolean | false    | true/false | false                   |
| fullScreen     | 全屏还是模块内 | boolean | false    | true/false | true                    |

:::
