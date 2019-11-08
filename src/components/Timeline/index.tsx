import { Component, Vue, Prop } from 'vue-property-decorator';
import { style } from 'typestyle';

@Component
export default class ZTimeline extends Vue {
    // @Prop(String)
    // private propA: string;
    msg: string = 'This is z timeline component';
    render() {
        return (
            <div class={styles['z-timeline']}>
                <div class="z-timeline-inner">
                    <div class="z-timeline-item">
                        <div class="z-timeline-line"></div>
                        <div class="z-timeline-dot"></div>
                        <div class="z-timeline-content">
                            <div class="z-timeline-title">我是标题</div>
                            <div class="z-timeline-summary">我是内容</div>
                        </div>
                    </div>
                    <div class="z-timeline-item">
                        <div class="z-timeline-line"></div>
                        <div class="z-timeline-dot"></div>
                        <div class="z-timeline-content">
                            <div class="z-timeline-title">我是标题</div>
                            <div class="z-timeline-summary">我是内容</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// style
const styles = {
    ['z-timeline']: style({ background: 'red' }),
};
