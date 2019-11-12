/*
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-12 14:04:54
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-12 15:43:25
 */
// 找到components文件夹下以.vue命名的文件

import ZButton from './button/main';
import Zloading from './loading/main';
import {ZTag, ZCheckTag} from './Tag/main';
import ZTimeline from './Timeline/main';
import ZTimelineItem from './TimelineItem/main';
const compontents: any[] = [
    ZButton,
    Zloading,
    ZTag,
    ZCheckTag,
    ZTimeline,
    ZTimelineItem
];
export {compontents}
export default compontents;
