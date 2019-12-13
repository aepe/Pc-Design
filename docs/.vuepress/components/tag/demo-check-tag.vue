<template>
  <div id="CheckTag">
    <!-- :check -->
    <div>
      <strong class="checkTag-title">:check </strong>
      <!-- <z-check-tag
        v-for="(i, key) in tags"
        :key="key"
        :checked="selectedTags.indexOf(i) > -1"
        @change="(checked) => handleChange(i, checked)">{{i.title}}</z-check-tag> -->
      <z-tag v-for="(i, key) in tags"
        :key="key"
        :checked="selectedTags.indexOf(i) > -1"
        @change="(checked) => handleChange(i, checked)">{{i.title}}</z-tag>
    </div>
      <!-- v-model -->
      <div>
        <strong class="checkTag-title">v-model </strong>
        <!-- <z-check-tag
          v-model="i.checked"
          v-for="(i, key) in tags"
          :key="key"
          @change="onChange(key + 1, i)">{{i.title}}</z-check-tag> -->
        <z-tag v-for="(i, key) in tags"
          :key="key"
          :checked="selectedTags.indexOf(i) > -1"
          @change="onChange(key + 1, i)">{{i.title}}</z-tag>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tags: [
          {
            title: "标签一",
            checked: true,
          },
          {
            title: "标签二",
            checked: true,
          },
          {
            title: "标签三",
            checked: true,
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
      onChange(index, i) {
        console.log(`checked---${index}`, i);
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