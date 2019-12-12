<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-12 11:07:52
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-12 11:09:30
 -->
<template>
  <div class="bhabgs-block">
    Icon:
    <ZButton type="success">
      左
      <ZIcon type="xiangzuo" />
    </ZButton>

    <ZButton type="success">
      右
      <ZIcon type="sousuo" />
    </ZButton>
    <ZButton type="warning" icon="success" />

    <ZButton :loading="loading" @click="changeLoading" type="warning" icon="success" />

    <ZIcon type="sousuo" @click="click" />
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      icons: [
        "you",
        "xiangzuo",
        "xiazai",
        "yun",
        "fanhui",
        "success",
        "warning",
        "error",
        "info",
        "sousuo",
        "close"
      ],
      icon: "",
      loading: false
    };
  },
  methods: {
    changeLoading() {
      this.loading = !this.loading;
      setTimeout(() => {
        this.loading = !this.loading;
      }, 5000);
    },
    click() {
      alert(1);
    }
  }
};
</script>
<style lang="stylus" scoped>
.z-button {
  margin-right: 1rem;
}

.bhabgs-block {
  margin-bottom: 1rem;
}

.icon-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
