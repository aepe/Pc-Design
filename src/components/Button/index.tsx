import { Component, Vue, Prop, Emit, Ref } from "vue-property-decorator";
import Icon from "../Icon/icon";
import { filterEmpty } from "../../packages/utils";
import utils from "../../packages/utils";
import loadingSvg from "../../packages/utils/loadings-svg/loading";
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

@Component({
  components: { Icon, loadingSvg }
})
export default class Button extends Vue {
  @Emit("click")
  public btnClick(e: Event) {
    return e;
  }
  // 是否有icon
  @Prop({
    default() {
      return "";
    }
  })
  private icon?: string;

  // 是否loading
  @Prop({
    type: Boolean,
    default: false
  })
  private loading?: boolean;

  // 按钮形状
  @Prop({
    default() {
      return "";
    }
  })
  private shape?: string;

  // 按钮类型
  @Prop({
    default() {
      return "";
    }
  })
  private type?: string;

  // 按钮大小
  @Prop({
    default() {
      return "";
    }
  })
  private size?: string;

  // 禁用状态
  @Prop({
    default() {
      return false;
    }
  })
  private disabled?: boolean;

  private types: string[] = ["primary", "success", "warning", "danger"];
  private BCN: string = "z-button ";
  // 拼接class 处理样式问题
  get className(): string {
    let classname: string = "z-button-";
    let hasType = this.types.indexOf(this.type) == -1 ? "" : "z-button-hastype";

    let newclassname =
      this.BCN +
      utils.assembleClass(classname, this.type) +
      utils.assembleClass(classname, this.shape) +
      utils.assembleClass(classname, this.size) +
      hasType;
    return utils.clearBlank(newclassname);
  }

  insertSpace(child, needInserted) {
    const SPACE = needInserted ? " " : "";
    if (typeof child.text === "string") {
      let text = child.text.trim();
      if (isTwoCNChar(text)) {
        text = text.split("").join(SPACE);
      }
      return <span>{text}</span>;
    }
    return child;
  }

  isNeedInserted() {
    const { icon, $slots } = this;
    return $slots.default && $slots.default.length === 1 && !icon;
  }

  render() {
    const {
      icon,
      btnClick,
      disabled,
      className,
      $slots,
      $attrs,
      $listeners,
      loading
    } = this;
    let buttonProps = {
      attrs: {
        ...$attrs,
        disabled
      },
      class: className,
      on: {
        ...$listeners,
        click: btnClick
      }
    };
    let iconNode = this.icon ? <Icon type={icon} /> : null;
    const children = filterEmpty($slots.default);
    const kids = children.map(child =>
      this.insertSpace(child, this.isNeedInserted())
    );

    if (loading) {
      buttonProps.attrs.disabled = true;
      iconNode = (
        <Icon>
          <loadingSvg />
        </Icon>
      );
    }
    // 如果按钮是链接类型
    if ($attrs.href !== undefined) {
      const linkButtonProps = {
        attrs: Object.assign(
          {
            target: "view_window"
          },
          buttonProps.attrs
        ),
        class: className,
        on: {
          ...$listeners,
          click: btnClick
        }
      };
      return (
        <a {...linkButtonProps}>
          {iconNode}
          {kids}
        </a>
      );
    }
    return (
      <button {...buttonProps}>
        {iconNode}
        {kids}
      </button>
    );
  }
}
