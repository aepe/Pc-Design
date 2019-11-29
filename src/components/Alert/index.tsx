import { Component, Vue, Provide, Emit } from 'vue-property-decorator';

/*************************** Props ****************************/
const BaseProps = Vue.extend({
  props: {
    // 标题
    title: {
      required: true,
      type: String,
      default() {
        return '';
      }
    },
    // 类型
    type: {
      type: String,
      default() {
        return 'info';
      }
    },
    // 是否显示图标
    showIcon: {
      type: Boolean,
      default() {
        return false;
      }
    },
    // 是否显示关闭按钮
    showClose: {
      type: Boolean,
      default() {
        return true;
      }
    }
  }
});

@Component
export default class ZAlert extends BaseProps {
  /* ************************ Provide ************************ */
  @Provide()
  private alert: Vue = this;

  /* ************************ Main *************************** */
  private get getClassName(): string {
    return 'z-alert' + ((this.type && ` z-alert__${this.type}`) || '');
  }

  private get getIconClassName(): string {
    return 'iconfont' + ((this.type == 'info' && ' zxinfo') || (this.type == 'warning' && ' zxwarning') || (this.type == 'error' && ' zxerror') || (this.type == 'success' && ' zxsuccess'));
  }

  private get getIcon(): JSX.Element {
    return this.showIcon ? (
      <div class="z-alert-icon">
        <i class={this.getIconClassName}></i>
      </div>
    ) : (
      ''
    );
  }

  private get getClose(): JSX.Element | string {
    return this.showClose ? (
      <div class="z-alert-close" onClick={this.close}>
        <i class="iconfont zxclose"></i>
      </div>
    ) : (
      ''
    );
  }

  @Emit('close')
  private close(e) {
    this.$el.style.display = 'none';
    return e;
  }

  /* ************************ Render ************************* */
  render() {
    return (
      <div class={this.getClassName}>
        <div class="z-alert-inner">
          {this.getIcon}
          <div class="z-alert-content">
            <div class="z-alert-title z-ellipsis">
              <span>{this.title}</span>
            </div>
          </div>
          {this.getClose}
        </div>
      </div>
    );
  }
}
