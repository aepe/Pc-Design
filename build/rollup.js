/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-19 10:12:41
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-28 17:46:27
 */
import babel from "rollup-plugin-babel";
import { resolve } from "path"; // 获取文件地址
import typescript from "rollup-plugin-typescript2";
import rollupRresolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import commonjs from "rollup-plugin-commonjs";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
const extensions = [".ts", ".js", ".tsx"];
import output from "./conf/rollup.output";
export default {
  input: resolve("./") + "/src/index.ts",
  output: output,
  plugins: [
    rollupRresolve({
      browser: true,
      extensions,
      dedupe: ["vue", "vue-property-decorator"],
      jail: resolve("./") + "/src"
    }),
    commonjs(),
    babel({
      extensions,
      exclude: "node_modules/**", // 防止打包node_modules下的文件
      externalHelpers: true,
      plugins: ["transform-vue-jsx"] // ,, ['@babel/proposal-decorators', {legacy: true}]
    }),
    postcss({
      plugins: [autoprefixer, cssnano],
      extract: "dist/css/z-style.css" // 输出路径
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      typescript: require("typescript"),
      clean: true,
      check: false, // 是否检查代码
      verbosity: 0
    })
  ]
  // external: ['vue']
};
