<template>
  <div id="CheckTag">
    <!-- :check -->
    <div>
      <strong class="checkTag-title">:check </strong>
      <z-check-tag
        v-for="(i, key) in tags"
        :key="key"
        :checked="selectedTags.indexOf(i) > -1"
        @change="(checked) => handleChange(i, checked)">{{i.title}}</z-check-tag>
    </div>

      <!-- v-model -->
      <div>
        <strong class="checkTag-title">v-model </strong>
        <z-check-tag
          v-model="checked1"
          @change="onChange(1)">标签1</z-check-tag>
        <z-check-tag
          v-model="checked2"
          @change="onChange(2)">标签2</z-check-tag>
        <z-check-tag
          v-model="checked3"
          @change="onChange(3)">标签3</z-check-tag>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: false,
        checked3: false,
        tags: [
          {
            title: "标签一",
            checked: true,
          },
          {
            title: "标签二",
            checked: false,
          },
          {
            title: "标签三",
            checked: false,
          },
        ],
        selectedTags: [],
      }
    },
    methods: {
      handleChange(i, checked) {
        const { selectedTags } = this;
        const nextSelectedTags = checked
          ? [...selectedTags, i]
          : selectedTags.filter(t => t !== i);
        this.selectedTags = nextSelectedTags;
      },
      onChange(index) {
        console.log(`checked---${index}`, this[`checked${index}`]);
      }
    }
  }
</script>
<style lang="stylus">
#CheckTag
  div
    margin 10px 0;
.checkTag-title
  display inline-block;
  width 80px;
</style>