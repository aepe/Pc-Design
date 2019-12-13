import { Component, Vue, Inject } from 'vue-property-decorator';
import { VNode } from 'vue';

@Component
export default class ZTableHead extends Vue {
  /* ************************ Inject ************************ */
  @Inject()
  private table!: any;

  /* ************************ Main ************************** */
  private get getHTs(): JSX.Element {
    return (
      <tr>
        {this.table.column.map((col: any) => (
          <th align={col.align || 'left'}>{col.label}</th>
        ))}
      </tr>
    );
  }

  /* ************************ Render ************************ */
  render(): JSX.Element {
    const colSlots: VNode[] = this.$Zutil.singleSlot(this.$slots.col) || [];

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
