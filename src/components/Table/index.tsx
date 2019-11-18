import { VNode } from 'vue';
import { Component, Vue, Prop, Provide } from 'vue-property-decorator';

// components
import TableCol from './tableCol';
import TableHeader from './tableHead';
import TableBody from './tableBody';

@Component({
  components: {
    TableCol,
    TableHeader,
    TableBody
  }
})
export default class ZTable extends Vue {
  /* ************************ Props ************************** */
  @Prop({
    type: Array,
    default() {
      return [];
    }
  })
  private data?: any; // 数据

  @Prop({
    type: Array,
    default() {
      return [];
    }
  })
  private column?: any[]; // 每列的配置项

  @Prop({ type: String, default: '' }) private type?: string; // table类型

  /* ************************ Provide ************************ */
  @Provide()
  private table: Vue = this;

  @Provide()
  private slots: VNode[] = this.$slots.default || [];

  /* ************************ Main *************************** */

  /* ************************ Render ************************* */
  render() {
    const tableCol = <TableCol />;

    return (
      <div class="z-table">
        <TableHeader>{tableCol}</TableHeader>
        <TableBody>{tableCol}</TableBody>
        {/* <div class="noData">暂无数据</div> */}
      </div>
    );
  }
}
