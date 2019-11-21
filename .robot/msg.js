/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-21 13:31:17
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-21 14:28:52
 */
const ChatBot = require('dingtalk-robot-sender');
const robot = new ChatBot({
    baseUrl: 'https://oapi.dingtalk.com/robot/send',
    accessToken: 'ee8d9f6e4bbc8ef21196cfa1c5e08c584174bd77d6aba79a135557d564e7fd7e',
    secret: 'SEC4543a694125ea35cec15fa603659cc028fcd728e724f6904f3f628bc5c8ec60d',
});


const msg = {
    start: {
        "msgtype": "link", 
        "link": {
            "text": "正在部署新的zx-util-ui 文档，请点击链接查看部署进度", 
            "title": "CI部署DOCS通知", 
            "picUrl": "", 
            "messageUrl": "https://github.com/zx-js/zx-util-ui/actions"
        }
    },
    error: {},
    success: {
        "msgtype": "link", 
        "link": {
            "text": "最新版本的 zx-util-ui 已经部署成功，请点击链接查看最新文档！", 
            "title": "CI部署DOCS通知", 
            "picUrl": "", 
            "messageUrl": "https://zx-js.github.io/zx-util-ui-docs/"
        }
    }
}

exports.robot = robot
exports.msg = msg