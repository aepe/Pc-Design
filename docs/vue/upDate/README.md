<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-07 11:49:39
 * @LastEditors  : 王晓龙
 * @LastEditTime : 2020-01-16 11:46:50
 -->

# 组件更新信息

<template>
    <div class="demo5">
        <z-timeline :reverse="reverse">
            <z-timeline-item v-for="(item, index) in list" :key="index" :title="item.title" :content="item.content" />
        </z-timeline>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reverse: false,
            list: [
                {
                    title: 'v1.0.1 第一个版本',
                    content: '完善文档与开发方式',
                },
                {
                    title: 'v1.0.2 加入tags组件',
                    content: '',
                },
            ],
        };
    },
};
</script>

<style lang="stylus">
.demo5
    background #fff
    padding 24px;
    border-radius 3px;
    .custom-summary
        border none;
</style>
