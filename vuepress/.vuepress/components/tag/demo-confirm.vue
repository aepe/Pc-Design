<template>
  <div>
    <z-tag hasConfirm
      confirm-message="关闭标签提示语"
      closable
      :visible="visible"
      @click="handleClick"
      @close="handleClose">关闭提示</z-tag>
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
      handleClick(e) {
        console.log('click-----', e);
      },
      handleClose(e) {
        this.visible = !e;
        console.log('close-----', e);
      }
    }
  }
</script>