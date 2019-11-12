/*
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-07 17:07:51
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-12 15:52:50
 */
import loaidng from './loading'
const directives = [loaidng]
export default {
    install: (Vue: any) => {
        directives.forEach((item) => {
            item.install(Vue);
        })
    },
};
