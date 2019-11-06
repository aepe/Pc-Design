import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MtSider extends Vue {
    public msg: string = 'This is mt sider page';
    public render(): any {
        return <h1>{this.msg}</h1>;
    }
}
