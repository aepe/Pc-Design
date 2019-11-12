<template>
  <div>
    <div class="tagBox">
      <z-tag :isVisible="visible"
        :closable="true"
        @close="handleClick">movies...</z-tag>
    </div>
    <button @click="handleClick">切换tag的显示状态</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: true
      }
    },
    methods: {
      handleClick() {
        this.visible = !this.visible;
      },
    }
  }
</script>
<style lang="stylus">
.tagBox
  margin-bottom 10px;
  height 50px;
</style>