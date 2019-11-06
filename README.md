<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-10-29 14:22:46
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-10-29 14:27:52
 -->

# 美腾科技工厂前端组工具集合

> 美腾科技工厂常用的组件开发

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
cd docs

# 安装依赖
yarn / npm install

# 运行
yarn dev / npm run dev

# 打包
yarn build / npm run build
```

## vue 组件

> 组件的开发方案需要在 src/components 建立自己的组件文件夹，以 vue 官网组件开发方式开发即可，支持 tsx 开发方案，组件支持自动引入。

## vue 工具

> 工具的开发方案需要在 src/packages 建立自己的包文件夹，可采用 ts 方案开发，包的到处方案是在包的根目录下建立 index.ts。

## 包格式

> js 组件包以及 util 工具请在 src/packages 下进行开发 导出方案以下为标准

```javascript
// index.ts
export default {
    install: Log,
    name: 'Log',
    version: '1.0.0',
};
```

-   [ ] 正在引入单元测试
-   [x] 框架搭建基本完成
-   [x] 加入 vue 编译组件
-   [x] 自动引入组件
