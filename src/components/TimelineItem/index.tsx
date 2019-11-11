import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ZTimelineItem extends Vue {
    /**
     * @Param title {string} @Required true @Default -- @Options -- @Description 标题
     * @Param content {string} @Required false @Default -- @Options -- @Description 内容
     * @Param dotColor {string} @Required false @Default {@BorderColor-1} @Options -- @Description 节点颜色
     * @Param lineColor {string} @Required false @Default {@BorderColor-1} @Options -- @Description 线颜色
     * @Param lineType {string} @Required false @Default solid @Options solid|dotted @Description 线类型
     */
    @Prop({ type: String }) public title!: string;
    @Prop({ type: String }) public content?: string;
    @Prop({ type: String }) public dotColor?: string;
    @Prop({ type: String }) public lineColor?: string;
    @Prop({ type: String }) public lineType?: string;

    msg: string = 'This is z timeline item component';

    render() {
        return (
            <div class="z-timeline-item">
                <div class="z-timeline-line" style={`border-color:${this.lineColor}`}></div>
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
