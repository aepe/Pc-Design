import { Component, Vue, Prop, Provide } from 'vue-property-decorator';

@Component
export default class ZTimeline extends Vue {
  @Prop({ type: Boolean, default: false }) private reverse?: boolean; // 节点排序

  @Provide()
  timeline = this;

  render() {
    let slots = this.$slots.default || [];

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
