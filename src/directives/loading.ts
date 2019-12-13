/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 14:04:54
 * @LastEditors: wpp
 * @LastEditTime: 2019-11-18 09:40:16
 */
import Vue from "vue";
import Loading from "../components/Loading/index";
const Mask = Vue.extend(Loading);
const install = (Vue: any) => {
  return Vue.directive("Zloading", {
    bind(el: any, binding: any, vnode: any, oldVnode: any) {
      el.style.position = "relative";
      if (!binding.expression || binding.value) {
        const mask = new Mask({
          el: document.createElement("div")
        });
        mask.$props.fullScreen = false;
        mask.$props.visible = true;
        el.appendChild(mask.$el);
      }
    }
  });
};
const Zloading = {
  version: "0.0.1",
  name: "ZLoading",
  install
};
export { Zloading };
export default Zloading;
