import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MtTree extends Vue {
    public msg: string = 'This is mt tree page';
    public render(): any {
        return <h1>{this.msg}</h1>;
    }
}
