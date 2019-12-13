import { Component, Vue, Provide } from 'vue-property-decorator';
import { VNode } from 'vue';

/*************************** Props ****************************/
const BaseProps = Vue.extend({
  props: {
    // 节点排序
    reverse: {
      type: Boolean,
      default() {
        return false;
      }
    }
  }
});

@Component
export default class ZTimeline extends BaseProps {
  /* ************************ Provide ************************ */
  @Provide()
  private timeline: Vue = this;

  /* ************************ Render ************************* */
  render(): JSX.Element {
    let slots: VNode[] = this.$Zutil.filterEmpty(this.$slots.default) || [];

    if (this.reverse) {
      slots = slots.reverse();
    }

    return (
      <div class="zx-timeline">
        <div class="zx-timeline-inner">{slots}</div>
      </div>
    );
  }
}
