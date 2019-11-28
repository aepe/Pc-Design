import { Component, Vue, Inject } from 'vue-property-decorator';
import { VNode } from 'vue';

/*************************** Props ****************************/
const BaseProps = Vue.extend({
  props: {
    // 标题
    title: {
      type: String,
      default() {
        return '';
      }
    },
    // 内容
    content: {
      type: String,
      default() {
        return '';
      }
    },
    // 节点颜色
    dotColor: {
      type: String,
      default() {
        return '';
      }
    },
    // 线颜色
    lineColor: {
      type: String,
      default() {
        return '';
      }
    },
    // 线类型
    lineType: {
      type: String,
      default() {
        return '';
      }
    }
  }
});

@Component
export default class ZTimelineItem extends BaseProps {
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
