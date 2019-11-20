/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-20 17:29:28
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-20 18:19:23
 */
let optList = [];
const outtypes = ['es', 'iife', 'umd'];
const reset = (format) => {
   return {
        name: 'Zui',
        file: `dist/js/zui.min.${format}.js`,
        format
   }
}
const making = () => {
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
        for(let i of outtypes) {
            let data = reset(i);
            optList.push(data);
        }
    } else {
        let data = reset('es');
            optList.push(data);
    }
}
making();
export default optList;