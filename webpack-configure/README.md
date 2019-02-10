1. 手动使用webpack打包js：webpack [enter file] [output file]     ######## 太麻烦  
2. 缩减一下：  
cnpm i webpack-dev-server -D  
创建webpack.config.js文件，配置内容：  
    const path = require('psth');  
    module.exports = {  
        entry: './src/main.js',  
        output: {  
            path: path.join(__dirname, './dist'),  
            filename: 'bundle.js',  
        },  
    };  
配置好后直接手动运行：webpack     ######## 还是太麻烦想让他自动运行并且热更新  
3. 在packge.json文件中的scripts中添加一项：  
"dev[设置运行的名字]": "webpack-dev-server --open[open的作用为自动打开localhost] --port 8080[自由设置端口号] --contentBase src[设置默认主页路径] --hot[设置为热加载]"  

4. 在index.html中自动植入bundle.js使用插件：  
cnpm i html-webpack-plugin -D  
在webpack.config.js中添加pluins数组项目：
...  
const htmlWebpackPlugin = require('html-webpack-plugin');  
module.exports = {  
    ...  
    plugins：[  
        new htmlWebpackPlugin({  
            template: path.join(__direname, './src/index.html'),  
            filename: 'index.html',  
        })  
    ],  
};  
5. 加载css、less文件资源  
需要下载loader：  
cnpm i css-loader style-loader- -D  
到webpack.config.js文件添加model项：  
...  
module.exports = {   
    ...  
    module：{  
        rules: [  
            {test: /\.css$/, use: ['style-loader', 'css-loader']},  
        ],  
    },   
};   


