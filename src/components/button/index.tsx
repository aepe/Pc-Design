import { Component, Vue, Prop } from 'vue-property-decorator';

interface State{
    zType: string | null
}
@Component
export default class ZButton extends Vue {

    // button风格
    @Prop({
        type: String,
        required: false,
        default() {
            return 'default'
        }
    })
    public type?: string;
    
    // 是否设置button为圆形
    @Prop({
        type: Boolean,
        required: false,
        default() {
            return false
        }
    })
    public circle?: boolean;

    // button大小
    @Prop({
        type: String,
        required: false,
        default() {
            return 'default'
        }
    })
    public size?: string;

    // 是否禁用
    @Prop({
        type: Boolean,
        required: false,
        default() {
            return false
        }
    })
    public disabled?: boolean;

    private state: State = {
        zType: 'default'
    }
    public created() {
        if (this.type) {
            this.state.zType = this.type
        }
    }
    // 拼装classname
    get className(): string {
        const type: string = 'zx-button '+ 'zx-button-'+this.type;
        const size: string = ' zx-button-'+this.size;
        const circle: string = this.circle ? ' zx-button-circle' : '';

        return type + size + circle;
    }
    public render() {
        const slots = this.$slots.default || [];
    return <button disabled={this.disabled} class={this.className}>{slots}</button>
    }
}
