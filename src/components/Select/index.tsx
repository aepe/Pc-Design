import { Component, Vue, Provide, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';

// components
import Dropdown from './dropdown';

/**************************** Props ****************************/
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

/**************************** Interfaces ***********************/
interface SlotsInstance {
  list: Array<Vue.Component>;
}

@Component({
  components: {
    Dropdown
  }
})
export default class ZSelect extends BaseProps {
  /* ************************ Provide ************************ */
  @Provide()
  private select: Vue = this;

  /* ************************ Main *************************** */
  private hasInstance: boolean = false;

  private slots: Array<VNode> = this.$Zutil.filterEmpty(this.$slots.default) || [];

  private slotsInstance: SlotsInstance = {
    list: []
  };

  private setOptionInstance(): void {
    if (!this.hasInstance) {
      this.hasInstance = true;
      this.slotsInstance.list = this.slots.map((slot) => {
        let componentOptions = slot.componentOptions;
        if (componentOptions.tag === 'z-select-option') return slot.componentInstance;
      });
    }
  }

  private created(): void {
    this.$ZBus.$on('slotMounted', () => {
      this.setOptionInstance();
    });
  }

  /* ************************ Render ************************* */
  render(): JSX.Element {
    return (
      <div class="z-select">
        <span>select</span>
        <Dropdown />
      </div>
    );
  }
}
