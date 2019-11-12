<template>
    <div class="demo1">
        <z-timeline>
            <z-timeline-item v-for="(item, index) in list" :key="index" :title="item.title" />
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
                },
                {
                    title: '标题2',
                },
            ],
        };
    },
};
</script>