import { Component, Vue, Prop, Inject } from 'vue-property-decorator';

@Component
export default class ZTimelineItem extends Vue {
    @Prop({ type: String }) private title?: string; // 标题
    @Prop({ type: String }) private content?: string; // 内容
    @Prop({ type: String }) private dotColor?: string; // 节点颜色
    @Prop({ type: String }) private lineColor?: string; // 线颜色
    @Prop({ type: String }) private lineType?: string; // 线类型

    @Inject()
    timeline!: any;

    render() {
        let dotSlots = this.$slots.dot || <span class="z-timeline-dot" style={`border-color:${this.dotColor}`}></span>;
        let summartContent = this.$slots.content || this.content;
        let timelineSummary = summartContent ? <div class="z-timeline-summary">{summartContent}</div> : '';

        return (
            <div class="z-timeline-item">
                <div class="z-timeline-line" style={{ 'border-left-color': this.lineColor, 'border-left-style': this.lineType }}></div>
                <div class="z-timeline-icon">{dotSlots}</div>
                <div class="z-timeline-content">
                    <div class="z-timeline-title">{this.title}</div>
                    {timelineSummary}
                </div>
            </div>
        );
    }
}
