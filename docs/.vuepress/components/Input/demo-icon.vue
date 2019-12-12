<!--
 * @Descripttion: 
 * @version: 
 * @Author: langxue
 * @Date: 2019-11-14 16:03:05
 * @LastEditors: langxue
 * @LastEditTime: 2019-12-12 11:20:25
 -->
<template>
  <div id="input-demo-icon">
    <div class="attr">
      <strong>属性方式：</strong>
        <z-input type="text"
        suffixIcon="sousuo"
          placeholder="后置icon"
          class="item-input" />
        <z-input type="text"
        placeholder="前置icon"
        prefixIcon="sousuo"
        class="item-input" />
    </div>
    <div class="attr">
      <strong>slot方式：</strong>
      <z-input type="text"
        placeholder="slot 后置icon"
        class="item-input">
        <ZIcon type="sousuo" slot="suffix" />
      </z-input>
      <z-input type="text"
        placeholder="slot 前置icon"
        class="item-input">
        <ZIcon type="sousuo" slot="prefix" />
      </z-input>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      handleClick(e) {
        console.log(e);
      }
    }
  }
</script>
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