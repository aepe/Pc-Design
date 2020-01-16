<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 09:06:17
 * @LastEditors  : 王晓龙
 * @LastEditTime : 2020-01-16 12:14:07
 -->

# alert 警告

::: explain

1. 四种风格的警告弹框 支持手动关闭
2. 支持图标

:::

## Demo

::: explain 基础用法

<templatePc name="alert-basic">

<<< @/docs/.vuepress/components/alert/basic.vue

</templatePc>

:::

::: explain 显示图标

<templatePc name="alert-showIcon">

<<< @/docs/.vuepress/components/alert/showIcon.vue

</templatePc>

:::

::: explain 隐藏关闭按钮

<templatePc name="alert-hideClose">

<<< @/docs/.vuepress/components/alert/hideClose.vue

</templatePc>

:::

::: explain 关闭按钮回调

<templatePc name="alert-closeCb">

<<< @/docs/.vuepress/components/alert/closeCb.vue

</templatePc>

:::

## API

::: explain alert

| 参数      | 描述             | 类型    | 是否必填 | 可选值                                      | 默认值 |
| :-------- | :--------------- | :------ | :------- | :------------------------------------------ | :----- |
| title     | 警告标题         | string  | true     | -                                           | -      |
| type      | 警告类型         | string  | false    | 'info' \| 'success' \| 'warning' \| 'error' | 'info' |
| showIcon  | 是否显示图标     | boolean | false    | true \| false                               | false  |
| showClose | 是否显示关闭按钮 | boolean | false    | true \| false                               | true   |

:::

::: explain alert Events

| 参数  | 描述                        | 回调参数       | 返回值 |
| :---- | :-------------------------- | :------------- | :----- |
| close | 关闭 alert 时触发的回调事件 | (e:MouseEvent) | void   |

:::
