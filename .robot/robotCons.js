/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-21 13:31:17
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-22 09:54:48
 */
const ChatBot = require("dingtalk-robot-sender");
const robot = new ChatBot({
  baseUrl: "https://oapi.dingtalk.com/robot/send",
  accessToken:
    "ee8d9f6e4bbc8ef21196cfa1c5e08c584174bd77d6aba79a135557d564e7fd7e",
  secret: "SEC4543a694125ea35cec15fa603659cc028fcd728e724f6904f3f628bc5c8ec60d"
});

function getContext() {
  const context = {
    text:
      process.env.text ||
      "最新版本的 zx-util-ui 已经部署成功，请点击链接查看最新文档！",
    title: process.env.title || "CI部署DOCS通知",
    picUrl: "",
    messageUrl: process.env.url || "https://zx-js.github.io/zx-util-ui-docs/"
  };
  const data = {
    msgtype: "link",
    link: context
  };
  return data;
}
exports.robot = robot;
exports.context = getContext;
