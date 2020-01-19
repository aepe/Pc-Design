import { Component, Vue } from 'vue-property-decorator';

/**************************** Props ****************************/
const BaseProps = Vue.extend({
  props: {}
});

@Component
export default class ZDropdown extends BaseProps {
  /* ************************ Inject ************************* */

  /* ************************ Main *************************** */
  // 顶级组件实例
  private select: any;

  /* ************************ Render ************************* */
  render(): JSX.Element {
    const slots = this.select.watchData.slots;

    return (
      <div class="z-select-dropdown" style={this.select.dropdownData.style}>
        <div class="z-select-dropdown__wrap">
          <div class="z-select-dropdown__scroll">
            <ul>{slots}</ul>
          </div>
        </div>
      </div>
    );
  }
}
