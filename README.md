<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-06 16:37:55
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-14 12:21:58
 -->
<!-- # 组件使用指南 -->

<p style="color: red; font-size: 50px; text-align:center; padding-top: 5rem;">
    我们不是vue的开发者，我们只是vue的搬运工
</p>

## 开发者须知
> 该框架既定名称为zx-util-ui less 存在层级关系，父级别定义的变量 通过`@import`能够 集成到子级别引用
> 1. 框架前缀名称要求 
> 2. `style class` 类名为**z**开头 `例：z-button`
> 3. `.tsx` 组件名称 class类 为大写的Z开头 `例: ZButton`
> 4. 组件文件夹命名 首字母应大写 `例: Button`
> 5. 主题颜色存放在src/styles/theme/default.less
> 6. iconfont 在index.less 下引入 每次更新图标后请及时更换在线地址
> 7. `@ActiveColor` 为默认主色调
> 8. eslint 配置禁止任何人更改 如代码有要求更改，请及时协商更改 `eslintignore、eslintrc.js、 .babelrc`

## git 使用流程

### clone
``` bash
git clone url;
```
### 提交操作
#### 提交至暂存区
`git add -A`：提交所有被删除、被替换、被修改和新增的文件到数据暂存区 <br/>
`git add .`：提交所有修改的和新建的数据暂存区 <br/>
`git add files`：按文件提交至暂存区 <建议> <br/>

#### 创建commit-id
使用 `git add files` 给不同的修改文件创建不同的commit-id(美观)

#### 更新其他子分支代码到本地分支
1. `git fetch origin master`: 更新至本地分支
2. `git log -p FETCH_HEAD`: 查看更新内容 <可忽略>
3. `git merge FETCH_HEAD` : 将拉取下来的最新内容合并到当前所在的分支中
#### 把本地分支代码提交至远程分支
`git push origin branch`
`git push`

## 运行组件库

```bash
# 安装依赖
yarn / npm install

# 运行
yarn dev / npm run dev

# 打包
yarn build / npm run build
```

## 运行 docs 文档

```bash
# 进入
yarn docs:dev / npm run docs:dev
```



## vue 组件

> 组件的开发方案需要在 src/components 建立自己的组件文件夹，以 vue 官网组件开发方式开发即可，支持 tsx 开发方案，组件支持自动引入。
``` javascript
// 注意组件定义格式目前组件名字应为 z-{any} 名字
<template>
    <div>test component</div>
<template>
<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>
// tsx 组件
export default class Zui extends {

}
// Zui 为组件名称 也就是组件调用名称
```

## vue 工具

> 工具的开发方案需要在 src/packages 建立自己的包文件夹，可采用 ts 方案开发，包的到处方案是在包的根目录下建立 index.ts。

1. 

## style 格式

> 类名定义前缀全部以z开头
> 1. 避免与其他框架名字重复
> 2. 方便统一修改
> 3. 框架统一性


![主题样式默认颜色](./.vuepress/public/default.style.png)
``` less
.z-button{

}
.z-{any} {

}
```
## zx-util-ui 工具库 docs 文档使用说明

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
