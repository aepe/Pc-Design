<!--
 * @abstract: 关闭标签时提示语
 * @version: 0.0.1
 * @Author: langxue
 * @Date: 2019-11-21 16:41:08
 * @LastEditors: langxue
 * @LastEditTime: 2019-12-13 11:48:09
 -->
<template>
  <div id="Tag">
    <z-tag
      v-for="(i, index) in tags"
      :key="index"
      hasConfirm
      confirm-message="关闭标签提示语"
      closable
      @close="handleClose(i, $event)"
      >{{ i }}</z-tag
    >
    <z-input ref="input"
      class="tag-input"
      v-model="inputText"
      v-if="isShowInput"
      @blur="handleBlurInput"></z-input>
    <ZButton
      type="primary"
      class="tag-btn"
      size="mini"
      v-if="!isShowInput"
      @click.native="handleBtn"
      >+ add Tag</ZButton
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      tags: ["标签一", "标签二"],
      isShowInput: false,
      inputText: ""
    };
  },
  methods: {
    handleClose(obj, e) {
      if (e.conf) {
        const tags = this.tags.filter(tag => tag != obj);
        this.tags = tags;
      }
    },
    handleBtn() {
      this.isShowInput = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    handleBlurInput() {
      this.isShowInput = false;
      const inputText = this.inputText;
      let tags = this.tags;
      if (inputText && !tags.includes(inputText)) {
        tags = [...tags, inputText];
      }
      Object.assign(this, {
        tags,
        method: false,
        inputText: ""
      });
    }
  }
};
</script>
<style lang="stylus">
#Tag
  height 40px;
  display flex;
  align-items center;
  overflow hidden;
  .z-button
    border-radius 4px;
    height: 32px;
    line-height: 32px;
    padding 0;
    box-sizing border-box;
    margin-left 4px;
  .tag-input
    width 100px;
</style>
