import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MtButton extends Vue {
    public msg: string = 'This is mt button';
    public render(): any {
        return <button>{this.msg}</button>;
    }
}
