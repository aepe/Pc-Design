import { Vue, Component, Prop } from "vue-property-decorator";
import Icon from "../Icon/icon";
import util from "../../packages/utils";
const iconType = {
  info: "info1",
  success: "xiaoxi-chenggong",
  error: "cuowu",
  warning: "jinggao",
  loading: "loading"
};
@Component({
  components: { Icon }
})
export default class Message extends Vue {
  public handleAfterLeave() {
    this.$el.parentNode.removeChild(this.$el);
  }
  @Prop()
  public args: any;

  private timer: any;
  private closed: boolean = false;
  private visible: boolean = true;
  private startTimer() {
    if (this.args.duration > 0) {
      this.timer = setTimeout(() => {
        this.visible = false;
        if (!this.closed) {
          this.close();
        }
      }, this.args.duration);
    }
  }
  private close() {
    this.closed = true;
    // if (typeof this.onClose === "function") {
    //   this.onClose(this);
    // }
  }
  private get classes(): string {
    let baseClass = "z-message ";
    const classname = `${baseClass}z-message-${this.args.type} bounceInDown`;
    return util.clearBlank(classname);
  }
  mounted() {
    this.startTimer();
  }
  render(): JSX.Element {
    const { classes, args } = this;
    return (
      <transition onAfterLeave={this.handleAfterLeave} appear name="z-message">
        <div class="z-message-box" v-show={this.visible}>
          <div class={[classes]}>
            <Icon type={iconType[args.type]} />
            {args.content}
          </div>
        </div>
      </transition>
    );
  }
}
