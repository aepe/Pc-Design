<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-07 17:20:23
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-08 09:44:44
 -->
# tag
> 采用vue组件编写方案 可使用.vue,与tsx延续方案

### Who（lx）

1. tag颜色定制
2. tag 大小 size、large、small、mini  默认：large
3. 可删除tag
4. 删除是否需要确认
5. ...自行发挥

## Demo

-   ### 基础用法

    <templates-demo name="tag-demo">
    <<< @/vuepress/.vuepress/components/tag/demo.vue
    </templates-demo>

-  ### 可关闭

    <templates-demo name="tag-demo-close">
    <<< @/vuepress/.vuepress/components/tag/demo-close.vue
    </templates-demo>

-  ### 可选尺寸

    <templates-demo name="tag-demo-size">
    <<< @/vuepress/.vuepress/components/tag/demo-size.vue
    </templates-demo>

-  ### 切换tag的显示状态

    <templates-demo name="tag-demo-visible">
    <<< @/vuepress/.vuepress/components/tag/demo-visible.vue
    </templates-demo>

-  ### 可选主题

    <templates-demo name="tag-demo-theme">
    <<< @/vuepress/.vuepress/components/tag/demo-theme.vue
    </templates-demo>


## API

Attributes
| 参数    | 描述                 | 类型   | 是否必填 | 可选值 | 默认值 |
| :------ | :------------------- | :----- | :------- | :----- | :----- |
| size   | 尺寸     | string | false     | large、small、mini      | -     |
| closable | 是否可关闭 | boolean | false    | -      | false      |
| isVisible | 是否显示 | boolean | false    | -      | true      |
| type | 类型 | string | false    | success、info、warning、danger       |  info    |
| theme | 类型 | string | false    | fill、plain       |  plain    |

Events
| 事件名称    | 描述                 | 回调参数   |
| :------ | :------------------- | :----- | :------- | :----- | :----- |
| click    | 点击Tag时触发的事件                 | -   |
| close    | 关闭Tag时触发的事件                 | -   |
</script>


