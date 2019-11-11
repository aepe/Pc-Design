<template>
    <div class="demo-template">
        <div class="view-example">
            <component :is="name"></component>
        </div>
        <div class="code-example">
            <div class="code-btn">
                <button
                    @click="showCode()"
                >{{ isShow ? '隐藏' : '显示' }}代码 {{ `<${ isShow ? '/' : ' ' }>` }}</button>
            </div>
            <div class="code-content" v-show="isShow">
                <slot></slot>
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

<style>
.demo-template {
    border: 1px solid #eee;
    border-radius: 5px;
    overflow: hidden;
}
.demo-template .view-example {
    padding: 20px 40px;
    border-bottom: 1px solid #eee;
}
.demo-template .code-example .code-btn {
    text-align: right;
    padding: 5px;
}
.demo-template .code-example .code-btn button {
    width: 120px;
    padding: 10px 0;
    border: none;
    background: #272b34;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    color: #dcdfe6;
}
.demo-template .code-example .code-content div[class*='language-'] pre,
.demo-template .code-example .code-content div[class*='language-'] pre[class*='language-'] {
    margin: 0;
}
</style>