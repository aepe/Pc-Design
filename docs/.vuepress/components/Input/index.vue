<!--
 * @abstract: 
 * @version: 
 * @Author: langxue
 * @Date: 2019-11-12 11:07:52
 * @LastEditors: langxue
 * @LastEditTime: 2019-11-18 09:34:18
 -->
<template>
  <div id="input-demo">
    <z-input type="text"
        v-model="value"
        placeholder="请输入内容"
        @blur="handleBlur"
        @input="handleInput"
        @change="handleChange" />
        <span>{{value}}</span>
    <br />
    <z-input type="password"
          placeholder="请输入密码" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0
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