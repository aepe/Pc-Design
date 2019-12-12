import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class Icon extends Vue {
  @Prop({
    type: String,
    default: ""
  })
  private type!: string;

  @Emit("click")
  public btnClick(e: Event) {
    return e;
  }
  private get classes(): string {
    let className: string = "iconfont zxicon zx";
    return className + (this.type || "-loading");
  }
  render(): JSX.Element {
    const { classes, $slots, btnClick } = this;
    const iconProps = {
      class: classes,
      on: {
        click: btnClick
      }
    };
    return <i {...iconProps}>{$slots.default}</i>;
  }
}
