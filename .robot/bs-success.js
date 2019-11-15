/*
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-15 10:51:00
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-15 10:53:12
 */
const ChatBot = require('dingtalk-robot-sender');

const robot = new ChatBot({
  baseUrl: 'https://oapi.dingtalk.com/robot/send',
  accessToken: 'ee8d9f6e4bbc8ef21196cfa1c5e08c584174bd77d6aba79a135557d564e7fd7e',
  secret: 'SEC4543a694125ea35cec15fa603659cc028fcd728e724f6904f3f628bc5c8ec60d',
});
let textContent = {
  "msgtype": "text", 
  "text": {
    "content": "部署完成"
  }
}
robot.send(textContent)
  .then((res) => {
    console.log(res.data)
  });