/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-05 15:45:56
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-05 16:29:27
 */
// 找到components文件夹下以.vue命名的文件
const requireComponent = require.context('./', true, /\.(vue)|(tsx)|(jsx)/);

// 遍历每个文件
const vueComponents = requireComponent.keys().map((filePath) => {
    return requireComponent(filePath);
});

export default vueComponents;
