import { Component, Vue, Emit, Prop } from 'vue-property-decorator';
@Component
export default class Zdrag extends Vue {
  @Prop({
    default: () => {
      return {
        scaleSwitch: true,
        dragSwitch: true,
        dragChangePositon: false,
      };
    },
  })
  public componentLock!: any;
  @Prop({
    default: () => {
      return {
        width: 150,
        height: 100,
        top: 125,
        left: 125,
      };
    },
  })
  public initInfo?: any;

  public dragBox: any = null;
  get scaleWidthComputed() {
    if (this.scaleSize.width === 'block') {
      return '100%';
    } else {
      return this.scaleSize.width + 'px';
    }
  }
  get scaleHeightComputed() {
    if (this.scaleSize.height === 'block') {
      return '100%';
    } else {
      return this.scaleSize.height + 'px';
    }
  }
  // 拖拽 state
  public dragSwitch: boolean = false;
  public dragLock: boolean = false;
  public dragPositions: any = {
    x: 0,
    y: 0,
    l: 0,
    t: 0,
  };
  public resultPosition: any = {
    left: 0,
    top: 0,
  };
  // 缩放 state
  public scaleSwitch: boolean = false;
  public scaleLock: boolean = false;
  public currentBlock: string = '';
  public scaleSize: any = {
    width: 0,
    height: 0,
  };
  public moveSize: any = {
    width: 0,
    height: 0,
  };
  public scleboxSize: any = {
    width: 0,
    height: 0,
  };
  public scaleBlockArr: any[] = [
    {
      code: 'top',
      show: true,
    },
    {
      code: 'left',
      show: true,
    },
    {
      code: 'bottom',
      show: true,
    },
    {
      code: 'right',
      show: true,
    },
  ];
  // 拖拽换位置 state
  public dragChangePositon: boolean = false;
  public dragBlockLock: boolean = false;
  public dragChangePositionBlock: boolean = false;
  public mounted() {
    this.$nextTick(() => {
      this.scaleSwitch = this.componentLock.scaleSwitch;
      this.dragSwitch = this.componentLock.dragSwitch;
      this.dragChangePositon = this.componentLock.dragChangePositon;
      if (this.dragChangePositon) {
        this.scaleBlockArr.forEach((item: any) => {
          if (item.code !== 'bottom') {
            item.show = false;
          }
        });
      }
      this.dragBox = this.$refs.dragBox;
      this.scaleSize.width = this.initInfo.width;
      this.scaleSize.height = this.initInfo.height;
      this.resultPosition.top = this.initInfo.top;
      this.resultPosition.left = this.initInfo.left;
    });
  }
  public handleDragBox(e: any) {
    e.stopPropagation();
    if (this.dragChangePositon && e.target.className === 'drag-change-item') {
      this.dragChangePositionBlock = !this.dragChangePositionBlock;
    }
  }

  // 拖拽 function
  public dragMouseDownFn(e: any) {
    this.dragPositions.x = e.clientX;
    this.dragPositions.y = e.clientY;
    this.dragPositions.l = this.dragBox.offsetLeft;
    this.dragPositions.t = this.dragBox.offsetTop;
    this.dragLock = true;
    if (this.dragLock && this.dragSwitch) {
      document.body.style.userSelect = 'none';
      window.onmousemove = this.dragMouseMoveFn;
      window.onmouseup = this.dragmouseupfn;
    }
  }
  public dragMouseMoveFn(e: any) {
    const boxWidth = this.dragBox.parentNode.offsetWidth;
    const boxHeight = this.dragBox.parentNode.offsetHeight;
    const itemWidth = this.dragBox.offsetWidth;
    const itemHeight = this.dragBox.offsetHeight;
    const ml = e.clientX - (this.dragPositions.x - this.dragPositions.l);
    const mt = e.clientY - (this.dragPositions.y - this.dragPositions.t);
    // 水平方向的拖动及拖动限制
    if (ml > 0 && ml <= boxWidth - itemWidth) {
      this.resultPosition.left = ml;
    } else if (ml <= 0) {
      this.resultPosition.left = 0;
    } else {
      this.resultPosition.left = boxWidth - itemWidth;
    }
    // 垂直方向的拖动及拖动限制
    if (mt > 0 && mt <= boxHeight - itemHeight) {
      this.resultPosition.top = mt;
    } else if (mt <= 0) {
      this.resultPosition.top = 0;
    } else {
      this.resultPosition.top = boxHeight - itemHeight;
    }
  }
  @Emit()
  public dragmouseupfn() {
    this.dragLock = false;
    document.body.style.userSelect = 'auto';
    window.onmousemove = null;
    window.onmouseup = null;
    return this.resultPosition;
  }

  // 缩放 function
  public scaleMouseDownFn(e: any, type: string) {
    e.stopPropagation();
    this.scaleLock = true;
    this.currentBlock = type;
    this.dragPositions.x = e.clientX;
    this.dragPositions.y = e.clientY;
    const num = 0;
    this.dragPositions.l = this.dragBox.offsetLeft - num;
    this.dragPositions.t = this.dragBox.offsetTop - num;
    switch (type) {
      case 'right':
      case 'left':
        this.moveSize.width = e.clientX;
        this.scleboxSize.width = this.dragBox.offsetWidth;
        break;
      case 'bottom':
      case 'top':
        this.moveSize.height = e.clientY;
        this.scleboxSize.height = this.dragBox.offsetHeight;
        break;
    }
    if (!this.scaleSwitch || !this.scaleLock) {
      return false;
    }
    document.body.style.userSelect = 'none';
    window.onmouseup = this.scalemouseupfn;
    window.onmousemove = this.scaleMouseMoveFn;
  }
  public scaleMouseMoveFn(e: any) {
    const WidthSizeLimit = this.dragBox.parentNode.offsetWidth;
    const HeightSizeLimit = this.dragBox.parentNode.offsetHeight;
    switch (this.currentBlock) {
      case 'right':
        this.scaleSize.width =
          e.clientX - this.moveSize.width + this.scleboxSize.width;
        if (this.scaleSize.width >= WidthSizeLimit) {
          this.scaleSize.width = WidthSizeLimit;
        } else if (this.scaleSize.width <= 0) {
          this.scaleSize.width = 0;
        }
        break;
      case 'bottom':
        this.scaleSize.height =
          e.clientY - this.moveSize.height + this.scleboxSize.height;
        if (this.scaleSize.height >= HeightSizeLimit) {
          this.scaleSize.height = HeightSizeLimit;
        } else if (this.scaleSize.height <= 0) {
          this.scaleSize.height = 0;
        }
        break;
      case 'left':
        this.scaleSize.width =
          this.moveSize.width - e.clientX + this.scleboxSize.width;
        this.resultPosition.left =
          e.clientX - (this.dragPositions.x - this.dragPositions.l);
        if (this.scaleSize.width >= WidthSizeLimit) {
          this.scaleSize.width = WidthSizeLimit;
        } else if (this.scaleSize.width <= 0) {
          this.scaleSize.width = 0;
        }
        break;
      case 'top':
        this.scaleSize.height =
          this.moveSize.height - e.clientY + this.scleboxSize.height;
        this.resultPosition.top =
          e.clientY - (this.dragPositions.y - this.dragPositions.t);
        if (this.scaleSize.height >= HeightSizeLimit) {
          this.scaleSize.height = HeightSizeLimit;
        } else if (this.scaleSize.height <= 0) {
          this.scaleSize.height = 0;
        }
        break;
    }
  }
  @Emit()
  public scalemouseupfn(e: any) {
    this.scaleLock = false;
    window.onmouseup = null;
    window.onmousemove = null;
    document.body.style.userSelect = 'auto';
    return this.scaleSize;
  }

  // 拖拽换位置 function
  @Emit()
  public dragstartfn(e: any) {
    return e;
  }
  @Emit()
  public dragendfn(e: any) {
    return e;
  }
  @Emit()
  public dropoverfn(e: any) {
    return e;
  }
  render() {
    const slotText = this.$slots.default || <div class='defalut-box'></div>;
    return (
      <div
        ref='dragBox'
        class={['ml-drag-scale', { hoverDo: !this.dragChangePositon }]}
        style={[
          {
            left: this.resultPosition.left + 'px',
            top: this.resultPosition.top + 'px',
            width: this.scaleWidthComputed,
            height: this.scaleHeightComputed,
            cursor: this.dragSwitch ? 'move' : 'default',
            position: this.dragSwitch ? 'absolute' : 'relative',
          },
        ]}
        draggable={this.dragBlockLock}
        on-mousedown={this.dragMouseDownFn}
        on-dragstart={this.dragstartfn}
        on-dragend={this.dragendfn}
        on-dragover={this.dropoverfn}
        on-click={event => {
          this.handleDragBox(event);
        }}
      >
        {this.scaleBlockArr.map(item => {
          return (
            <div
              class={[
                'scale-block',
                {
                  'top-block': item.code === 'top',
                  'left-block': item.code === 'left',
                  'bottom-block': item.code === 'bottom',
                  'right-block': item.code === 'right',
                  'scale-block-show': this.scaleSwitch,
                  'display-block': this.dragChangePositionBlock,
                },
                !item.show ? 'display-none' : '',
              ]}
              on-mousedown={event => {
                this.scaleMouseDownFn(event, item.code);
              }}
            ></div>
          );
        })}
        <div
          class={[
            'drag-block',
            {
              'drag-block-show': this.dragChangePositon,
              'display-block': this.dragChangePositionBlock,
            },
          ]}
          on-mouseenter={() => {
            this.dragBlockLock = true;
          }}
          on-mouseleave={() => {
            this.dragBlockLock = false;
          }}
        ></div>
        {slotText}
      </div>
    );
  }
}
