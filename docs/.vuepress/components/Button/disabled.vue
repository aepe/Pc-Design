<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-12 11:07:52
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-28 16:11:44
 -->
<template>
  <div class="bhabgs-block">
    禁用状态：
    <ZButton type="sss" disabled>sss</ZButton>

    <ZButton type="primary" disabled>primary</ZButton>

    <ZButton type="success" disabled>success</ZButton>

    <ZButton type="warning" disabled>warning</ZButton>

    <ZButton type="danger" disabled>danger</ZButton>

    <ZButton type="text" disabled>text</ZButton>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    click(e) {
      console.log(e);
    },
    cusTomChangeShow() {
      this.customMarkShow = true;
      setTimeout(() => {
        this.customMarkShow = false;
      }, 3000);
    }
  }
};
</script>
<style scoped>
.z-button {
  margin-right: 1rem;
}
.bhabgs-block {
  margin-bottom: 1rem;
}
</style>