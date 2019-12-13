<template>
  <div>
    <z-tag v-for="(i, key) in tags"
      :key="key"
      :type="i.type"
      @click="handleClick">{{i.title}}</z-tag>
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
          },
          {
            index: 1,
            title: "成功",
            size: "large",
            type: "success",
          },
          {
            index: 2,
            title: "信息",
            size: "small",
            type: "info",
          },
          {
            index: 3,
            title: "错误",
            size: "mini",
            type: "danger",
          },
          {
            index: 4,
            title: "警告",
            size: "mini",
            type: "warning",
          },
        ],
      }
    },
    methods: {
      handleClick(e) {
        console.log('click-----', e);
      },
    }
  }
</script>
<style lang="stylus">
.z-tag {
  margin-right: 10px;
}
</style>