/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-07 09:48:14
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-01-19 13:49:02
 */
const themeConfig = {
  nav: [
    { text: "指南", link: "/" },
    {
      text: "组件",
      link: "/vue/"
    },
    {
      text: "github",
      link: "https://github.com/zx-js/zx-util-ui",
      origin: true
    }
  ],
  sidebar: {
    "/vue/": [
      ["", "Vue 组件介绍"],
      ["upDate/", "更新日志"],
      ["install/", "安装"],
      ["quicklearning/", "快速上手"],
      ["theme/", "主题定制化"],
      ["Button/", "Button 按钮"],
      ["Icon/", "Icon 图标"],
      ["Input/", "Input 输入"],
      ["Loading/", "Loading 加载"],

      ["Table/", "Table 表格"],
      ["Message/", "Message 提示"],
      ["Alert/", "Alert 警告"],
      ["Select/", "Select 选择器"],
      ["Tag/", "Tag 标签"],
      ["timeline/", "Timeline 时间轴"]
      // ["Drag/", "Drag 拖拽"],
      // ["Scale/", "Scale 缩放"],
      // ["ml/", "马良docs"],
    ]
  },
  sidebarDepth: 2
};
exports.themeConfig = themeConfig;
