/*
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-13 16:46:16
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-14 11:01:36
 */
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: "standard",
    env: {
        "browser": true
    },
    parserOptions: {
        ecmaVersion: 6, //也就是ES6语法支持的意思
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
        },
        project: './tsconfig.json',
    },
    rules: {
        "semi": ["error", "always"],
        "space-before-function-paren": 0,
        'no-tabs': 'off',
        "indent": ["off", 2],
        "no-trailing-spaces": ["error", { "skipBlankLines": true }]
    },
};
