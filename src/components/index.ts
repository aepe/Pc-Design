// 找到components文件夹下以.vue命名的文件
const requireComponent = require.context('./', true, /\.vue/);

// 遍历每个文件
const vueComponents = requireComponent.keys().map((filePath) => {
    return requireComponent(filePath);
});

export default vueComponents;
