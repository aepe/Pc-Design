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
1. 全屏loading
2. 盒子内loading
3. 根据指令进行loading
4. 定制化loading 方式 loading样式
5. ...自行发挥

<script>
    export default {
        data() {
            return {
                visible: false,
            }
        },
        methods: {
            changeShow() {
                this.visible = true;
                setTimeout(()=> {
                    this.visible = false;
                }, 3000)
            }
        }
    }
</script>
### 2. 盒子内loading
#### 效果展示:

<div class="loading">
    <mtloading v-if="visible"/>
    <div class='switch' @click="changeShow">显示</div>
</div>
<style lang='less'>
    .loading{
        margin-top: 30px;
    }
    .switch{
        width: 90px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border: 1px solid #d0d0d0;
        font-size: 16px;
        border-radius: 3px;
        color: #999;
    }
</style>

#### 代码展示:
``` html
<div class="loading">
    <!-- <mtloading/> -->
</div>
<style>
    .loading {
        width: 500px;
        height: 350px;
    }
</style>
```

### 3. Loading 指令 (mt-loading)
#### 效果展示:
<!-- <div class="directives-body" v-mt-loading>123456789</div> -->
<style>
    .directives-body {
        width: 500px;
        height: 350px;
        background: rgba(30, 7, 230, 0.3);
    }
</style>