<template>
  <div class="demo3">
    <z-alert
      v-for="(item, index) in list"
      :key="index"
      :title="item.title"
      :type="item.type"
      :showClose="item.showClose"
    ></z-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: '信息提示框样式',
          type: 'info',
          showClose: false
        },
        {
          title: '成功提示框样式',
          type: 'success',
          showClose: false
        },
        {
          title: '警告提示框样式',
          type: 'warning',
          showClose: false
        },
        {
          title: '错误提示框样式',
          type: 'error',
          showClose: false
        }
      ]
    };
  }
};
</script>