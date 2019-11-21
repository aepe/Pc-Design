/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-21 14:55:06
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-21 14:56:12
 */
const robotCons = require('./msg')

robotCons.robot.send(robotCons.msg[process.env.msg || 'start'])
  .then((res) => {
    console.log(res.data)
  });