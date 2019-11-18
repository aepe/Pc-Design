import { Component, Vue, Inject } from 'vue-property-decorator';

@Component
export default class ZTableHead extends Vue {
  /* ************************ Inject ************************ */
  @Inject()
  private table!: any;

  /* ************************ Main ************************** */
  private get getHTs(): JSX.Element {
    return (
      <tr>
        {this.table.column.map((item: any) => (
          <th>{item.label}</th>
        ))}
      </tr>
    );
  }

  /* ************************ Render ************************ */
  render() {
    const colSlots = this.$slots.default || [];

    return (
      <div class="z-table-head">
        <table>
          {colSlots}
          <thead>{this.getHTs}</thead>
        </table>
      </div>
    );
  }
}
