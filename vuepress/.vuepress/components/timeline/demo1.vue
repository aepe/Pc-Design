<template>
    <div class="demo1">
        <button style="margin-bottom: 30px;" @click="changeListData">Change list data</button>
        <z-timeline>
            <z-timeline-item
                v-for="(item, index) in list"
                :key="index"
                :title="item.title"
                :content="item.content"
                :color="item.color"
            />
        </z-timeline>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    title: '标题1',
                    content: '内容1',
                    color: 'red',
                },
                {
                    title: '标题2',
                    content: '内容2',
                    color: 'blue',
                },
            ],
        };
    },
    methods: {
        changeListData() {
            this.list[0].title = '标题1改变了';
        },
    },
};
</script>