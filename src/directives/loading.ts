import Vue from 'vue';
import mtloading from '../components/loading/index';
const Mask = Vue.extend(mtloading);
export default (Vue: any) => {
    return Vue.directive('mt-loading', {
        bind(el: any, binding: any, vnode: any, oldVnode: any) {
            const mask = new Mask({
                el: document.createElement('div'),
            });
            el.appendChild(mask.$el);
        },
    });
};
