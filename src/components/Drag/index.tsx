/*
 * @abstract:
 * @version:
 * @Author: wpp
 * @Date: 2019-11-08 11:48:49
 * @LastEditors: wpp
 * @LastEditTime: 2019-11-14 17:24:54
 */
import { Vue, Component, Emit } from 'vue-property-decorator';
@Component
export default class Zdrag extends Vue {
	public dragPositions = {
    x: 0,
    y: 0,
    l: 0,
    t: 0
	}
	
  public resultPosition = {
    rl: 0,
    rt: 0
	}
	
	public lock: boolean = false;
	
	public dragBox: any = null;

	get zxDragPosition() {
		return {
			left: this.resultPosition.rl + 'px',
			top: this.resultPosition.rt + 'px'
		};
	}

	public mounted() {
    this.$nextTick(() => {
      this.dragBox = this.$refs.dragBox;
    });
	}

	public mouseDownFn(e: any) {
    this.dragPositions.x = e.clientX;
    this.dragPositions.y = e.clientY;
    this.dragPositions.l = this.dragBox.offsetLeft;
    this.dragPositions.t = this.dragBox.offsetTop;
    this.lock = true;
    window.onmousemove = this.mouseMoveFn;
    window.onmouseup = this.mouseUpFn;
	}
	
  public mouseMoveFn(e: any) {
    if (!this.lock) {
      return false;
    }
    const boxWidth = document.getElementsByClassName('drag-box')[0].clientWidth;
    const boxHeight = document.getElementsByClassName('drag-box')[0].clientHeight;
    const itemWidth = this.dragBox.offsetWidth;
    const itemHeight = this.dragBox.offsetHeight;
    const ml = e.clientX - (this.dragPositions.x - this.dragPositions.l);
    const mt = e.clientY - (this.dragPositions.y - this.dragPositions.t);
    // 水平方向的拖动及拖动限制
    if (ml > 0 && ml < (boxWidth - itemWidth)) {
      this.resultPosition.rl = ml;
    } else if (ml < 0) {
			this.resultPosition.rl = 0;
    } else {
			this.resultPosition.rl = boxWidth - itemWidth;
    }
    // 垂直方向的拖动及拖动限制
    if (mt > 0 && mt < (boxHeight - itemHeight)) {
			this.resultPosition.rt = mt;
    } else if (mt < 0) {
      this.resultPosition.rt = 0;
    } else {
      this.resultPosition.rt = boxHeight - itemHeight;
    }
	}
	
  @Emit()
  public mouseUpFn() {
    this.lock = false;
		window.onmousemove = null;
    window.onmouseup = null;
    return this.resultPosition;
	}
	
	render() {
		const slotText = this.$slots.default ||
			<div class="drag-item"></div>;
		return <div class="drag-box">
			<div
				ref="dragBox"
				class="drag-main"
				on-mousedown={this.mouseDownFn}
				style={this.zxDragPosition}
			>{slotText}</div>
		</div>;
	}
}
