import { Component, Vue, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';

/*************************** Props ****************************/
const BaseProps = Vue.extend({
  props: {
    // 每项对应的label
    label: {
      required: false,
      type: [String]
    },
    // 每项对应的值
    value: {
      required: true,
      type: [String]
    }
  }
});

@Component
export default class ZSelectOption extends BaseProps {
  /* ************************ Provide ************************ */

  /* ************************ Main *************************** */
  private emitSlotMounted(): void {
    this.$ZBus.$emit('slotMounted');
  }

  private innerContext: Array<VNode> = this.$slots.default || [];

  private mounted(): void {
    this.emitSlotMounted();
  }

  /* ************************ Render ************************* */
  render(): JSX.Element {
    return (
      <li class="z-select-dropdown__item">
        <span>{this.label}</span>
      </li>
    );
  }
}
