import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Tagprops extends Vue {
  // tag大小
  @Prop({
    default: "",
    type: String
  })
  public size!: string;
  
  // tag是否显示
  @Prop({
    default: true,
    type: Boolean
  })
  public visible?: boolean;

  // 是否显示删除按钮
  @Prop({
    default: false,
    type: Boolean
  })
  public closable?: boolean;

  // 类型
  @Prop({
    default: "",
    type: String
  })
  public type?: string;

  // 主题
  @Prop({
    default: "fill",
    type: String
  })
  public theme?: string;

  // 点击关闭是否确认提示
  @Prop({
    default: false,
    type: Boolean
  })
  public hasConfirm?: boolean;

  // 开启关闭标签确认提示时-关闭标签提示语
  @Prop({
    type: String,
    default: "确认关闭标签么？"
  })
  public confirmMessage?: string;

  // checkbox
  @Prop({
    type: Boolean,
    default: false
  }) public checked!: boolean;
}