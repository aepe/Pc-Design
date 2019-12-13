<template>
  <div>
    <z-tag v-for="(i, key) in tags"
      :key="key"
      :type="i.type"
      :closable="i.closeable"
      @close="handleClose($event, key)">{{i.title}}</z-tag>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tags: [
          {
            index: 5,
            title: "默认",
            closeable: true,
          },
          {
            index: 1,
            title: "成功",
            closeable: true,
            type: "success",
          },
          {
            index: 2,
            title: "信息",
            closeable: true,
            type: "info",
          },
          {
            index: 3,
            title: "错误",
            closeable: true,
            type: "danger",
          },
          {
            index: 4,
            title: "警告",
            closeable: true,
            type: "warning",
          },
        ],
      }
    },
    methods: {
      handleClose(e, key) {
        console.log('close-----', e, key);
      }
    }
  }
</script>