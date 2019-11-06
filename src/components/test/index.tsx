import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MtTest extends Vue {
    public msg: string = 'This is test page';
    public render(): any {
        return <h1>{this.msg}</h1>;
    }
}
