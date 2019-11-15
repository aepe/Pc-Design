/*
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-15 10:16:33
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-15 10:40:35
 */
const key = 'SEC4543a694125ea35cec15fa603659cc028fcd728e724f6904f3f628bc5c8ec60d';
const ChatBot = require('dingtalk-robot-sender');
const robot = new ChatBot({
  webhook: 'https://oapi.dingtalk.com/robot/send?access_token=ee8d9f6e4bbc8ef21196cfa1c5e08c584174bd77d6aba79a135557d564e7fd7e'
});
let textContent = {
  "msgtype": "text", 
  "text": {
    "content": "我就是我, 是不一样的烟火"
  }
}
robot.send(textContent)
  .then((res) => {
    console.log(res.data)
  });