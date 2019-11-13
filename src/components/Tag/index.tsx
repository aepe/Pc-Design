import { Component, Vue, Prop, Model } from 'vue-property-decorator';

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
    }) public visible?: boolean;
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
    // 点击关闭是否确认提示
    @Prop({
        default: false,
        type: Boolean,
    }) public hasConfirm?: boolean;
    // 开启关闭标签确认提示时-关闭标签提示语
    @Prop({
        type: String,
        default: "确认关闭标签么？",
    }) public confirmMessage?: string;
    
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
        return this.visible;
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
        if (e.defaultPrevented) {
            return;
        }
         const { hasConfirm, confirmMessage } = this;
        if (hasConfirm) {
            const conf = confirm(confirmMessage);
            // conf 是否关闭 e 当前元素
            this.$emit('close', {
                conf,
                e,
            });
            return;
        }
        this.$emit('close', e);
    }
    // 点击tag
    public handleClick(e: any) {
        e.stopPropagation();
        this.$emit('click', e);
    }
    public renderIcon(): any {
        return this.setClose() ? (
            <i class="z-close iconfont zxclose"  on-click={ this.handleClose }></i>
        ) : null;
    }
    public render(): any {
        const {setClass,
            setTypeClass,
            setTheme,
            setVisible,
            handleClick,
            $slots } = this;
        return (
            <span class={['z-tag', 
                setClass(),
                setTypeClass(),
                setTheme() ]}
                v-show={setVisible()}
                on-click={ handleClick }>
                    {$slots.default}
                {this.renderIcon()}
            </span>
        );
    }
}
