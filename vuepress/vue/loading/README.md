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
1. loading
2. 根据指令进行loading
3. 定制化loading样式

<script>
    export default {
        data() {
            return {
                markShow: false,
                customMarkShow: false,
            }
        },
        methods: {
            changeShow() {
                this.markShow = true;
                setTimeout(()=> {
                    this.markShow = false;
                }, 3000)
            },
            cusTomChangeShow() {
                this.markShow = true;
                setTimeout(()=> {
                    this.markShow = false;
                }, 3000)
            }
        }
    }
</script>
### 1. loading
#### 效果展示:

<div class="loading">
    <mtloading :markVisible='markShow'/>
    <div class='switch' @click="changeShow">显示</div>
</div>
<style lang='less'>
    .loading{
        margin-top: 30px;
    }
    .switch{
        padding: 12px 35px;
        display: inline-block;
        text-align: center;
        border: 1px solid #d0d0d0;
        font-size: 16px;
        border-radius: 3px;
        color: #999;
        cursor: pointer;
    }
</style>

#### 代码展示:
``` html
<div class="loading">
     <mtloading :markVisible='markShow'/>
</div>
<style>
    .loading {
        margin-top: 30px;
    }
</style>
```

### 2. Loading 指令 (mt-loading)
#### 效果展示:
<div class="directives-body" v-mt-loading></div>
<style>
    .directives-body {
        width: 500px;
        height: 350px;
        background: rgba(30, 7, 230, 0.3);
    }
</style>

#### 代码展示:
``` html
<div class="directives-body" v-mt-loading></div>
<style>
    .directives-body {
        width: 500px;
        height: 350px;
        background: rgba(30, 7, 230, 0.3);
    }
</style>
```

<!-- ### 3. 定制化loading样式
#### 效果展示:
<div class="loading">
    <mtloading :markVisible='customMarkShow'>
        <p>Loading...</p>
    </mtloading>
    <div class='switch' @click="cusTomChangeShow">显示</div>
</div>
<style lang='less'>
    .loading{
        margin-top: 30px;
    }
    .switch{
        padding: 12px 35px;
        display: inline-block;
        text-align: center;
        border: 1px solid #d0d0d0;
        font-size: 16px;
        border-radius: 3px;
        color: #999;
        cursor: pointer;
    }
</style>

#### 代码展示:
``` html
<div class="directives-body" v-mt-loading></div>
<style>
    .directives-body {
        width: 500px;
        height: 350px;
        background: rgba(30, 7, 230, 0.3);
    }
</style>
``` -->