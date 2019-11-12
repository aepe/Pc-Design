<template>
    <div class="demo5">
        <z-timeline :reverse="reverse">
            <z-timeline-item v-for="(item, index) in list" :key="index" :title="item.title">
                <div slot="content" class="custom-summary">
                    <p>这里是自定义{{item.content}}</p>
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
                    title: '标题1',
                    content: '内容1',
                },
                {
                    title: '标题2',
                    content: '内容2',
                },
            ],
        };
    },
};
</script>

<style lang="stylus">
.demo5 {
    .custom-summary {
        border: 2px solid #f00;
    }
}
</style>