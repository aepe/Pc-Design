import { Component, Vue, Provide } from 'vue-property-decorator';
import { VNode } from 'vue';

// components
import Dropdown from './dropdown';
import Input from './input';

/**************************** Props ****************************/
const BaseProps = Vue.extend({
  props: {
    // 双向绑定值 v-model
    value: {
      required: false,
      type: [String, Object],
      default() {
        return '';
      }
    }
  }
});

/**************************** Interfaces ***********************/
interface Value {
  value?: string | number;
  label?: string | number;
}

interface WatchData {
  instanceList: Array<Vue.Component>;
  isFocus: boolean;
  hasInstance: boolean;
  slots: Array<VNode>;
  value: Array<Value>;
}

interface DropdownData {
  hasDropdown: boolean;
  style: object;
}

@Component({
  components: {
    Input
  }
})
export default class ZSelect extends BaseProps {
  /* ************************ Provide ************************ */
  @Provide()
  private select: Vue = this;

  /* ************************ Main *************************** */
  // DESC 需要监听变化的数据 private/inject
  private watchData: WatchData = {
    // 插槽实例instanceList
    instanceList: [],
    // 焦点状态
    isFocus: false,
    // 判断是否有插槽的实例 标识
    hasInstance: false,
    // 插槽
    slots: this.$Zutil.filterEmpty(this.$slots.default) || [],
    // 选中的value
    value: []
  };

  // DESC dropdown相关
  private dropdownData: DropdownData = {
    // 是否有dropdown
    hasDropdown: false,
    // 样式
    style: {}
  };

  /**
   * @DESC: 组件created钩子
   * @return: void
   */
  private created(): void {
    this.busOn();
    this.setValue();
  }

  /**
   * @DESC: bus on 监听
   * @return: void
   */
  private busOn(): void {
    // 插槽实例完成
    this.$ZBus.$on('slotMounted', () => {
      if (!this.watchData.hasInstance) {
        this.setSlotsInstance();
      }
    });
    // item点击返回values
    this.$ZBus.$on('itemClick', (values: Value) => {
      this.watchData.value = [values];
      this.$emit('input', values.value);
    });
  }

  /**
   * @DESC: 设置插槽实例
   * @return: void
   */
  private setSlotsInstance(): void {
    this.watchData.hasInstance = true;
    this.watchData.instanceList = this.watchData.slots.map((slot) => {
      let componentOptions = slot.componentOptions;
      if (componentOptions.tag === 'z-select-option') return slot.componentInstance;
    });
  }

  /**
   * @DESC: 设置选中的数据值
   * @return: void
   */
  private setValue(): void {
    this.watchData.value = this.watchData.slots.reduce((prev: VNode | undefined | Array<Value>, cur: VNode) => {
      const componentOptions = cur.componentOptions;
      const curVal = (componentOptions.propsData as any).value;
      const curLabel = (componentOptions.propsData as any).label;
      if (curVal == this.value) {
        (prev as Array<Value>).push({
          value: curVal,
          label: curLabel
        });
      }
      return prev as Array<Value>;
    }, []);
  }

  /**
   * @DESC: 设置焦点状态
   * @param {boolean} isFocus
   * @return: void
   */
  private selectFocus(): void {
    this.setDropdownStyle();
    this.setDropdownStatus();
  }

  /**
   * @DESC: 设置dropdown状态
   * @return: void
   */
  private setDropdownStatus() {
    // 判断是否有dropdown元素
    if (!this.dropdownData.hasDropdown) {
      this.insertDropdown();

      // 设置状态
      this.dropdownData.hasDropdown = true;
    }
  }

  /**
   * @DESC: 插入dropdown组件
   * @return: void
   */
  private insertDropdown(): void {
    const _this = this;
    const dropdownConstructor: JSX.constructor = Vue.extend(Dropdown);
    const dropdownInstance: Vue.Component = new dropdownConstructor({
      data() {
        return {
          select: _this
        };
      }
    });
    dropdownInstance.$parent = _this;
    dropdownInstance.$mount();

    document.body.appendChild(dropdownInstance.$el);
  }

  /**
   * @DESC: 设置dropdown位置
   * @return: void
   */
  private setDropdownStyle(): void {
    // select位置
    let style: any = {};
    if (this.watchData.isFocus) {
      const selectDom = this.$el as HTMLElement;
      const BoundingClientRect = selectDom.getBoundingClientRect();
      style = {
        position: 'absolute',
        'z-index': 2000,
        left: Math.round(BoundingClientRect.left) + 'px',
        top: Math.round(BoundingClientRect.top + BoundingClientRect.height + 3) + 'px',
        width: Math.round(BoundingClientRect.width) + 'px',
        display: 'block'
      };
    } else {
      style.display = 'none';
    }

    this.dropdownData.style = style;
  }

  /**
   * @DESC: select顶级元素classname
   * @return: object
   */
  private get selectClass(): object {
    return {
      ['z-select']: true,
      ['z-select-isfocus']: this.watchData.isFocus
    };
  }

  /* ************************ Render ************************* */
  render(): JSX.Element {
    return (
      <div class={this.selectClass}>
        <Input onSelectFocus={this.selectFocus} />
        {/* <Dropdown /> */}
      </div>
    );
  }
}
