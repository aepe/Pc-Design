<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-14 14:04:53
 * @LastEditors  : 王晓龙
 * @LastEditTime : 2020-01-16 12:09:46
 -->

# message 消息
::: explain

```js explain
 this.$ZMessage.error(String);
```

:::

## Demo

::: explain 基础用法

<templatePc name="Message-index">

<<< @/docs/.vuepress/components/Message/index.vue

</templatePc>

:::

## API

::: explain message

| 参数         | 描述     | 类型     | 是否必填 | 可选值 | 默认值 |
| :----------- | :------- | :------- | :------- | :----- | :----- |
| arguments[0] | context  | string   | true     |        | 默认   |
| arguments[1] | duration | number   | false    |        | 默认   |
| arguments[2] | onClose  | function | false    |        | 默认   |
:::