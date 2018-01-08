var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var manifest = require("./dll/manifest.json");


module.exports = {
    devtool: "source-map",      //生产注释
    entry: [                //有多种形式，一般单页面应用数组形式即可，第一个为入口文件，后面写的可以追加进基础文件，开发环境增加了dll配置，依赖文件全放里面即可避免重复打包
        __dirname + '/app/index.js',
    ],
    output: {
        path: __dirname + '/build',
        filename: '[name]-[hash:5].js',
        chunkFilename: "[name].[chunkhash:5].chunk.js",
        publicPath: "/"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(scss|sass)$/,
                //loader: ExtractTextPlugin.extract("style", 'css!sass?sourceMap') 
                loader: ExtractTextPlugin.extract("style", 'css!sass'),
            },
            {
                test: /\.less$/,
                //loader: ExtractTextPlugin.extract("style", 'css!sass?sourceMap')
                loader: ExtractTextPlugin.extract("style", 'css!less'),
            },
            {
                test: /\.js$/,
                loader:  'babel',
                exclude: /node_modules/
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url?limit=5000&name=img/[name][hash:8].[ext]',
            },
        ]
    },
    plugins:  [
        new ExtractTextPlugin("css/[name][hash:8].css", {allChunks: true}),
        new HtmlWebpackPlugin({
            template: __dirname +  '/app/index.html',
            vendor: '/dll/' + manifest.name + '.js' //manifest就是dll生成的json
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dll/manifest.json'),
        }),
    ],
    
    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    //其它解决方案配置
    resolve: {
        extensions: ['', '.js'],
        alias: {
            pages: path.join(__dirname, "./app/pages"),
            components: path.join(__dirname, "./app/components"),
            actions: path.join(__dirname, "./app/actions"),
            util: path.join(__dirname, "./app/public/Util"),
        }
    }
}
