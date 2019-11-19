/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 14:04:54
 * @LastEditors: 王晓龙
 * @LastEditTime: 2019-11-19 09:26:31
 */
// 找到components文件夹下以.vue命名的文件

import ZButton from './button/main';
import Zloading from './Loading/main';
import Zdrag from './Drag/main';
import { ZTag, ZCheckTag } from './Tag/main';
import Input from './Input/main';
import ZTimeline from './Timeline/main';
import ZTimelineItem from './TimelineItem/main';
import ZTable from './Table/main';
const compontents: any[] = [ZButton, Zloading, ZTag, ZCheckTag, Input, ZTimeline, ZTimelineItem, ZTable, Zdrag];
export { compontents };
export default compontents;
