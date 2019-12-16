import { Component, Vue, Inject } from 'vue-property-decorator';
import { VNode } from 'vue';

/*************************** Props ****************************/
const BaseProps = Vue.extend({
  props: {
    // 标题
    // title: {
    //   required: false,
    //   type: String,
    //   default() {
    //     return '';
    //   }
    // }
  }
});

@Component
export default class ZDropdown extends BaseProps {
  /* ************************ Inject ************************* */
  @Inject()
  private select!: any;

  /* ************************ Main *************************** */

  /* ************************ Render ************************* */
  render(): JSX.Element {
    return (
      <div class="z-select-dropdown">
        <ul>{this.select.slots}</ul>
      </div>
    );
  }
}
