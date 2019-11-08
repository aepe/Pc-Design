<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-07 17:20:23
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-08 09:43:47
 -->
# loading
> 采用vue自定义指令编写该组件，主要功能为

### Who（wpp）
1. 全局loading
2. 盒子内loading
3. 根据指令进行loading
4. 定制化loading 方式 loading样式
5. ...自行发挥

### 1. Loading
#### 效果展示:
<div class="body">
    <zloading />
</div>
<style lang="less">
    .body {
        width: 500px;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(30, 7, 230, 0.3);
    }
</style>

#### 代码展示:
``` html
<div class="body">
    <zloading />
</div>
<style lang="less">
    .body {
        width: 500px;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(30, 7, 230, 0.3);
    }
</style>
```

### 2. Loading 指令 (mt-loading)
#### 效果展示:
<div class="body" mt-loading>
    
</div>
<style lang="less">
    .body {
        width: 500px;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(30, 7, 230, 0.3);
    }
</style>