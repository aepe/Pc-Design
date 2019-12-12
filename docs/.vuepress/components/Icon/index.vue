<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-12 11:07:52
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-12 15:29:08
 -->
<template>
  <div class="bhabgs-block">
    Icon:
    <div class="icons">
      <div class="icon-box" v-for="i in icons" @click="changeIcon(i)">
        <ZIcon :type="i" />
      </div>
    </div>
    <textarea v-model="icon" cols="30" rows="10" id="textarea"></textarea>
  </div>
</template>
<script>
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
      icon: ""
    };
  },
  methods: {
    changeIcon(item) {
      this.icon = `<ZIcon type="${item}"/>`;
      this.$nextTick(() => {
        const text = document.getElementById("textarea");
        text.select();
        document.execCommand("Copy");
        this.$ZMessage.error(this.icon);
      });
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

textarea {
  width: 1px;
  height: 1px;
  left: -100px;
  position: absolute;
}

.icons {
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  .icon-box {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 9px 8px;
    height: 137px;
    position: relative;
    border: 1px solid #4498f0;
    cursor: pointer;

    i {
      font-size: 2rem;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.3s;
      right: 0;
      bottom: 0;
    }

    &:hover {
      &:before {
        opacity: 0.3;
        background-color: #c9e4ff;
      }
    }
  }
}
</style>
