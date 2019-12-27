import { Component, Vue, Inject } from 'vue-property-decorator';

/*************************** Props ****************************/
const BaseProps = Vue.extend({
  props: {
    // 每项对应的label
    label: {
      required: false,
      type: [String, Number]
    },
    // 每项对应的值
    value: {
      required: true,
      type: [String, Number]
    },
    // 是否禁用
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    }
  }
});

/**************************** Interfaces ***********************/

@Component
export default class ZSelectOption extends BaseProps {
  /* ************************ Inject ************************* */
  @Inject()
  private select!: any;

  /* ************************ Main *************************** */
  /**
   * @DESC: 组件mounted钩子
   * @return: void
   */
  private mounted(): void {
    this.emitSlotMounted();
  }

  /**
   * @DESC: 发送元素渲染成功 已生成实例
   * @return: void
   */
  private emitSlotMounted(): void {
    this.$ZBus.$emit('slotMounted');
  }

  /**
   * @DESC: 设置item的classname
   * @return: object
   */
  private get itemClass(): object {
    return {
      ['z-select-dropdown__item']: true,
      ['selected']: this.select.value === this.value,
      ['disabled']: this.disabled
    };
  }
  /**
   * @DESC: item点击
   * @return: void
   */
  private itemClick(e: MouseEvent): void {
    e.stopPropagation();
    if (!this.disabled) {
      this.select.watchData.isFocus = false;
      this.select.selectFocus(false);
      this.$ZBus.$emit('itemClick', {
        value: this.value,
        label: this.label
      });
    }
  }

  /* ************************ Render ************************* */
  render(): JSX.Element {
    return (
      <li class={this.itemClass} onClick={this.itemClick}>
        <span>{this.label}</span>
      </li>
    );
  }
}
