import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
import './loading.less';
@Component
export default class Mtloading extends Vue{
    @Prop({default: '#333'}) public dotBackground?: string;
    @Prop({default: 'rgba(119, 111, 111, .7)'}) public background?: string;
    @Prop({default: false}) public markVisible?: boolean;
    @Prop({default: true}) public fullScreen?: boolean;
    public markStyle: any = {
        backgroundColor: this.background,
    }
    public dotBGColor: any = {
        backgroundColor: this.dotBackground,
    }
    @Watch('markVisible') public setMarkVisible(val: any) {
        if (val) {
            if (this.fullScreen) {
                this.setMarkFn('fixed', 'hidden');
            } else {
                this.setMarkFn('absolute', 'auto');
            }
        } else {
            this.setMarkFn('absolute', 'auto');
        }
    }
    public mounted() {
        if (this.fullScreen) {
            this.setMarkFn('fixed', 'hidden');
        } else {
            this.setMarkFn('absolute', 'auto');
        }
    }
    public setMarkFn (position: string , overflow: string) {
        this.markStyle.position = position;
        this.$nextTick(() => {
            document.body.style.overflow = overflow;
        })
    }
    render() {
        if (!this.markVisible) {
            return false;
        }
        return <div class="wpp-loading-mark" style={this.markStyle}>
            <div class="loader">
                <div class="dot dot1" style={this.dotBGColor}></div>
                <div class="dot dot2" style={this.dotBGColor}></div>
                <div class="dot dot3" style={this.dotBGColor}></div>
            </div>
        </div>
    }
}
