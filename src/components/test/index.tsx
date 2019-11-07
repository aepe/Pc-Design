import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MtTest extends Vue {
    public msg: string = 'This is mt test component';
    public render(): any {
        return (
            <div>
                <h1>{this.msg}</h1>
                <p v-mt-test></p>
            </div>
        );
    }
}
