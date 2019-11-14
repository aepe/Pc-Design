/*
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-10-29 10:58:34
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-14 10:46:37
 */
import base from './rollup.config.base'
const uglify = require('rollup-plugin-uglify-es') //js压缩

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'mtUtil',
    file: 'dist/js/mt-util.iife.js',
    format: 'iife',
    extend: true
  },
})

// config.plugins.push(uglify())

export default config