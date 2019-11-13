import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

interface State{
    zType: string | null
}
@Component
export default class ZButton extends Vue {
    @Emit('click')
    public btnClick(e) {
        return e;
    }

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
        const type: string = 'z-button '+ 'z-button-'+this.type;
        const size: string = ' z-button-'+this.size;
        const circle: string = this.circle ? ' z-button-circle' : '';

        return type + size + circle;
    }
    public render() {
        const slots = this.$slots.default || [];
        return <button onClick={this.btnClick} disabled={this.disabled} class={this.className}>{slots}</button>
    }
}
