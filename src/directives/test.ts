export default (Vue: any) => {
    return Vue.directive('mt-test', {
        inserted(el: any, binding: any, vnode: any) {
            el.innerText = 'test';
        },
    });
};
