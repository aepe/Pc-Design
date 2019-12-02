<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-21 16:41:08
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-29 11:25:17
 -->
<template>
  <div>
    <div class="tagBox">
      <z-tag :visible="visible" :closable="true" @close="handleClick"
        >movies...</z-tag
      >
    </div>
    <z-button type="primary" size="small" @click="handleClick">toggle</z-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true
    };
  },
  methods: {
    handleClick() {
      this.visible = !this.visible;
    }
  }
};
</script>
<style lang="stylus">
.tagBox
  margin-bottom 10px;
  height 50px;
</style>
