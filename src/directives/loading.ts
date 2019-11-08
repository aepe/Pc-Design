export default (Vue: any) => {
    return Vue.directive('mt-loading', {
        bind(el: any, binding: any, vnode: any, oldVnode: any) {
            console.log(123, el, binding, vnode, oldVnode);
            // el.innerText = 'test';
        },
    });
};
