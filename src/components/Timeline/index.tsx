import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MtTimeline extends Vue {
    msg: string = 'This is mt timeline component';
    render(): any {
        return <h1>{this.msg}</h1>;
    }
}
