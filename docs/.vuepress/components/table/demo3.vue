<template>
  <div class="demo3">
    <z-table :column="column" :data="list" type="border"></z-table>
  </div>
</template>

<script>
const column = [
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
];

const list = [];
for (let i = 0; i < 4; i++) {
  const num = i + 1;
  list.push({
    key: i,
    name: `小${num}`,
    age: `2${num}`,
    job: `Job ${num}`,
    address: i == 0 ? `地址地址地址地址地址地址地址地址地址地址地址地址 ${num}` : `地址地址地址 ${num}`
  });
}
export default {
  data() {
    return {
      column,
      list
    };
  }
};
</script>