import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class Mtloading extends Vue{
    @Prop({default: '@Black'}) public dotBackground?: string;
    @Prop({default: 'rgba(0, 0, 0, .3)'}) public markBackground?: string;
    @Prop({default: false}) public visible?: boolean;
    @Prop({default: true}) public fullScreen?: boolean;

    get markStyle() {
        return {
            backgroundColor: this.markBackground,
            position: this.fullScreen ? 'fixed' : 'absolute',
        }
    }
    get dotBGColor() {
        return {
            backgroundColor: this.dotBackground,
        }
    }
    public mounted() {
        this.$nextTick(() => {
            if (!this.fullScreen) {
                let parentNode: any = document.getElementsByClassName('wpp-loading-mark')[0].parentNode;
                parentNode ? parentNode.style.position = 'relative' : '';
            }
        })
       
    }
    render() {
        if (!this.visible) {
            return false;
        }
        const slotText = this.$slots.default
        ||
        <div class="loader">
            <div class="dot dot1" style={this.dotBGColor}></div>
            <div class="dot dot2" style={this.dotBGColor}></div>
            <div class="dot dot3" style={this.dotBGColor}></div>
        </div> ;
        return <div class="wpp-loading-mark" style={this.markStyle}>{slotText}</div>
    }
}
