import { VNode } from 'vue';
import { Component, Vue, Provide } from 'vue-property-decorator';

// components
import TableCol from './tableCol';
import TableHeader from './tableHead';
import TableBody from './tableBody';

/*************************** Props *****************************/
const BaseProps = Vue.extend({
  props: {
    // 表格数据
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    // 表格每一项配置
    column: {
      type: Array,
      default() {
        return [];
      }
    },
    // 表格类型
    type: {
      type: String,
      default() {
        return '';
      }
    }
  }
});

@Component({
  components: {
    TableCol,
    TableHeader,
    TableBody
  }
})
export default class ZTable extends BaseProps {
  /* ************************ Provide ************************ */
  @Provide()
  private table: Vue = this;

  @Provide()
  private slots: Array<VNode> = this.$slots.default || [];

  /* ************************ Main *************************** */
  private get getClassName(): string {
    return 'z-table' + ((this.type && ` z-table__${this.type}`) || '');
  }

  /* ************************ Render ************************* */
  render(): JSX.Element {
    const tableCol = <TableCol slot="col" />;

    return (
      <div class={this.getClassName}>
        <TableHeader>{tableCol}</TableHeader>
        <TableBody>{tableCol}</TableBody>
      </div>
    );
  }
}
