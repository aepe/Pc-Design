/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-10-29 11:18:05
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-12 13:36:09
 */
const fs = require('fs');
const path = require('path');
function delDir(path) {
    let files = [];
    console.log('正在清空文件夹');
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach((file, index) => {
            let curPath = path + '/' + file;
            if (fs.statSync(curPath).isDirectory()) {
                delDir(curPath); //递归删除文件夹
            } else {
                fs.unlinkSync(curPath); //删除文件
            }
        });
        fs.rmdirSync(path);
        console.log('文件夹清空处理完成.');
    }
}

delDir(path.resolve(__dirname, '../dist/js'));
