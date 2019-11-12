<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-12 11:07:52
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-12 13:53:13
 -->
<template>
  <div>
        <ZButton type="sss" disabled>sss</ZButton>

        <ZButton type="primary">primary</ZButton>

        <ZButton type="success" disabled>success</ZButton>

        <ZButton type="warning">warning</ZButton>

        <ZButton type="danger">danger</ZButton>

        <ZButton type="text">text</ZButton>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
</style>