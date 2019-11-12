<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-06 16:37:55
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-12 16:35:05
 -->
<!-- # 组件使用指南 -->

<p style="color: red; font-size: 50px; text-align:center; padding-top: 5rem;">
    我们不是vue的开发者，我们只是vue的搬运工
</p>


## 资源地址
[在线文档](http://bhabgs.com/docs/)
## 开发者须知
> 该框架既定名称为zx-util-ui less 存在层级关系，父级别定义的变量 通过`@import`能够 集成到子级别引用
> 1. 框架前缀名称要求 
> 2. `style class` 类名为**zx**开头 `例：zx-button`
> 3. `.tsx` 组件名称 class类 为大写的Z开头 `例: ZButton`
> 4. 组件文件夹命名 首字母应大写 `例: Button`
> 5. 主题颜色存放在src/styles/theme/default.less
> 6. iconfont 在index.less 下引入 每次更新图标后请及时更换在线地址

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


``` less
.z-button{

}
.z-{any} {

}
```