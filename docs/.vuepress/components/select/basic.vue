<template>
  <div class="demo1">
    <z-select>
      <z-select-option
        v-for="(item, index) in options"
        :key="index"
        :value="item.value"
        :label="item.label"
      />
    </z-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          label: '篮球',
          value: 'basketball'
        },
        {
          label: '足球',
          value: 'soccerball'
        },
        {
          label: '拳击',
          value: 'boxing'
        },
        {
          label: '游泳',
          value: 'swimming'
        },
        {
          label: '健身',
          value: 'fitness'
        }
      ]
    };
  }
};
</script>