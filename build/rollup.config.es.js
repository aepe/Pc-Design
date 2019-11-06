/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-10-29 10:56:55
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-10-29 13:36:03
 */
import base from './rollup.config.base';

const config = Object.assign({}, base, {
    output: {
        exports: 'named',
        name: 'mtUtil',
        file: 'dist/mt-util.min.js',
        format: 'iife',
        extend: true,
    },
});

export default config;
