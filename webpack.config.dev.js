/**
 * webpack version "^1.14.0"
 * 注意:该版本不能完全编译es6语法
 * eg. import export
 */

const webpack = require('webpack'),
path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
ExtractTextPlugin = require('extract-text-webpack-plugin'),
extractCSS = new ExtractTextPlugin('[name]-[contenthash:8].css'),
ip = require('ip'),
assetsConfig = require("./assets.config.dev.json");


const chalk = require('chalk'),//输出颜色字体模块
figlet = require('figlet'),//输出字符画模块
moment = require('moment'),
autoprefixer = require('autoprefixer');

const nowDateStr = moment().format("YYYY-MM-DD HH:mm:ss"),
LOCAL_HOST = ip.address(),//TODO 修改为本机IP
WEBPACK_DEVSERVER_PORT = 3031,//WEBPACKSERVER PORT
__DEV__ = process.env.NODE_ENV === 'production' ;//判断是否为生产环境


function figletChalk(logTxt = 'Hello World'){
    figlet( logTxt, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(chalk.green.italic(data),'@author Leesx.')
    });
}


figletChalk('TuringDo Studio')

const webpackConfig = {
    context:__dirname,
    entry:{
      index:'./src/index.js',
    },
    output: {
        publicPath: `http://${LOCAL_HOST}:${WEBPACK_DEVSERVER_PORT}/`,
		//path:path.join(__dirname, './'),
        filename: "dist/scripts/[name].js",   //打包后输出index.js
        chunkFilename: 'dist/scripts/page/[name].chunk.js', // 按需加载的页面模块
    },
    watch: true,
	externals: {

    },
    resolve: {
        extensions: [".js", ".jsx",'.html'],
        alias: {
            assets:path.resolve(__dirname,'src/assets'),
            components: path.resolve(__dirname, 'src/components'),
            containers: path.resolve(__dirname, 'src/containers'),
            routes: path.resolve(__dirname, 'src/routes'),
            helpers: path.resolve(__dirname, 'src/helpers'),
        },
    },
    module: {
        // loader 并列用! 设置参数用 ?
        rules: [{
            test: /\.(js|jsx)$/,  // test匹配需要转换的文件
            use:[{
                loader:'babel-loader'
            }],
            exclude: /node_modules/, // exclude匹配不需要转换的文件或目录
        }, {
            test: /\.(jpg|png|gif)$/,
            use: [{
                loader:'url-loader'
            }], // -> url-loader
        }, {
            test: /\.(less)$/,
            use:[{
                loader:'style-loader'
            },{
                loader:'css-loader'
            },{
                loader:'postcss-loader'
            },{
                loader:'less-loader'
            }]
        },
        {
          test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
          use:[{
              loader:'url-loader',
              options:{
                  limit:50000,
                  name:'[path][name].[ext]'
              }
          }] 
        },
         {
            test: /\.(css)$/,
            use: [{
                loader:'style-loader'
            },{
                loader:'css-loader'
            }]
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function(){
                    return [
                        autoprefixer({
                            browsers: ['last 5 versions']
                        })
                    ]
                }
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            'process.env.__CLIENT__': 'true',
        }),

        new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: require('./manifest.development.json'),
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: ['common'], // 公共块的块名称
        //     minChunks: Infinity, // 最小被引用次数，最小是2。传递Infinity只是创建公共块，但不移动模块。 
        //     filename: 'static/scripts/[name].[hash].js', // 公共块的文件名
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/assets/template/tpl.ejs',
            bundleName: assetsConfig.vendor.js,
            inject: true,
            minify: !__DEV__ ? false : {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeRedundantAttributes: true,
                removeEmptyAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeComments: true
            }
        }),  
        new webpack.BannerPlugin(`Copyright Hualala inc. \n update: ${nowDateStr}`),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
		proxy: { // 跨域代理
            '/list/*': {
                changeOrigin: true,
                target: 'https://m.toutiao.com',
                secure: false,
            },
        },
        //devtool: 'eval',
        hot: true, //热替换
        inline: true, //自动刷新
		host:'0.0.0.0',// 设置本地IP,如果没有设置在移动端默认浏览器中没法访问
        port: WEBPACK_DEVSERVER_PORT,
        disableHostCheck: true,
    },
    devtool: 'source-map',
    cache: true,
};


module.exports = webpackConfig
