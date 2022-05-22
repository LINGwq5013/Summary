/*
 * @Author: your name
 * @Date: 2021-09-05 11:22:03
 * @LastEditTime: 2021-10-19 19:26:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \guanwang\vue.config.js
 */
const path = require('path');
const webpack = require('webpack');
module.exports ={
    // lintOnSave: false,
    configureWebpack: {
      plugins: [
        // 配置 jQuery 插件的参数
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          Popper: ['popper.js', 'default']
        })
      ]
    },
    pluginOptions: {
      'style-resources-loader': {
          preProcessor: 'stylus',
          patterns: [
            path.resolve(__dirname, './src/assets/stylus/base.styl')
          ]
        }
      },
    devServer: {
        open: true,
        proxy: {
          '/apl': {
            target: 'http://news-at.zhihu.com/api/4/',
            // target: 'http://106.15.179.105:3000/', 
            // 线上后端地址
            changeOrigin: true, //允许跨域
            pathRewrite: {
              '^/apl': ''
            }
          },
            "/bdapi":{//代理名称
                target:'https://api.benlai.com',//目标公用地址
                pathRewrite:{
                    "^/bdapi":""    //将/bdapi 重写 为 空
                }
            }
           
        
          
        },
        port: 8083,
      }
    }