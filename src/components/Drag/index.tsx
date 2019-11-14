/*
 * @abstract: 
 * @version: 
 * @Author: wpp
 * @Date: 2019-11-08 11:48:49
 * @LastEditors: wpp
 * @LastEditTime: 2019-11-14 12:14:45
 */
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Zdrag extends Vue {
	render() {
		const slotText = this.$slots.default ||
			<div class="drag-item"></div>
		return <div class="drag-box">
			<div
				ref="dragBox"
				class="drag-main"
			// style={{left: resultPosition.rl + "px", top: resultPosition.rt + "px"}}
			>{slotText}</div>
		</div>
	}
}
