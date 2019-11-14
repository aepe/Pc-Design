/*
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-10-29 10:57:24
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-14 10:46:29
 */
import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'mtUtil',
    file: 'dist/js/mt-util.umd.js',
    format: 'umd',
    extend: true
  },
})

export default config