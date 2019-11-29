/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-29 13:43:32
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-29 16:00:43
 */
import { Vue } from "vue-property-decorator";
import Main from "./index";
const MsgTypes = ["success", "warning", "info", "error"];
let MessageConstructor = Vue.extend(Main);

interface Options {
  type?: string;
  message?: string;
  duration?: number;
}
const Message = (option: Options | string) => {
  let options = option || {};
  if (typeof option === "string") {
    options = {
      message: option
    };
  }
};

MsgTypes.forEach(type => {
  Message[type] = (options: Options | string) => {
    if (typeof options === "string") {
      options = {
        message: options
      };
    }
    options.type = type;
    return Message(options);
  };
});

export default Message;
