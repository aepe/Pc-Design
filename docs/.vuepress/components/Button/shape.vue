<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-12 11:07:52
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-12 09:30:28
 -->
<template>
  <div class="bhabgs-block">
    其他形状按钮:
    <ZIcon type="success" />
    <ZButton shape="square">默认</ZButton>
    <ZButton type="success" shape="round" icon="success"></ZButton>
    <ZButton type="success" shape="plain">朴素</ZButton>
    <ZButton href="http://www.baidu.com" type="text">百度</ZButton>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
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
