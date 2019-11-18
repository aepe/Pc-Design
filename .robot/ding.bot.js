/*
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-15 08:48:14
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-15 10:31:54
 */
// 直接使用 webhook
const webhook = 'https://oapi.dingtalk.com/robot/send?access_token=33732c171e1947bf0260542951a38cc1df0ea42349da2148b1a07a3895b73d5f';

const request = require("request");
const log4js =require("log4js");
const logger = log4js.getLogger("DingdingBot");
const ApplicationTypeHeader = "application/json";
// DingdingBot
// https://open-doc.dingtalk.com/microapp/serverapi2/qf2nxq
class DingdingBot{
   _webhookUrl;
  constructor(webhookUrl){
    this._webhookUrl = webhookUrl;
  }
  pushMsg (msg, atMobiles){
    try {
      let options= {
        headers: {
         "Content-Type": ApplicationTypeHeader
        },
        json: {
          "msgtype": "text", 
          "text": {
            "content": "hahahahaah"
          }
        }
       };
      request.post(this._webhookUrl, options, function(error, response, body){
          console.log(response.body)
        logger.debug(`push msg ${msg}, response: ${JSON.stringify(body)}`);
      });
    }
    catch(err) {
      console.error(err);
      return false;
    }    
  }
}
let bot = new DingdingBot(webhook);;
// 直接推送消息
bot.pushMsg("测试消息");


