var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var path = require("path");

module.exports = {
    //devtool: "source-map",       //生产要注释
    entry: [
        __dirname + '/app/index.js',
        "es6-promise",
        "immutable",
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
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader?browsers=last 10 versions")
            },
            {
                test: /\.(scss|sass)$/,
                loader: ExtractTextPlugin.extract("style", 'css?!sass?autoprefixer-loader?browsers=last 10 versions') 
            },
            {
                test: /\.less$/,
                //loader: ExtractTextPlugin.extract("style", 'css!sass?sourceMap')
                loader: ExtractTextPlugin.extract("style", 'css!less')
            },
            {
                test: /\.js$/,
                loader:  'babel',
                exclude: /node_modules/
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=5000&name=img/[name][hash:8].[ext]'
            },
        ]
    },
    plugins:  [
       
        new ExtractTextPlugin("css/[name][hash:8].css", {allChunks: true}),
        new HtmlWebpackPlugin({
            template: __dirname +  '/app/index.html',
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,  // remove all comments
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
    ],
    //其它解决方案配置
    resolve: {
        extensions: ['', '.js','.jsx', '.json', '.scss'],
        alias: {
            pages: path.join(__dirname, "./app/pages"),
            components: path.join(__dirname, "./app/components"),
            actions: path.join(__dirname, "./app/actions"),
            util: path.join(__dirname, "./app/public/Util"),
        }
    }
}
