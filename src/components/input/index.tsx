import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MtInput extends Vue {
    public msg: string = 'This is mt input';
    public render(): any {
        return <input type="text" v-model={this.msg} />;
    }
}
