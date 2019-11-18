<!--
 * @Description: 
 * @Version: 0.0.1
 * @Author: 王晓龙
 * @Date: 2019-11-14 15:42:40
 * @LastEditors: 王晓龙
 * @LastEditTime: 2019-11-14 16:24:22
 -->
<template>
  <div class="demo1">
    <z-table :data="list">
      <!-- <z-table-column v-for="(item, index) in list" :key="index"></z-table-column> -->
      <z-table-column></z-table-column>
      <z-table-column></z-table-column>
      <z-table-column></z-table-column>
    </z-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: '小明',
          age: 24,
          job: '工作1',
          address: '地址1地址1地址1地址1地址1地址1地址1地址1地址1地址1地址1'
        },
        {
          name: '小红',
          age: 23,
          job: '工作2',
          address: '地址2地址2地址2地址2地址2地址2地址2地址2地址2地址2地址2'
        }
      ]
    };
  }
};
</script>