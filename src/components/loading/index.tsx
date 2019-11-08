import {Vue, Component, Prop} from 'vue-property-decorator';
import './loading.less';
@Component
export default class Mtloading extends Vue{
    @Prop({default: '#333'}) public dotBackground?: string;
    @Prop({default: 'transprant'}) public background?: string;
    public boxBGColor: any = {
        backgroundColor: this.background,
    }
    public dotBGColor: any = {
        backgroundColor: this.dotBackground,
    }
    render() {
        return <div class="wpp-loading-box" style={this.boxBGColor}>
            <div class="loader">
                <div class="dot dot1" style={this.dotBGColor}></div>
                <div class="dot dot2" style={this.dotBGColor}></div>
                <div class="dot dot3" style={this.dotBGColor}></div>
            </div>
        </div>
       
    }
}
