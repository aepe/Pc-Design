/*
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-13 16:46:16
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-18 09:36:14
 */
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: "standard",
    plugins: ['typescript'],
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
        "typescript/no-unused-vars": 'warn',
        "space-before-function-paren": 0,
        'no-tabs': 'off',
        "indent": ["off", 2],
        "no-trailing-spaces": ["error", { "skipBlankLines": true }]
    },
};
