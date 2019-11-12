<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-12 14:04:54
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-12 15:49:52
 -->
<template>
  <div>
    <Zloading :visible="customMarkShow">
      <p class="loading-style">Loading...</p>
    </Zloading>
    <div class="switch" @click="cusTomChangeShow">显示</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      customMarkShow: false
    };
  },
  methods: {
    cusTomChangeShow() {
      this.customMarkShow = true;
      setTimeout(() => {
        this.customMarkShow = false;
      }, 3000);
    }
  }
};
</script>
<style>
.loading-style{
  color: #fff;
}
.switch {
  padding: 6px 35px;
  display: inline-block;
  text-align: center;
  border: 1px solid #d0d0d0;
  font-size: 16px;
  border-radius: 3px;
  color: #999;
  cursor: pointer;
}
</style>