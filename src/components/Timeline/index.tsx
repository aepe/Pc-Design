import { Component, Vue, Prop, Provide } from 'vue-property-decorator';
import { VNode } from 'vue';

@Component
export default class ZTimeline extends Vue {
  /* ************************ Props ************************** */
  @Prop({ type: Boolean, default: false }) private reverse?: boolean; // 节点排序

  /* ************************ Provide ************************ */
  @Provide()
  private timeline: Vue = this;

  /* ************************ Render ************************* */
  render() {
    let slots: VNode[] = this.$slots.default || [];

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
