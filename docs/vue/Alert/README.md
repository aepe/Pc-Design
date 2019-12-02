<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 09:06:17
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-02 17:08:53
 -->

# alert 警告

::: explain

:::

## Demo

::: explain 基础用法

<templateMobile name="alert-demo1">

<<< @/docs/.vuepress/components/alert/demo1.vue

</templateMobile>

:::

::: explain 显示图标

<templatePc name="alert-demo2">

<<< @/docs/.vuepress/components/alert/demo2.vue

</templatePc>

:::

::: explain 不显关闭按钮

<templatePc name="alert-demo3">

<<< @/docs/.vuepress/components/alert/demo3.vue

</templatePc>

:::

::: explain 关闭按钮回调

<templatePc name="alert-demo4">

<<< @/docs/.vuepress/components/alert/demo4.vue

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
