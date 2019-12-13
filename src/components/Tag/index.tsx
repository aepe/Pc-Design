import { Component, Watch } from "vue-property-decorator";
import Tagprops from './tagProp';
import ZIcon from "../Icon/icon";
@Component({
  components: {
    ZIcon,
  },
})
export default class ZTag extends Tagprops {
  @Watch('visible', {immediate: true})
  public handleVisible(val) {
    this.stateVisible = val;
  }
  // 控制tag的显示和隐藏
  private stateVisible: boolean = true;
  // 设置显示或隐藏
  private setVisible(visible, e) {
    this.$emit('close', e);
    if (e.defaultPrevented) {
      return;
    }
    this.stateVisible = visible;
  }

  // 关闭按钮操作
  private handleClose(e: any) {
    e.stopPropagation();
    if (e.defaultPrevented) {
      return;
    }
    const { hasConfirm, confirmMessage } = this;
    if (hasConfirm) {
      const conf = confirm(confirmMessage);
      // conf 是否关闭 e 当前元素
      this.$emit("close", {
        conf,
        e
      });
      return;
    }
    this.setVisible(false, e);
  }

  // 点击tag
  private handleClick(e: any) {
    e.stopPropagation();
    this.$emit("click", e);
  }

  private renderIcon(): JSX.Element {
    const { closable } = this.$props;
    return closable ? <ZIcon type="close" onClick={this.handleClose} /> : null;
  }
  // set className
  private setClassNames() {
    const { $props } = this;
    console.log($props)
    const transClass = {
      'z-tag': true,
      [`z-tag-${$props.size}`]: $props.size,
      [`z-tag-${$props.type}`]: $props.type,
      [`z-tag-${$props.theme}`]: $props.theme,
      [`z-tag-closable`]: $props.closable ? 'closable' : null,
      [`z-tag-checked`]: $props.checked ? 'check' : null,
    };
    return transClass;
  }

  public render(): JSX.Element {
    const {
      $slots,
      setClassNames,
      renderIcon,
      stateVisible,
      handleClick,
    } = this;
    return (
      <span class={setClassNames()}
        v-show={stateVisible}
        on-click={handleClick}>
        {$slots.default}
        {renderIcon()}
      </span>
    );
  }
}
