import Vue from 'vue';
import mtloading from '../components/loading/index';
const Mask = Vue.extend(mtloading);
export default (Vue: any) => {
    return Vue.directive('mt-loading', {
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
