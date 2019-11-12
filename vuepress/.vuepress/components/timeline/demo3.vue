<template>
    <div class="demo3">
        <z-timeline :reverse="reverse">
            <z-timeline-item
                v-for="(item, index) in list"
                :key="index"
                :title="item.title"
                :content="item.content"
            />
        </z-timeline>
        <button @click="toggleReverse()">toggle reverse</button>
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
                {
                    title: '标题3',
                    content: '内容3',
                },
            ],
        };
    },
    methods: {
        toggleReverse() {
            this.reverse = !this.reverse;
        },
    },
};
</script>