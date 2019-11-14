import { Vue, Component, Prop } from '@/components/Loading/node_modules/vue-property-decorator';
@Component
export default class Zloading extends Vue {
    @Prop({ default: '@Black' }) public dotBackground?: string;
    @Prop({ default: 'rgba(0, 0, 0, .3)' }) public markBackground?: string;
    @Prop({ default: false }) public visible?: boolean;
    @Prop({ default: true }) public fullScreen?: boolean;

    get zxMarkStyle() {
        return {
            backgroundColor: this.markBackground,
            position: this.fullScreen ? 'fixed' : 'absolute'
        };
    }

    get zxDotBGColor() {
        return {
            backgroundColor: this.dotBackground
        };
    }

    public mounted() {
        this.$nextTick(() => {
            if (!this.fullScreen) {
                const parentNode: any = document.getElementsByClassName('zx-loading-mark')[0].parentNode;
                if (parentNode) {
                    parentNode.style.position = 'relative';
                }
            }
        });
    }

    render() {
        if (!this.visible) {
            return false;
        }
        const slotText = this.$slots.default ||
        <div class="zx-loader">
            <div class="zx-dot zx-dot1" style={this.zxDotBGColor}></div>
            <div class="zx-dot zx-dot2" style={this.zxDotBGColor}></div>
            <div class="zx-dot zx-dot3" style={this.zxDotBGColor}></div>
        </div>;
        return <div class="zx-loading-mark" style={this.zxMarkStyle}>{slotText}</div>;
    }
}
