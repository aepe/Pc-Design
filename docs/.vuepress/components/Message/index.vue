<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-12 15:13:09
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-13 11:34:31
 -->
<template>
  <div>
    <ZButton type="danger" @click="openMessage('error')">error</ZButton>
    <ZButton type="primary" @click="openMessage('info')">info</ZButton>
    <ZButton type="success" @click="openMessage('success')">success</ZButton>
    <ZButton type="warning" @click="openMessage('warning')">warning</ZButton>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    openMessage(type) {
      this.$ZMessage[type](type);
    }
  },
  mounted() {}
};
</script>>