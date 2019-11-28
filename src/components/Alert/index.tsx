import { Component, Vue, Provide } from 'vue-property-decorator';
import { VNode } from 'vue';

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
    }
  }
});

@Component
export default class ZAlert extends BaseProps {
  /* ************************ Provide ************************ */
  @Provide()
  private alert: Vue = this;

  /* ************************ Render ************************* */
  render() {
    return (
      <div class="z-alert">
        <div class="z-alert-inner">
          <div class="z-alert-icon"></div>
          <div class="z-alert-content">
            <div class="z-alert-title">
              <span>{this.title}</span>
            </div>
          </div>
          <div class="close"></div>
        </div>
      </div>
    );
  }
}
