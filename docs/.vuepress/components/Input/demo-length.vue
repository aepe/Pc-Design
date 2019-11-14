<!--
 * @Descripttion: 
 * @version: 
 * @Author: 
 * @Date: 2019-11-14 16:03:05
 * @LastEditors: langxue
 * @LastEditTime: 2019-11-14 17:07:31
 -->
<template>
  <div id="input-demo-length">
    <z-input type="text"
          placeholder="请输入内容"
          :max="5"
          :min="2" />
  </div>
</template>
<style lang="stylus">
#input-demo-length {
  width 180px;
}
</style>