<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-28 16:09:05
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-28 16:10:48
 -->
<template>
  <div class="bhabgs-block">
    不同大小：
    <z-button size="medium" type="danger">最大</z-button>

    <z-button type="primary">默认</z-button>

    <z-button type="success" size="small">中等</z-button>

    <z-button type="warning" size="mini">最小</z-button>
  </div>
</template>
<style scoped>
.z-button {
  margin-right: 1rem;
}
.bhabgs-block {
  margin-bottom: 1rem;
}
</style>