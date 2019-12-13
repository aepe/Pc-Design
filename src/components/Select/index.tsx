import { Component, Vue, Provide, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';

/*************************** Props ****************************/
const BaseProps = Vue.extend({
  props: {
    // 标题
    // title: {
    //   required: false,
    //   type: String,
    //   default() {
    //     return '';
    //   }
    // }
  }
});

@Component
export default class ZSelect extends BaseProps {
  /* ************************ Provide ************************ */
  @Provide()
  private select: Vue = this;

  /* ************************ Main *************************** */

  @Emit('change')
  private change(e: MouseEvent): MouseEvent {
    return e;
  }

  /* ************************ Render ************************* */
  render(): JSX.Element {
    let slots: VNode[] = this.$Zutil.filterEmpty(this.$slots.default) || [];
    // console.log(slots[0]);

    return (
      <div class="z-select">
        <span>select</span>
      </div>
    );
  }
}
