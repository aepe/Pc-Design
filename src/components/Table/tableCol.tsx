import { Component, Vue, Inject } from 'vue-property-decorator';

@Component
export default class ZTableCol extends Vue {
  /* ************************ Props ************************* */

  /* ************************ Inject ************************ */
  @Inject()
  private table!: any;

  /* ************************ Main ************************** */
  private get getCOLs(): JSX.Element[] {
    return;
    return this.table.column.map((item: any) => <col style={{ width: item.width }} />);
  }

  /* ************************ Render ************************ */
  render() {
    return <colgroup>{this.getCOLs}</colgroup>;
  }
}
