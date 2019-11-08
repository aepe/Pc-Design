import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class MtTimeline extends Vue {
    // @Prop(String)
    // private propA: string;
    msg: string = 'This is mt timeline component';
    render(): any {
        return (
            <div class="mt-timeline">
                <h1>{this.msg}</h1>
            </div>
        );
    }
}
