import { Component, Vue, Prop, Inject } from 'vue-property-decorator';
import { VNode } from 'vue';

@Component
export default class ZTimelineItem extends Vue {
  /* ************************ Props ************************* */
  @Prop({ type: String }) private title?: string; // 标题
  @Prop({ type: String }) private content?: string; // 内容
  @Prop({ type: String }) private dotColor?: string; // 节点颜色
  @Prop({ type: String }) private lineColor?: string; // 线颜色
  @Prop({ type: String }) private lineType?: string; // 线类型

  /* ************************ Inject ************************ */
  @Inject()
  private timeline!: Vue;

  /* ************************ Render ************************ */
  render() {
    const dotSlots = this.$slots.dot || <span class="zx-timeline-dot" style={`border-color:${this.dotColor}`}></span>;
    const summartContent: VNode[] | string | undefined = this.$slots.content || this.content;
    const timelineSummary: VNode[] | string | undefined | JSX.Element = summartContent ? <div class="zx-timeline-summary">{summartContent}</div> : '';

    return (
      <div class="zx-timeline-item">
        <div class="zx-timeline-line" style={{ 'border-left-color': this.lineColor, 'border-left-style': this.lineType }}></div>
        <div class="zx-timeline-icon">{dotSlots}</div>
        <div class="zx-timeline-content">
          <div class="zx-timeline-title">{this.title}</div>
          {timelineSummary}
        </div>
      </div>
    );
  }
}
