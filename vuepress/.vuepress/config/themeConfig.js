/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-07 09:48:14
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-07 10:22:47
 */
const themeConfig = {
    nav: [
        { text: '指南', link: '/' },
        {
            text: '组件',
            items: [
                // { text: 'react', link: '/react/' },
                { text: 'vue', link: '/vue/' },
                // { text: 'ts', link: '/ts/' }
            ],
        },
        { text: '主题', link: '/vue/theme/' },
    ],
    sidebar: {
        '/vue/': ['', 'button/', 'tree/', 'theme/'],
    },
};
exports.themeConfig = themeConfig;
