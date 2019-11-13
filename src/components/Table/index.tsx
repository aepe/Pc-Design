import { Component, Vue, Prop, Provide } from 'vue-property-decorator';
import TableHeader from './tableHead';

@Component
export default class ZTable extends Vue {
    @Provide()
    table = this;

    render() {
        let slots = this.$slots.default || [];

        console.log(slots);

        return (
            <div class="z-table">
                {/* table header */}
                <TableHeader />
                <div class="tbody">
                    <div class="tbody-scroll">
                        <table>
                            <colgroup>
                                <col style="width:100px; background:#f00;" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>aaa</p>
                                    </td>
                                    <td>
                                        <p>aaa</p>
                                    </td>
                                    <td>
                                        <p>aaa</p>
                                    </td>
                                    <td>
                                        <p>aaa</p>
                                    </td>
                                    <td>
                                        <p>aaa</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <div class="noData">暂无数据</div> */}
            </div>
        );
    }
}
