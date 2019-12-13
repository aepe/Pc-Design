<template>
  <div>
    <z-tag v-for="(i, key) in tags"
      :key="key"
      :type="i.type"
      :size="i.size"
      :closable="i.closeable">{{i.title}}</z-tag>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tags: [
          {
            index: 5,
            title: "默认标签",
          },
          {
            index: 1,
            title: "大型标签",
            size: "large",
          },
          {
            index: 2,
            title: "中等标签",
            size: "small",
          },
          {
            index: 3,
            title: "小标签",
            size: "mini",
          },
        ],
      }
    },
  }
</script>