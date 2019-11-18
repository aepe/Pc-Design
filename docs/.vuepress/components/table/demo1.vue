<template>
  <div class="demo1">
    <z-table :column="column" :data="list"></z-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      column: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'job',
          label: '工作'
        },
        {
          prop: 'address',
          label: '地址',
          width: '30%'
        }
      ],
      list: [
        {
          name: '小明',
          age: 24,
          job: '工作1',
          address: '地址1地址1地址1地址1地址1地址1地址1地址1地址1地址1地址1地址1地址1地址1地址1地址1地址1地址1地址1'
        },
        {
          name: '小红',
          age: 23,
          job: '工作2',
          address: '地址2地址2地址2地址2地址2地址2地址2地址2地址2地址2地址2'
        },
        {
          name: '小爽',
          age: 22,
          job: '工作3',
          address: '地址3地址3地址3地址3地址3'
        }
      ]
    };
  }
};
</script>