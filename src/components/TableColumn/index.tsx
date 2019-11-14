import { Component, Vue, Inject } from 'vue-property-decorator';

@Component
export default class ZTableColumn extends Vue {
  @Inject()
  table!: any;

  render() {
    // let slots = this.$slots.default || [];

    return <div class="z-table-column">aaaa</div>;
  }
}
