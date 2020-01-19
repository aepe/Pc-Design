/*
 * @Descripttion:
 * @version:
 * @Author: langxue
 * @Date: 2019-11-13 13:36:55
 * @LastEditors: langxue
 * @LastEditTime: 2019-11-14 10:34:09
 */

import Input from "./index";

import utils from "../../packages/utils";
const Msg = new utils.msgCode();
// const msg = Msg.getMsg({
//   code: ["M0004", "M4003"],
//   message: ["网络不稳定", "token过期"],
// });
const msg = Msg.getMsg({
  code: "M0004",
  message: "网络不稳定",
});
// const msg = Msg.getMsg("WIN002");
// const msg = Msg.getMsg(["WIN002", "WIN001"]);
console.log("错误提示---", msg);
const ZInput = {
  version: "0.0.1",
  name: "ZInput",
  install: Input,
};

export { ZInput };
export default ZInput;
