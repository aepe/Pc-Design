import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ZTest extends Vue {
    public msg: string = 'This is z test component';
    public render(): any {
        return (
            <div>
                <h1>{this.msg}</h1>
                <p v-z-test></p>
            </div>
        );
    }
}
