<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-07 11:49:39
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-07 14:47:41
 -->

# 组件更新信息

<template>
    <div class="demo5">
        <z-timeline :reverse="reverse">
            <z-timeline-item v-for="(item, index) in list" :key="index" :title="item.title">
                <div slot="content" class="custom-summary">
                    <p>{{item.content}}</p>
                </div>
            </z-timeline-item>
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
                    title: 'v1.0.2加入tags组件',
                    content: '',
                },
            ],
        };
    },
};
</script>

<style lang="stylus">

</style>
