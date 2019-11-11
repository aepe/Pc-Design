# zx-util-ui 工具库 docs 文档使用说明

> 首先在 `./.vuepress/config/themeConfig.js` 配置好 `sidebar` 自己组件的 `item`

```javascript
const themeConfig = {
    ...
    sidebar: {
        '/vue/': [
            ...
            ['custom/', 'customComponent'] // 你的组件配置项
        ],
    },
    ...
};
exports.themeConfig = themeConfig;
```

> 在 `./.vuepress/components` 文件夹下新建自己的组件文件夹并新建 `.vue`文件， _(注：此文件夹下的所有`.vue`文件都已经注册为全局组件)_。

> 在 `./vue` 下新建自己的组件文档文件夹 对应在 _`步骤一`_ 中配置的选项。 在文件夹下新建`index.md`文件。

> 在 `markdown` 文件引入自己组件的预览文件。

```javascript
/**
 * template-demo为 './.vuepress/components'下建立的.vue组件
 * 组件名称为: 文件夹名称-文件名称
 * <<< @/vuepress/.vuepress/components/你组件的路径.vue 为代码展示文件 通常和你的组件同为一个文件
 */
<templates-demo name="你组件的名称">
<<< @/vuepress/.vuepress/components/你组件的路径.vue
</templates-demo>
```
