/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-10-29 10:54:09
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-05 16:29:00
 */
import vueComponents from './components';
import directives from './directives';
import zxUtil from './packages';

// 按需引用组件
let componentsExportList: any = {};
// loop
vueComponents.forEach((component) => {
    componentsExportList[component.name] = component;
    // 按需引入组件install
    component.install = (Vue: any) => {
        Vue.component(component.name, component);
    };
});

// 注册install
const install = function(Vue: any) {
    // 指令
    directives.install(Vue);
    // 工具
    Vue.prototype.$zxUtil = zxUtil;
    // 组件
    vueComponents.forEach((component) => Vue.component(component.name, component));
};

// 自动注册组件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default { install, ...componentsExportList }; //...componentsExportList
