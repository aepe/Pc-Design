/*
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-06 16:39:45
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-07 09:52:19
 */
const themeConfig = require('./config/themeConfig').themeConfig
module.exports = {
    title: 'Hello zx-util-ui',
    port: 9991,
    markdown: {
        plugins: [
        '@org/foo', // 等价于 @org/markdown-it-foo，如果对应的包存在
        ['markdown-it-bar', {
        // 提供你的选项
        }]
        ]
    },
    themeConfig,
    configureWebpack: {
        resolve: {
          alias: {
            '@alias': 'path/to/some/dir'
          }
        }
      }
}