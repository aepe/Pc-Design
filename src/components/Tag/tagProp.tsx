import { Component, Vue } from "vue-property-decorator";
const baseCheckTag = Vue.extend({
  props: {
    // checkbox
    checked: {
      type: Boolean,
      default: false
    },
    // tag大小
    size: {
      default: "",
      type: String
    },
    // tag是否显示
    visible: {
      default: true,
      type: Boolean
    },
    // 是否显示删除按钮
    closable: {
      default: false,
      type: Boolean,
    },
    // 类型
    type: {
      default: "",
      type: String
    },
    // 主题
    theme: {
      default: "fill",
      type: String
    },
    // 点击关闭是否确认提示
    hasConfirm: {
      default: false,
      type: Boolean
    },
    // 开启关闭标签确认提示时-关闭标签提示语
    confirmMessage: {
      type: String,
      default: "确认关闭标签么？"
    },
  },
  model: {
    prop: 'checked',
    event: 'change.checked',
  },
})
@Component
export default class Tagprops extends baseCheckTag {}