import { Component, Vue, Provide, Emit, Prop } from 'vue-property-decorator';

/*************************** Props ****************************/
const BaseProps = Vue.extend({
  props: {
    // 标题
    title: {
      required: false,
      type: String,
      default() {
        return 'aaa';
      }
    }
  },
  data() {
    return {
      a: 'a'
    };
  }
});

@Component
export default class ZSelectOption extends BaseProps {
  @Prop({ default: 'bb' }) public b: string;
  /* ************************ Provide ************************ */
  @Provide()
  private selectOption: Vue = this;

  /* ************************ Main *************************** */

  @Emit('change')
  private change(e: MouseEvent): MouseEvent {
    return e;
  }

  private aa: string = 'aa';

  /* ************************ Render ************************* */
  render(): JSX.Element {
    return (
      <div class="z-select-option">
        <span>select option</span>
      </div>
    );
  }
}
