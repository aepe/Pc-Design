<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-12 14:04:54
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-12 15:50:00
 -->
<template>
  <div>
    <Zloading :visible="markShow" />
    <div class="switch" @click="changeShow">显示</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      markShow: false
    };
  },
  methods: {
    changeShow() {
      this.markShow = true;
      setTimeout(() => {
        this.markShow = false;
      }, 3000);
    }
  }
};
</script>
<style>
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