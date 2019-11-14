/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 14:04:54
 * @LastEditors: 王晓龙
 * @LastEditTime: 2019-11-13 11:38:49
 */
// 找到components文件夹下以.vue命名的文件

import ZButton from './button/main';
import Zloading from './Loading/main';
import { ZTag, ZCheckTag } from './Tag/main';
import Input from './Input/main';
import ZTimeline from './Timeline/main';
import ZTimelineItem from './TimelineItem/main';
import ZTable from './Table/main';
import ZTableColumn from './TableColumn/main';
const compontents: any[] = [ZButton, Zloading, ZTag, ZCheckTag, Input, ZTimeline, ZTimelineItem, ZTable, ZTableColumn];
export { compontents };
export default compontents;
