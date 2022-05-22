/*
 * @Author: your name
 * @Date: 2021-09-05 12:16:00
 * @LastEditTime: 2021-10-19 19:35:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \guan\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
    jquery:true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
"globals": {
    "AMap": "true",
},
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-mixed-spaces-and-tabs":0,
    "no-unused-vars":"off"
    
  }
}
