<!--
 * @abstract: 
 * @version: 
 * @Author: langxue
 * @Date: 2019-11-12 11:07:52
 * @LastEditors: langxue
 * @LastEditTime: 2019-12-13 17:06:58
 -->
<template>
  <div id="input-demo">
    <z-input type="text"
        placeholder="请输入内容"
        v-model="value"
        @change="handleChange"
        @input="handleInput"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    };
  },
  methods: {
    handleChange(e) {
      console.log('change：', e);
    },
    handleInput(e) {
      console.log('input：', e);
    }
  }
};
</script>
<style lang="stylus">
#input-demo {
  width 180px;
  display flex;
  flex-direction column;
}
</style>