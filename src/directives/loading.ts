/*
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-12 14:04:54
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-12 15:51:51
 */
import Vue from 'vue';
import Loading from '../components/loading/index';
const Mask = Vue.extend(Loading);
const install = (Vue: any) => {
    return Vue.directive('z-loading', {
        bind(el: any, binding: any, vnode: any, oldVnode: any) {
            el.style.position = 'relative';
            if (!binding.expression || binding.value) {
                const mask = new Mask({
                    el: document.createElement('div'),
                });
                mask.$props.fullScreen = false;
                mask.$props.visible = true;
                el.appendChild(mask.$el);
            }
           
        },
    });
};
const Zloading = {
    version: '0.0.1',
    name: 'ZButton',
    install
}
export {Zloading}
export default Zloading
