/*
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-10-29 10:54:09
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-10-29 16:41:29
 */
import VList from './components/button/index';
import zxUtil from './packages'
const components = [VList]

const install = function (Vue) {

  Vue.prototype.$zxUtil = zxUtil;
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 自动注册组件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install