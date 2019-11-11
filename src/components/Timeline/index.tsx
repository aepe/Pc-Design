import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ZTimeline extends Vue {
    msg: string = 'This is z timeline component';
    render() {
        let slots = this.$slots.default || [];
        return (
            <div class="z-timeline">
                <div class="z-timeline-inner">{slots}</div>
            </div>
        );
    }
}
