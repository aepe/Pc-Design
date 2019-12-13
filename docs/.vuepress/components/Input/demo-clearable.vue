<!--
 * @abstract: 
 * @version: 
 * @Author: langxue
 * @Date: 2019-11-12 11:07:52
 * @LastEditors: langxue
 * @LastEditTime: 2019-12-04 14:04:59
 -->
<template>
  <div id="input-demo">
    <z-input type="text"
        clearable
        v-model="value"
          placeholder="请输入内容"
          @clear="handleClear" />
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
    handleClear(e) {
      console.log('清空内容', e);
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