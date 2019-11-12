<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-10-29 14:22:46
 * @LastEditors: 王晓龙
 * @LastEditTime: 2019-11-12 10:53:00
 -->

# 美腾科技工厂前端组工具集合

> 美腾科技工厂常用组件开发

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
# 运行
yarn docs:dev / npm run docs:dev
```

## vue 组件

> 组件的开发方案需要在 src/components 建立自己的组件文件夹，以 vue 官网组件开发方式开发即可，支持 tsx 开发方案，组件支持自动引入。

```javascript
// 注意目前组件名定义格式 z-{name} | Z{Name} 名字， {name}为自定义的组件名称
<template>
    <div>test component</div>
</template>

<script>
export default {
    name: 'z-name',
};
</script>

// tsx 组件
export default class ZName extends Vue { }
// ZName 为组件名称 也就是组件调用名称
```

## vue 工具

> 工具的开发方案需要在 src/packages 建立自己的包文件夹，可采用 ts 方案开发，包的到处方案是在包的根目录下建立 index.ts。

## 包格式

> js 组件包以及 util 工具请在 src/packages 下进行开发 导出方案以下为标准

```javascript
// index.ts
export default {
    install: Function,
    name: 'name',
    version: '1.0.0',
};
```

-   [ ] 正在引入单元测试
-   [x] 框架搭建基本完成
-   [x] 加入 vue 编译组件
-   [x] 自动引入组件
