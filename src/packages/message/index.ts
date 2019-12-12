/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-12 13:28:38
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-12 17:03:22
 */
import Vue from "vue";
import msgBox from "../../components/Message/message";
const Mask = Vue.extend(msgBox);
let index = 1;
const defaultDuration = 3000;
const typeList = ["success", "info", "warning", "error", "loading"];
const messageInstalls = [];
interface openArgs {
  content: string | Element;
  duration: Number;
  type: String;
  onClose: Function;
}
enum iconType {
  info = "info-circle",
  success = "check-circle",
  error = "close-circle",
  warning = "exclamation-circle",
  loading = "loading"
}
function createMessageBox() {
  // 创建messagebox
  let messageBox = document.getElementById("z-message-box");

  if (!messageBox) {
    const div = document.createElement("div");
    div.id = "z-message-box";
    document.body.appendChild(div);
  }
}
const Message = () => {};

// 销毁message
Message.destroy = () => {};

// 打开message
Message.open = (args: openArgs) => {
  args.duration = args.duration || defaultDuration;
  const target = index++;
  const instance = new Mask({
    data: args,
    id: target
  });
  instance.$props.args = args;
  instance.$props.id = target;
  instance.$props.onClose = args.onClose;
  createMessageBox();
  setTimeout(() => {
    instance.$mount();
    document.getElementById("z-message-box").appendChild(instance.$el);
  }, 1);
};
typeList.forEach(type => {
  Message[type] = (
    content: string | Element,
    duration: number,
    onClose: Function
  ) => {
    // 当第二个参数为方法时说明内有传递延迟时间而是
    if (typeof duration === "function") {
      onClose = duration;
      duration = undefined;
    }
    return Message.open({ content, duration: duration, type, onClose });
  };
});
export default Message;
