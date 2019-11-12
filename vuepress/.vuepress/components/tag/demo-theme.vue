<template>
  <div id="themeDemo">
    <div class="fill">
      <span class="theme-demo-title"> fill: </span>
      <z-tag v-for="(i, key) in tags"
        :key="key"
        :type="i.type"
        :theme="i.theme"
        @click="handleClick"
        @close="handleClose">{{i.title}}</z-tag>
    </div>
    <div class="plain">
      <span class="theme-demo-title"> plain: </span>
      <z-tag v-for="(i, key) in tags2"
        :key="key"
        :type="i.type"
        :theme="i.theme"
        @click="handleClick"
        @close="handleClose">{{i.title}}</z-tag>
    </div>
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
            theme: 'fill',
          },
          {
            index: 1,
            title: "成功",
            theme: 'fill',
            type: "success",
          },
          {
            index: 2,
            title: "信息",
            theme: 'fill',
            type: "info",
          },
          {
            index: 3,
            title: "错误",
            theme: 'fill',
            type: "danger",
          },
          {
            index: 4,
            title: "警告",
            theme: 'fill',
            type: "warning",
          },
        ],
        tags2: [
          {
            index: 5,
            title: "默认",
            theme: 'plain',
          },
          {
            index: 1,
            title: "成功",
            theme: 'plain',
            type: "success",
          },
          {
            index: 2,
            title: "信息",
            theme: 'plain',
            type: "info",
          },
          {
            index: 3,
            title: "错误",
            theme: 'plain',
            type: "danger",
          },
          {
            index: 4,
            title: "警告",
            theme: 'plain',
            type: "warning",
          },
        ],
      }
    },
    methods: {
      handleClick(e) {
        console.log('click-----', e);
      },
      handleClose(e) {
        console.log('close-----', e);
      }
    }
  }
</script>
<style lang="stylus">
#themeDemo
  div
    margin-bottom 10px;
  .theme-demo-title
    display inline-block;
    width 40px;
</style>