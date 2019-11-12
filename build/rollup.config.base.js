/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-10-29 10:56:25
 * @LastEditors: 王晓龙
 * @LastEditTime: 2019-11-12 16:55:27
 */
import resolve from 'rollup-plugin-node-resolve'; // 告诉 Rollup 如何查找外部模块
import commonjs from 'rollup-plugin-commonjs'; // 将CommonJS模块转换为 ES2015 供 Rollup 处理
import requireContext from 'rollup-plugin-require-context'; // 用于解决webpack require-context的汇总插件
import vue from 'rollup-plugin-vue'; // 处理vue文件
import babel from 'rollup-plugin-babel'; // rollup 的 babel 插件，ES6转ES5
import typescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import replace from '@rollup/plugin-replace';

export default {
    input: 'src/index.ts',
    plugins: [
        resolve({
            browser: true,
            extensions: ['.tsx'],
        }),
        typescript({
            exclude: 'node_modules/**',
            typescript: require('typescript'),
        }),
        requireContext({
            include: ['**/*.js', '**/*.ts'],
        }),
        postcss({
            plugins: [autoprefixer, cssnano],
            extract: 'dist/css/mt.style.css', // 输出路径
        }),
        commonjs(),
        replace({
            include: 'src/*',
            $them: 'red',
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.VUE_ENV': JSON.stringify('browser'),
        }),
        babel({
            exclude: 'node_modules/**', // 防止打包node_modules下的文件
            runtimeHelpers: true, // 使plugin-transform-runtime生效
            plugins: ['transform-vue-jsx', 'external-helpers'], // jsx语法
        }),
        vue({ css: false }),
    ],
    external: ['vue'], // , 'vue-property-decorator'
};
