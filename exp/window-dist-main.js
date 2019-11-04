(function (exports, __vue_normalize__) {
    'use strict';

    __vue_normalize__ = __vue_normalize__ && __vue_normalize__.hasOwnProperty('default') ? __vue_normalize__['default'] : __vue_normalize__;

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    var script = {
        name: 'mt-button'
    };

    /* script */
    var __vue_script__ = script;

    /* template */
    var __vue_render__ = function __vue_render__() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("button", [_vm._v("\n    button爱仕达大\n")]);
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = undefined;
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject */

    /* style inject SSR */

    /* style inject shadow dom */

    var VList = __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

    /*
     * @abstract:
     * @version:
     * @Author: bhabgs
     * @Date: 2019-10-29 16:40:33
     * @LastEditors: bhabgs
     * @LastEditTime: 2019-10-29 16:52:01
     */
    var zxUtil = (function () {
      console.log('');
    });

    /*
     * @abstract:
     * @version:
     * @Author: bhabgs
     * @Date: 2019-10-29 10:54:09
     * @LastEditors: bhabgs
     * @LastEditTime: 2019-10-29 16:41:29
     */
    var components = [VList];
    var install = function install(Vue) {
        Vue.prototype.$zxUtil = zxUtil;
        components.forEach(function (component) {
            Vue.component(component.name, component);
        });
    };
    // 自动注册组件
    if (typeof window !== 'undefined' && window.Vue) {
        install(window.Vue);
    }

    exports.default = install;

}(this.mtUtil = this.mtUtil || {}, __vue_normalize__));
