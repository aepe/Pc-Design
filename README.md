<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-10-29 14:22:46
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-10-29 14:27:52
 -->
# 美腾科技工厂前端组工具集合

> 工具开发方案需在src/packages 建立自己的包文件夹，可采用ts方案开发, 包的到处方案是在包的根目录下建立index.ts 方便后期采用自动引入方案。

## 运行
``` cmd
    //打包
    yarn build / npm run build

    //运行
    yarn dev -- 开启开发组件库源码检测
    cd docs下 运行 yarn dev 开启vue 运行环境
```


## vue组件
> vue组件需要在 src/components 下按目录结构开发 以vue官网组件开发方式开发即可

## 包格式
> js 组件包以及 util工具请在src/packages 下进行开发 导出方案以下为标准
 ``` javascript
    // index.ts
    export default {
        install: Log,
        name: 'Log',
        version: '1.0.0'
    }
 ```

- [ ] 正在引入单元测试
- [x] 框架搭建基本完成
- [x] 加入vue 编译组件