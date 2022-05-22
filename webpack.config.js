/*
 * @Author: your name
 * @Date: 2021-09-05 11:21:21
 * @LastEditTime: 2021-10-13 21:31:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \guanwang\webpack.config.js
 */
module.exports={
    module:{
        rules:[
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader', {
                    loader: 'style-resources-loader'
                }
                ]
            }
        ]
    },
    entry: ["babel-polyfill", "./src/main.js"],
}