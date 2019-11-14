/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 15:32:20
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-12 15:37:13
 */
import Tag from './index';
import CheckTag from './check-tag';
const ZTag = {
    version: '0.0.1',
    name: 'ZTag',
    install: Tag
};
const ZCheckTag = {
    version: '0.0.1',
    name: 'ZCheckTag',
    install: CheckTag
};
export { ZTag, ZCheckTag };
export default ZTag;
