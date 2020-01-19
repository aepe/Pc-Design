import { Component, Vue, Inject } from 'vue-property-decorator';
import { VNode } from 'vue';

@Component
export default class ZTableBody extends Vue {
  /* ************************ Inject ************************ */
  @Inject()
  private table!: any;

  /* ************************ Main ************************** */
  private getTDs(data: any): Array<JSX.Element> {
    return this.table.column.map((col: any) => <td align={col.align || 'left'}>{data[col.prop]}</td>);
  }

  private get getTRs(): Array<JSX.Element> {
    return this.table.data.map((data: any) => <tr>{this.getTDs(data)}</tr>);
  }

  /* ************************ Render ************************ */
  render(): JSX.Element {
    const colSlots: VNode = this.$Zutil.singleSlot(this.$slots.col) || [];

    return (
      <div class="z-table-body">
        <table>
          {colSlots}
          <tbody>{this.getTRs}</tbody>
        </table>
        {!this.table.data.length ? <div class="z-table__empty">暂无数据</div> : ''}
      </div>
    );
  }
}
