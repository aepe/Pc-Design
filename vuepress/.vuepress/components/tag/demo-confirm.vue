<template>
  <div>
    <z-tag v-for="(i, index) in tags"
      :key="index"
      hasConfirm
      confirm-message="关闭标签提示语"
      closable
      @click="handleClick"
      @close="handleClose(i, $event)">{{i}}</z-tag>
    <input type="text"
      ref="input"
      class="tag-input"
      v-model="inputText"
      v-if="isShowInput"
      @blur="handleBlurInput">
    <ZButton type="primary"
      class="tag-btn"
      v-if="!isShowInput"
      @click.native="handleBtn">+ add Tag</ZButton>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tags: [
          '标签一',
          '标签二',
        ],
        isShowInput: false,
        inputText: '',
      }
    },
    methods: {
      handleClick(e) {
        console.log('click-----', e);
      },
      handleClose(obj, e) {
        if (e.conf) {
          const tags = this.tags.filter(tag => tag != obj);
          this.tags = tags;
        }
      },
      handleBtn() {
        this.isShowInput = true;
        this.$nextTick( () =>{
          this.$refs.input.focus();
        })
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
          inputText: '',
        });
      }
    }
  }
</script>
<style lang="stylus">
.tag-input {
  width 60px;
  height 42px;
  padding 0 10px;
  line-height 40px;
  border-radius 8px;
  box-shadow none;
  border none;
  outline #00FF00 dashed thin;
}
.tag-btn.zx-button-primary {
  border-color #00FF00;
  border-style dashed;
  background-color transparent;
  color #909399;
  padding 0;
  height 42px;
  padding 0 10px;
  line-height 40px;
  border-radius 8px;
}

</style>