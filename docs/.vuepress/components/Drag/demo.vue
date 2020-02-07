<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 14:04:54
 * @LastEditors  : wpp
 * @LastEditTime : 2020-02-07 17:03:48
 -->
<template>
  <div class="drag-component">
    <div class="drag">
      <Zdrag @dragmouseupfn="dragPosition" @scalemouseupfn="scaleSize" :initInfo='initInfo'> </Zdrag>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      initInfo: {
        left: 125,
        top: 125,
        width: 150,
        height: 100,
      },
    };
  },
  methods: {
    dragPosition(data) {
      this.initInfo.left = data.left;
      this.initInfo.top = data.top;
      console.log('left:' + data.left, 'top:' + data.top);
    },
    scaleSize(data) {
      this.initInfo.width = data.width;
      this.initInfo.height = data.height;
      console.log('width:' + data.width, 'height:' + data.height);
    },
  },
};
</script>
<style>
.drag {
  width: 500px;
  height: 380px;
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  position: relative;
}
</style>
