<!--
 * @Descripttion: 
 * @version: 
 * @Author: 
 * @Date: 2019-11-14 16:03:05
 * @LastEditors: langxue
 * @LastEditTime: 2019-11-15 12:02:42
 -->
<template>
  <div id="input-demo-icon">
    <div class="attr">
      <strong>属性方式：</strong>
      <z-input type="text"
        placeholder="请输入内容"
        suffixIcon="zxclose"
        class="item-input" />
        <z-input type="text"
        placeholder="请输入内容"
        prefixIcon="zxsousuo"
        class="item-input" />
    </div>
    <!-- <div class="attr">
      <strong>slot方式：</strong>
      <z-input type="text"
        placeholder="请输入内容"
        class="item-input">
        <i slot="suffix" class="iconfont zxclose z-input-suffix-icon"></i>
      </z-input>
        <z-input type="text"
        placeholder="请输入内容"
        prefixIcon="zxsousuo"
        class="item-input" />
    </div> -->
  </div>
</template>
<style lang="stylus">
#input-demo-icon {
  .attr {
    display flex;
    align-items center;
    margin-bottom 20px;
    strong {
      width 80px;
    }
    .item-input {
      width 180px;
      margin-right 20px;
    }
  }
}
</style>