import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Message extends Vue {
  public handleAfterLeave() {
    console.log(123);
    this.$el.parentNode.removeChild(this.$el);
  }
  @Prop()
  public args: any;

  // @Prop({
  //   type: Function,
  //   default() {
  //     return null;
  //   }
  // })
  // public onClose: any;
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
  mounted() {
    this.startTimer();
  }
  render(): JSX.Element {
    return (
      <transition name="z-message-fade" onAfterLeave={this.handleAfterLeave}>
        <div v-show={this.visible}>message</div>
      </transition>
    );
  }
}
