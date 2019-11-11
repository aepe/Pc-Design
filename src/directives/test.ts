export default (Vue: any) => {
    return Vue.directive('z-test', {
        inserted(el: any, binding: any, vnode: any) {
            el.innerText = 'test';
        },
    });
};
