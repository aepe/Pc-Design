import { Component, Vue, Inject } from 'vue-property-decorator';

@Component
export default class ZTableBody extends Vue {
  /* ************************ Inject ************************ */
  @Inject()
  private table!: any;

  /* ************************ Main ************************** */
  private getTDs(data: any): JSX.Element[] {
    return this.table.column.map((col: any) => <td align={col.align || 'left'}>{data[col.prop]}</td>);
  }

  get getTRs(): JSX.Element[] {
    return this.table.data.map((data: any) => <tr>{this.getTDs(data)}</tr>);
  }

  /* ************************ Render ************************ */
  render() {
    const colSlots = this.$slots.default || [];

    return (
      <div class="z-table-body">
        <table>
          {colSlots}
          <tbody>{this.getTRs}</tbody>
        </table>
      </div>
    );
  }
}
