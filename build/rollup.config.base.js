/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-10-29 10:56:25
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-07 15:57:49
 */
import resolve from 'rollup-plugin-node-resolve'; // 告诉 Rollup 如何查找外部模块
import commonjs from 'rollup-plugin-commonjs'; // 将CommonJS模块转换为 ES2015 供 Rollup 处理
import requireContext from 'rollup-plugin-require-context'; // 用于解决webpack require-context的汇总插件
import vue from 'rollup-plugin-vue'; // 处理vue文件
import babel from 'rollup-plugin-babel'; // rollup 的 babel 插件，ES6转ES5
import css from 'rollup-plugin-css-only'; // 提取css，压缩能力不行
import CleanCSS from 'clean-css'; // 压缩css
import { writeFileSync } from 'fs'; // 写文件
import typescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import replace from 'rollup-plugin-replace';
export default {
    input: 'src/index.ts',
    plugins: [
        resolve({ extensions: ['.vue'] }),
        typescript({
            exclude: 'node_modules/**',
            typescript: require('typescript'),
        }),
        requireContext({
            include: ['**/*.js', '**/*.ts'],
        }),
        postcss({
            plugins: [autoprefixer, cssnano],
            extract: 'dist/mt.style.css' // 输出路径
        }),
        commonjs(),
        vue({ css: false }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.VUE_ENV': JSON.stringify('browser'),
        }),
        babel({
            exclude: 'node_modules/**', // 防止打包node_modules下的文件
            runtimeHelpers: true, // 使plugin-transform-runtime生效
            plugins: ['transform-vue-jsx', 'external-helpers'], // jsx语法
        }),
        // css({
        //     output(style) {
        //         // 压缩 css 写入 dist/vue-rollup-component-template.css
        //         writeFileSync('dist/mt.style.css', new CleanCSS().minify(style).styles);
        //     },
        // }),
        // css: false 将<style>块转换为导入语句，rollup-plugin-css-only可以提取.vue文件中的样式
    ],
};
