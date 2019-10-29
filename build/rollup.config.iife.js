/*
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-10-29 10:58:34
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-10-29 13:14:25
 */
import base from './rollup.config.base'
import uglify from 'rollup-plugin-uglify-es' //js压缩

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'mtUtil',
    file: 'dist/mt-util.iife.js',
    format: 'iife',
    extend: true
  },
})

config.plugins.push(uglify())

export default config