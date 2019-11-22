/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-21 14:55:06
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-22 09:49:10
 */
const robotCons = require("./robotCons");

robotCons.robot.send(robotCons.context()).then(res => {
  console.log(res.data);
});
