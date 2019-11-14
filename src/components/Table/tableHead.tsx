import { Component, Vue, Inject } from 'vue-property-decorator';

@Component
export default class ZTableHead extends Vue {
  @Inject()
  table!: any;

  @Inject()
  slots!: any[];

  @Inject()
  tableData!: any[];

  render() {
    // let slots = this.$slots.default || [];
    console.log(this.slots);

    return (
      <div class="z-table-header">
        <table>
          <colgroup>
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>aaaaaa</th>
              <th>aaaaaa</th>
              <th>aaaaaa</th>
              <th>aaaaaa</th>
              <th>aaaaaa</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
