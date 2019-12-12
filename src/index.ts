/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-10-29 10:54:09
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-12 12:15:28
 */
import Vue from "vue";
import { compontents } from "./components";
import directives from "./directives";
import Zutil from "./packages";
import "./styles/index.less";

// 开发组件时可以使用自定义指令
Vue.use(directives);

// 注册install
const install = function(Vue: any) {
  // 指令
  Vue.use(directives);
  // 工具
  Vue.prototype.$Zutil = Zutil;
  // 组件
  compontents.forEach(component =>
    Vue.component(component.name, (component as zCompontent).install)
  );
};

// 自动注册组件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default { install, Zutil };
