/*
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-10-29 10:57:24
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-10-29 14:13:25
 */
import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'mtUtil',
    file: 'dist/mt-util.umd.js',
    format: 'umd',
    extend: true
  },
})

export default config