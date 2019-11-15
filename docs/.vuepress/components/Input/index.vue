<!--
 * @abstract: 
 * @version: 
 * @Author: langxue
 * @Date: 2019-11-12 11:07:52
 * @LastEditors: langxue
 * @LastEditTime: 2019-11-15 14:58:59
 -->
<template>
  <div id="input-demo">
    <z-input type="text"
        :value="inputText"
          placeholder="请输入内容"
          @blur="handleBlur"
          @input="handleInput"
          @change="handleChange" />
          <span>{{inputText}}</span>
    <br />
    <z-input type="password"
          placeholder="请输入密码" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputText: ''
    };
  },
  methods: {
    handleBlur(e) {
      console.log('blur', e);
    },
    handleInput(e) {
      console.log('input', e);
    },
    handleChange(e) {
      console.log('change', e);
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