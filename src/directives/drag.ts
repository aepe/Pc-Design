/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 14:04:54
 * @LastEditors: wpp
 * @LastEditTime: 2019-11-19 09:41:22
 */
const install = (Vue: any) => {
  return Vue.directive('ZDrag', {
    bind(el: any, binding: any, vnode: any, oldVnode: any) {
      if (!binding.expression || binding.value) {
        const dragAttribute: any = {
          x: 0,
          y: 0,
          w: 0,
          h: 0
        };
        let dragLock: boolean = false;
        let parentNode: any = null;
        el.onmousedown = function (e: any) {
          dragLock = true;
          document.body.style.userSelect = 'none';
          parentNode = el.parentNode;
          parentNode.style.position = 'relative';
          el.style.position = 'absolute';
          dragAttribute.x = e.clientX;
          dragAttribute.y = e.clientY;
          dragAttribute.w = el.offsetLeft;
          dragAttribute.h = el.offsetTop;
          window.onmousemove = mouseMoveFn;
          window.onmouseup = mouseUpFn;
        };
        const mouseMoveFn = function (e: any) {
          if (!dragLock) {
            return false;
          }
          const boxWidth = parentNode.clientWidth;
          const boxHeight = parentNode.clientHeight;
          const itemWidth = el.offsetWidth;
          const itemHeight = el.offsetHeight;
          const mx = e.clientX;
          const my = e.clientY;
          const ml = mx - (dragAttribute.x - dragAttribute.w);
          const mt = my - (dragAttribute.y - dragAttribute.h);
          // 水平方向的拖动及拖动限制
          if (ml >= 0 && ml <= (boxWidth - itemWidth)) {
            el.style.left = ml + 'px';
          } else if (ml < 0) {
            el.style.left = 0;
          } else {
            el.style.left = (boxWidth - itemWidth) + 'px';
          }
          // 垂直方向的拖动及拖动限制
          if (mt >= 0 && mt <= (boxHeight - itemHeight)) {
            el.style.top = mt + 'px';
          } else if (mt < 0) {
            el.style.top = 0;
          } else {
            el.style.top = (boxHeight - itemHeight) + 'px';
          }
        };
        const mouseUpFn = function (e: any) {
          dragLock = false;
          document.body.style.userSelect = 'auto';
          window.onmousemove = null;
          window.onmouseup = null;
        };
      }
    }
  });
};
const ZDrag = {
  version: '0.0.1',
  name: 'ZDrag',
  install
};
export { ZDrag };
export default ZDrag;
