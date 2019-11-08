import {Vue, Component, Prop} from 'vue-property-decorator';
import './loading.less';
@Component
export default class Zloading extends Vue{
    @Prop({default: '#fff'}) public background?: string;
    public backgroundStyle: any = {backgroundColor: this.background}
    render() {
        return <div class="wpp-loader">
            <div class="dot dot1" style={this.backgroundStyle}></div>
            <div class="dot dot2" style={this.backgroundStyle}></div>
            <div class="dot dot3" style={this.backgroundStyle}></div>
        </div>
    }
}
