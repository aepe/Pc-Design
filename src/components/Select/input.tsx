import { Component, Vue, Inject, Emit } from 'vue-property-decorator';

/*************************** Props ****************************/
const BaseProps = Vue.extend({
  props: {}
});

/*************************** Interfaces ***********************/
interface SelectedData {
  labels?: any[];
  values?: any[];
}

@Component
export default class ZSelectInput extends BaseProps {
  /* ************************ Inject ************************* */
  @Inject()
  private select!: any;

  /* ************************ Main *************************** */
  // DESC 是否有选中的值
  private hasValus: boolean = false;

  /**
   * @DESC: 组件created钩子
   * @return: void
   */
  private created(): void {
    this.docClick();
  }

  /**
   * @DESC: 文档点击事件
   * @return: void
   */
  private docClick(): void {
    document.onclick = (e: MouseEvent) => {
      if (this.select.watchData.isFocus) {
        this.selectFocus(e);
      }
    };
  }

  /**
   * @DESC: 发送焦点状态
   * @return: boolean
   */
  @Emit('selectFocus')
  private selectFocus(e?: MouseEvent): void {
    e.stopPropagation();
    this.select.watchData.isFocus = !this.select.watchData.isFocus;
  }

  /**
   * @DESC: 设置label
   * @return: object
   */
  private get getSelectedData(): SelectedData {
    this.hasValus = this.select.watchData.value.length ? true : false;
    return {
      labels: this.select.watchData.value.map((item: any) => item.label),
      values: this.select.watchData.value.map((item: any) => item.value)
    };
  }

  /* ************************ Render ************************* */
  render(): JSX.Element {
    return (
      <div class="z-select-input">
        <div class="z-select-input__inner" onClick={this.selectFocus}>
          <div class="z-select-input__render">
            {!this.hasValus ? <div class="z-select-input__placeholder">请选择</div> : ''}
            <div class="z-select-input__value">{this.getSelectedData.labels.join(' ')}</div>
            <div class="z-select-input__search"></div>
          </div>
          <div class="z-select-input__icon">
            <span class="iconfont zxdown-blank"></span>
          </div>
        </div>
      </div>
    );
  }
}
