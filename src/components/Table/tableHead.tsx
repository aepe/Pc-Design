import { Component, Vue, Inject } from 'vue-property-decorator';

@Component
export default class ZTableHead extends Vue {
  @Inject()
  table!: any;

  render() {
    // let slots = this.$slots.default || [];

    return (
      <div class="thead">
        <table>
          <colgroup>
            <col style="width:100px; background:#f00;" />
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
