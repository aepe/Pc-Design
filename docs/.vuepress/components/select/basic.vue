<template>
  <div class="demo1">
    <z-select v-model="value">
      <z-select-option
        v-for="(item, index) in options"
        :key="index"
        :value="item.value"
        :label="item.label"
        :disabled="item.disabled"
      />
    </z-select>
    <p>value: {{value}}</p>
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
          value: 'swimming',
          disabled: true
        },
        {
          label: '健身',
          value: 'fitness'
        }
      ],
      value: 'boxing'
    };
  }
};
</script>