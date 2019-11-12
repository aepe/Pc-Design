<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-07 17:20:23
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-08 09:44:44
 -->
# tag
> 进行标记和分类的小标签。

::: warning 预计实现功能

1. tag 大小改变：large、small、mini  默认：large
2. tag可关闭
3. tag主题定制
4. 删除是否需要确认
5. ...自行发挥
6. 与checkbox同类功能的复选标签

:::

## 代码演示

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

-  ### 关闭确认

    <templates-demo name="tag-demo-confirm">
    <<< @/vuepress/.vuepress/components/tag/demo-confirm.vue
    </templates-demo>
    
-  ### 可多选标签-类似于checkbox效果

    <templates-demo name="tag-demo-check-tag">
    <<< @/vuepress/.vuepress/components/tag/demo-check-tag.vue
    </templates-demo>


## API

### tag

Attributes
| 参数    | 描述                 | 类型   | 是否必填 | 可选值 | 默认值 |
| :------ | :------------------- | :----- | :------- | :----- | :----- |
| size   | 尺寸     | string | false     | large、small、mini      | -     |
| closable | 是否可关闭 | boolean | false    | -      | false      |
| visible | 是否显示 | boolean | false    | -      | true      |
| type | 类型 | string | false    | success、info、warning、danger       |  info    |
| theme | 主题 | string | false    | fill、plain       |  plain    |
| hasConfirm | 是否关闭标签提示 | boolean | false    | -       |  false    |
| confirm-message | 关闭标签提示语 | string | false    | -       |  确认关闭标签么？    |

Events
| 事件名称    | 描述                 | 回调参数   |
| :------ | :------------------- | :----- | :------- | :----- | :----- |
| click    | 点击Tag时触发的事件                 | -   |
| close    | 关闭Tag时触发的事件                 | -   |

### check-tag
Attributes
| 参数    | 描述                 | 类型   | 是否必填 | 可选值 | 默认值 |
| :------ | :------------------- | :----- | :------- | :----- | :----- |
| checked(v-model) | 设置标签的选中状态	 | boolean | false    | -       |  false    |

Events
| 事件名称    | 描述                 | 回调参数   |
| :------ | :------------------- | :----- | :------- | :----- | :----- |
| change    | 改变tag时触发的回调                 | (checked) => void   |
</script>


