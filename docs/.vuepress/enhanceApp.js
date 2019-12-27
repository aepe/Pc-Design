/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-07 09:20:06
 * @LastEditors: 王晓龙
 * @LastEditTime: 2019-12-16 16:51:28
 */
import mtUtil from "../../dist/js/zui.min.es";
import "../../dist/css/z-style.css";

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.use(mtUtil);
  // 每次跳转页面 scrollTop都置为0
  router.afterEach((to, from) => {
    const mainScrollContent = document.getElementById('bhabgs-content');
    if (mainScrollContent) mainScrollContent.scrollTop = 0;
  })
  // ...做一些其他的应用级别的优化
};
