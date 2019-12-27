import { Component, Vue, Inject } from 'vue-property-decorator';

/* ************************ Props ************************* */

@Component
export default class ZTableCol extends Vue {
  /* ************************ Inject ************************ */
  @Inject()
  private table!: any;

  /* ************************ Main ************************** */
  private get getCOLs(): Array<JSX.Element> {
    return this.table.column.map((item: any) => <col style={{ width: item.width }} />);
  }

  /* ************************ Render ************************ */
  render(): JSX.Element {
    return <colgroup>{this.getCOLs}</colgroup>;
  }
}
