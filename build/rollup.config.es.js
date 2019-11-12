/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-10-29 10:56:55
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-12 13:35:59
 */
import base from './rollup.config.base';

const config = Object.assign({}, base, {
    output: {
        exports: 'named',
        name: 'mtUtil',
        file: 'dist/js/mt-util.min.js',
        format: 'es',
        extend: true,
    },
});

export default config;
