/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-06 16:39:45
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-27 16:51:13
 */
const themeConfig = require("./config/themeConfig").themeConfig;
module.exports = {
  title: "zx-util-ui",
  port: 9991,
  base: "/zx-util-ui-docs/",
  theme: "bhabgs",
  markdown: {
    lineNumbers: true,
    plugins: [
      "@org/foo", // 等价于 @org/markdown-it-foo，如果对应的包存在
      [
        "markdown-it-bar",
        {
          // 提供你的选项
        }
      ]
    ]
  },
  themeConfig,
  configureWebpack: {
    resolve: {
      alias: {
        // '@alias': __dirname + 'public'
      }
    }
  },
  chainWebpack(config, isServer) {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options.compilerOptions = {
          preserveWhitespace: false
        };
        return options;
      });
  }
};
