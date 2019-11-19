import { Component, Vue, Inject } from 'vue-property-decorator';

@Component
export default class ZTableColumn extends Vue {
  @Inject()
  table!: any;

  @Inject()
  tableData!: any[];

  render() {
    return <div class="z-table-column">aaaa</div>;
  }
}
