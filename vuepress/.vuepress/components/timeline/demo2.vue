<template>
    <div class="demo2">
        <z-timeline>
            <z-timeline-item
                v-for="(item, index) in list"
                :key="index"
                :title="item.title"
                :content="item.content"
                :dotColor="item.dotColor"
                :lineColor="item.lineColor"
                :lineType="item.lineType"
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
                },
                {
                    title: '标题2',
                    content: '内容2',
                    dotColor: 'blue',
                    lineColor: 'orange',
                    lineType: 'dashed',
                },
                {
                    title: '标题3',
                    content: '内容3',
                    dotColor: 'red',
                    lineColor: 'green',
                    lineType: 'dotted',
                },
                {
                    title: '标题4',
                    content: '内容4',
                    dotColor: 'gray',
                },
            ],
        };
    },
};
</script>