/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-10-29 10:54:09
 * @LastEditors: bhabgs
<<<<<<< HEAD
 * @LastEditTime: 2019-11-12 15:44:29
=======
 * @LastEditTime: 2019-11-12 11:26:30
>>>>>>> 加入日志输出
 */
import Vue from 'vue';
import {compontents} from './components';
import directives from './directives';
import Zutil from './packages';

// 开发组件时可以使用自定义指令
Vue.use(directives);

// 按需引用组件
let componentsExportList: any = {};


// 循环组件
// compontents.forEach((component) => {
//     componentsExportList[component.name] = component;
//     // 按需引入组件install
//     component.install = (Vue: any) => Vue.component(component.name, component);
// });

import './styles/index.less';

// 注册install
const install = function(Vue: any) {
    // 指令
    Vue.use(directives);
    // 工具
    Vue.prototype.$Zutil = Zutil;
    // 测试组件
    vueComponents.forEach((item)=> {
        console.log(item.name)
    })
    // 组件
    compontents.forEach((component) => Vue.component(component.name, component.install));
};

// 自动注册组件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default { install, Zutil, ...componentsExportList };
