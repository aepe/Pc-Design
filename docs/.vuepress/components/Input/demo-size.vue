<!--
 * @Descripttion: 
 * @version: 
 * @Author: 
 * @Date: 2019-11-14 16:03:05
 * @LastEditors: langxue
 * @LastEditTime: 2019-11-15 11:03:43
 -->
<template>
  <div id="input-demo-size">
    <div class="item">
      <strong>大尺寸：</strong>
      <z-input type="text"
        placeholder="请输入内容"
        suffixIcon="zxclose"
        class="item-input" />
    </div>
    <br />
    <div class="item">
      <strong>中尺寸：</strong>
      <z-input type="text"
        size="small"
        suffixIcon="zxclose"
        placeholder="请输入内容"
        class="item-input" />
    </div>
    <br />
    <div class="item">
      <strong>小尺寸：</strong>
      <z-input type="text"
        size="mini"
        placeholder="请输入内容"
        suffixIcon="zxclose"
        class="item-input" />
    </div>
  </div>
</template>
<style lang="stylus">
#input-demo-size {
  display flex;
  align-items center;
  .item {
    display flex;
    align-items center;
    margin 0 20px 0 0;
    strong {
      font-size 14px;
      color #333;
      width 80px;
    }
    .item-input {
      width 180px;
    }
  }
}
</style>