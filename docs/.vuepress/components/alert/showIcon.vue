<template>
  <div class="demo2">
    <z-alert
      v-for="(item, index) in list"
      :key="index"
      :title="item.title"
      :type="item.type"
      :showIcon="item.showIcon"
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
          showIcon: true
        },
        {
          title: '成功提示框样式',
          type: 'success',
          showIcon: true
        },
        {
          title: '警告提示框样式',
          type: 'warning',
          showIcon: true
        },
        {
          title: '错误提示框样式',
          type: 'error',
          showIcon: true
        }
      ]
    };
  }
};
</script>