<!--
 * @abstract: 控制标签显示或隐藏状态
 * @version: 0.0.1
 * @Author: langxue
 * @Date: 2019-11-21 16:41:08
 * @LastEditors: langxue
 * @LastEditTime: 2019-12-13 11:47:52
 -->
<template>
  <div id="Tagvisible">
    <div class="tagBox">
      <z-tag :visible="visible">控制visible</z-tag>
    </div>
    <z-button type="primary" size="small" @click="handleClick">toggle</z-button>
    <p>通过 visible 属性控制显示或隐藏状态。</p>
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
#Tagvisible
  .tagBox
    margin-bottom 10px;
    height 40px;
  .z-button
    border-radius 4px;
  p
    line-height 4;
  
</style>
