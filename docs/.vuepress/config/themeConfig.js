/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-07 09:48:14
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-27 16:36:18
 */
const themeConfig = {
  nav: [
    { text: "指南", link: "/" },
    {
      text: "组件",
      link: "/vue/"
    },
    { text: "马良docs", link: "/vue/ml/" },
    { text: "主题", link: "/vue/theme/" },
    { text: "github", link: "https://github.com/zx-js/zx-util-ui" }
  ],
  sidebar: {
    "/vue/": [
      ["", "vue 组件介绍"],
      ["upDate/", "更新日志"],
      ["install/", "安装"],
      ["quicklearning/", "快速上手"],
      ["theme/", "主题定制化"],
      ["Button/", "button"],
      ["Tag/", "tag 标签"],
      ["Input/", "Input 输入框"],
      ["Loading/", "loading加载"],
      ["timeline/", "timeline 时间轴"],
      ["Table/", "table 表格"],
      ["Message/", "Message提示"],
      ["Drag/", "drag拖动"],
      ["Scale/", "scale缩放"],
      ["ml/", "马良docs"]
    ]
  },
  sidebarDepth: 2
};
exports.themeConfig = themeConfig;
