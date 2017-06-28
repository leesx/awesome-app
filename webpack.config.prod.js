/**
 * webpack version "^1.14.0"
 * 注意:该版本不能完全编译es6语法
 * eg. import export
 */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('[name]-[contenthash:8].css')
const assetsConfig = require("./assets.config.prod.json");
const moment = require('moment')
const autoprefixer = require('autoprefixer')
const WebpackMd5Hash = require('webpack-md5-hash');

const nowDateStr = moment().format("YYYY-MM-DD HH:mm:ss")

//判断是否为生产环境
const __DEV__ = process.env.NODE_ENV === 'production' 

module.exports = {
    entry:{
      index:'./src/index.js',
	//vendors:'./static/scripts/common/vendor.js'
    } ,
    output: {
        publicPath: '/dist/', //页面中静态资源链接的公共的url 
		path:path.resolve(__dirname, 'dist'), // 打包后文件输出的绝对地址
        filename: "scripts/[name].[chunkhash].min.js",   //打包后输出index.js
        chunkFilename: 'scripts/page/[name].[chunkhash].min.js', // 按需加载的页面模块
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
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use:['css-loader','postcss-loader','less-loader']
            }),
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
        new WebpackMd5Hash(),
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
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			'process.env.__CLIENT__': 'true',
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: ['common'], // 公共块的块名称
        //     minChunks: Infinity, // 最小被引用次数，最小是2。传递Infinity只是创建公共块，但不移动模块。 
        //     filename: 'static/scripts/[name].[hash].js', // 公共块的文件名
        // }),
		new HtmlWebpackPlugin({
            filename: path.resolve(__dirname,'index.html'),
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
		new webpack.optimize.UglifyJsPlugin({
		      output: {
		        comments: false,
		      },
		      compress: {
		        warnings: false
		      }
		    }),
        new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: require('./manifest.production.json'),
        }),
        new ExtractTextPlugin({
            filename: "styles/default/[name].min.css",
            disable: false,
            allChunks: true,
        }),
        new webpack.BannerPlugin(`Copyright Hualala inc. \n update: ${nowDateStr}`),
    ]
};
