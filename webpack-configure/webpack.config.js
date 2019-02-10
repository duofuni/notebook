const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.js'), // 入口地址拼接
    output: {
        path: path.join(__dirname, './dist'), // 出口文件夹地址拼接
        filename: 'bundle.js', // 出口文件名
    },
    plugins: [ // 所有插件在这里配置
        new htmlWebpackPlugin({ // 给index.html自动植入bundle.js
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
    ],
    module: {
        rules: [{
            test: /\.css$/, // 匹配.css文件
            use: ['style-loader', 'css-loader'] // 加载loader从右往左
        }, ],
    },
};