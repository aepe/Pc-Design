import { Component, Vue, Prop, Provide } from 'vue-property-decorator';
import TableHeader from './tableHead';

@Component({
  components: {
    TableHeader
  }
})
export default class ZTable extends Vue {
  @Prop({ type: Array, default: [] }) private data?: any[]; // 标题

  @Provide()
  table = this;

  @Provide()
  slots = this.$slots.default || [];

  @Provide()
  tableData = this.data;

  render() {
    console.log(this.$slots.default);
    return (
      <div class="z-table">
        <TableHeader />
        <div class="tbody">
          <div class="tbody-scroll">
            <table>
              <colgroup>
                {/* <col style="width:100px; background:#f00;" /> */}
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <td>
                    <p>aaa</p>
                  </td>
                  <td>
                    <p>aaa</p>
                  </td>
                  <td>
                    <p>aaa</p>
                  </td>
                  <td>
                    <p>aaa</p>
                  </td>
                  <td>
                    <p>aaa</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <div class="noData">暂无数据</div> */}
      </div>
    );
  }
}
