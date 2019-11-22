<!--
 * @abstract: 
 * @version: 
 * @Author: langxue
 * @Date: 2019-11-12 11:07:52
 * @LastEditors: langxue
 * @LastEditTime: 2019-11-22 11:27:45
 -->
<template>
  <div id="input-demo">
    <z-input type="text"
        v-model="value"
        clearable
        ref="input"
        @focus="handleFocus"
        placeholder="请输入内容" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0
    };
  },
  mounted() {
    this.$refs.input.focus();
  },
  methods: {
    handleFocus(e) {
      console.log('focus', e);
    },
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