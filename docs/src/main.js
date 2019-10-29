/*
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-10-29 11:44:57
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-10-29 14:12:51
 */
import Vue from 'vue'
import App from './App.vue'
import mtUtil from '../../dist/mt-util.min.js'
Vue.use(mtUtil.mtUtil.default)
new Vue({
  el: '#app',
  render: h => h(App)
})
