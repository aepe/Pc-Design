<template>
    <div class="demo-template">
        <div class="view-example">
            <component :is="name"></component>
        </div>
        <div class="code-example">
            <div class="code-content" v-show="isShow">
                <slot></slot>
            </div>
            <div class="code-btn" @click="showCode()">
               {{ isShow ? '隐藏' : '显示' }}代码 {{ `<${ isShow ? '/' : ' ' }>` }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'demoTemplate',
    props: {
        name: {
            required: true,
            type: String,
        },
    },
    data() {
        return {
            isShow: false,
        };
    },
    methods: {
        showCode() {
            this.isShow = !this.isShow;
        },
    },
};
</script>

<style lang="stylus">
.demo-template {
    border: 1px solid #eee;
    border-radius: 5px;
    overflow: hidden;
    .view-example {
        padding: 20px 40px;
        border-bottom: 1px solid #eee;
    }
    .code-btn {
        text-align: center;
        cursor: pointer;
        padding: 5px;
        &:hover{
            background-color: #f9fafc;
            transition: all .3s;
            button{
                color: #000;
                transition: all .3s;
            }
        }
    }
}

.demo-template .code-example .code-content div[class*='language-'] pre,
.demo-template .code-example .code-content div[class*='language-'] pre[class*='language-'] {
    margin: 0;
}
</style>