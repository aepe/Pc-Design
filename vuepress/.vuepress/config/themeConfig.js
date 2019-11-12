/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-07 09:48:14
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-12 09:35:01
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
        '/vue/': [
            ['', 'vue 组件介绍'],
            ['upData/', '更新日志'],
            ['install/', '安装'],
            ['quicklearning/', '快速上手'],
            ['theme/', '主题定制化'],
            ['Tag/', 'tag 标签'],
            ['loading/', 'loading加载'],
            ['timeline/', '时间轴'],
            ['Table/', 'table'],
            ['test/', '测试组件']
        ],
    },
    sidebarDepth: 2,
};
exports.themeConfig = themeConfig;
