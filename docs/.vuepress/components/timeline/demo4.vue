<template>
  <div class="demo4">
    <z-timeline :reverse="reverse">
      <z-timeline-item
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
        :content="item.content"
      >
        <div slot="dot" class="custom-dot"></div>
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
          content: '内容1'
        },
        {
          title: '标题2',
          content: '内容2'
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
.demo4 {
  .custom-dot {
    background: #f00;
    width: 15px;
    height: 15px;
  }
}
</style>