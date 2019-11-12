# zx-util-ui 工具库 docs 文档使用说明

### 基本操作

> 1.首先在 `./.vuepress/config/themeConfig.js` 文件配置好组件对应的 `sidebar`

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

> 2.在 `./vue` 文件夹下新建组件文档文件夹 对应好 _`步骤一`_ 中配置的选项。 在文件夹下新建`index.md`文档。

> 3.在 `./.vuepress/components` 文件夹下新建组件文件夹并在文件夹下新建 `.vue`文件 此文件夹下的组件为示例组件， _(注：此`components`文件夹下的所有`.vue`文件都已经注册为全局组件，可以在 `.md` 和 `.vue` 文件里直接使用)_。

### 如何引入组件示例

> 在文档 `.md` 文件引入自己组件的预览文件。

1.  `template-demo` 组件为 `'./.vuepress/components'` 下建立的预览模板组件，是所有示例组件的父组件，只需引入这个组件并传入示例组件的名称即可。

2.  组件名称为: 以 `./.vuepress/components` 文件夹下的所有文件为准。文件夹名称-文件名称 具体可参考官方使用指南 https://vuepress.vuejs.org/zh/guide/using-vue.html#%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6

3.  `<<< @/vuepress/.vuepress/components/组件的路径.vue` 为代码展示文件，通常和你的组件同为一个文件。

```javascript
// .md
<templates-demo name="组件的名称">
<<< @/vuepress/.vuepress/components/组件的路径.vue
</templates-demo>
```
