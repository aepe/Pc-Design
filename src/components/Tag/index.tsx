import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ZTag extends Vue {
    // tag大小
    @Prop({
        default: "",
        type: String,
    }) public size!: string;
    // tag是否显示
    @Prop({
        default: true,
        type: Boolean,
    }) public isVisible?: boolean;
    // 是否显示删除按钮
    @Prop({
        default: false,
        type: Boolean,
    }) public closable?: boolean;
    // 类型
    @Prop({
        default: "info",
        type: String,
    }) public type?: string;
    // 主题
    @Prop({
        default: "plain",
        type: String,
    }) public theme?: string;
    // 设置颜色类
    public setTypeClass() {
        return `z-tag-${this.type}`
    }
    // 设置大小
    public setClass() {
        return this.size ? `z-tag-${this.size}` : null;
    }
    // 设置显示或隐藏
    public setVisible() {
        return this.isVisible;
    }
    // 设置是否删除
    public setClose() {
        return this.closable;
    }
    // 设置主题
    public setTheme() {
        return this.theme ? `z-tag-${this.theme}` : null;
    }
    // 关闭按钮操作
    public handleClose(e: any) {
        e.stopPropagation();
        this.$emit('close', e);
    }
    // 点击tag
    public handleClick(e: any) {
        e.stopPropagation();
        this.$emit('click', e);
    }
    public renderIcon(): any {
        return this.setClose() ? (
            <i class="z-close iconfont zxclose"  on-click={ this.handleClose }>X</i>
        ) : null;
    }
    public render(): any {
        const slots = this.$slots.default || [];
        return (
            <span class={['z-tag', 
                this.setClass(),
                this.setTypeClass(),
                this.setTheme()]}
                v-show={this.setVisible()}
                on-click={ this.handleClick }>
                    {slots}
                {this.renderIcon()}
            </span>
        );
    }
}
