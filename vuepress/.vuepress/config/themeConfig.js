/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-07 09:48:14
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-07 13:55:01
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
        '/vue/': [['', 'vue 组件介绍'], ['install/', '安装'], ['quicklearning/', '快速上手'], ['upData/', '更新日志'], ['button/', '按钮'], ['theme/', '主题定制化']],
    },
    sidebarDepth: 2,
};
exports.themeConfig = themeConfig;
