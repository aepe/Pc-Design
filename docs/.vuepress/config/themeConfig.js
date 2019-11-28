/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-07 09:48:14
 * @LastEditors: 王晓龙
 * @LastEditTime: 2019-11-28 11:56:21
 */
const themeConfig = {
    nav: [
        { text: '指南', link: '/' },
        {
            text: '组件',
            link: '/vue/',
        },
        { text: '马良docs', link: '/vue/ml/' },
        { text: '主题', link: '/vue/theme/' },
        { text: 'github', link: 'https://github.com/zx-js/zx-util-ui', origin: true },
    ],
    sidebar: {
        '/vue/': [
            ['', 'Vue 组件介绍'],
            ['upDate/', '更新日志'],
            ['install/', '安装'],
            ['quicklearning/', '快速上手'],
            ['theme/', '主题定制化'],
            ['Button/', 'Button 按钮'],
            ['Tag/', 'Tag 标签'],
            ['Input/', 'Input 输入'],
            ['Loading/', 'Loading 加载'],
            ['timeline/', 'Timeline 时间轴'],
            ['Table/', 'Table 表格'],
            ['Message/', 'Message 提示'],
            ['Drag/', 'Drag 拖拽'],
            ['Scale/', 'Scale 缩放'],
            ['ml/', '马良docs'],
        ],
    },
    sidebarDepth: 2,
};
exports.themeConfig = themeConfig;
