<template>
  <div class="demo1">
    <z-alert v-for="(item, index) in list" :key="index" :title="item.title" :type="item.type"></z-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: '信息提示框样式',
          type: 'info'
        },
        {
          title: '成功提示框样式',
          type: 'success'
        },
        {
          title: '警告提示框样式',
          type: 'warning'
        },
        {
          title: '错误提示框样式',
          type: 'error'
        }
      ]
    };
  }
};
</script>