import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ZTimelineItem extends Vue {
    /**
     * @Param title {string} @Required true @Default -- @Options -- @Description 标题
     * @Param content {string} @Required false @Default -- @Options -- @Description 内容
     * @Param dotColor {string} @Required false @Default {@BorderColor-1} @Options -- @Description 节点颜色
     * @Param lineColor {string} @Required false @Default {@BorderColor-1} @Options -- @Description 线颜色
     * @Param lineType {string} @Required false @Default solid @Options solid|dashed|dotted @Description 线类型
     */
    @Prop({ type: String }) private title!: string;
    @Prop({ type: String }) private content?: string;
    @Prop({ type: String }) private dotColor?: string;
    @Prop({ type: String }) private lineColor?: string;
    @Prop({ type: String }) private lineType?: string;

    render() {
        return (
            <div class="z-timeline-item">
                <div class="z-timeline-line" style={{ 'border-left-color': this.lineColor, 'border-left-style': this.lineType }}></div>
                <div class="z-timeline-icon">
                    <span class="z-timeline-dot" style={`border-color:${this.dotColor}`}></span>
                </div>
                <div class="z-timeline-content">
                    <div class="z-timeline-title">{this.title}</div>
                    <div class="z-timeline-summary">{this.content}</div>
                </div>
            </div>
        );
    }
}
