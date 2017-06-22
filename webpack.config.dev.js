/**
 * webpack version "^1.14.0"
 * 注意:该版本不能完全编译es6语法
 * eg. import export
 */

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('[name]-[contenthash:8].css')
const moment = require('moment')
const autoprefixer = require('autoprefixer');

const nowDateStr = moment().format("YYYY-MM-DD HH:mm:ss")

//TODO 修改为本机IP
const LOCAL_HOST = '192.168.5.127'
//webpackserver port
const WEBPACK_DEVSERVER_PORT = 3031

const webpackConfig = {
    entry:{
      index:'./src/index.js',
    } ,
    output: {
        publicPath: `http://${LOCAL_HOST}:${WEBPACK_DEVSERVER_PORT}/`,
				//path:path.join(__dirname, './'),
        filename: "static/scripts/[name].js",   //打包后输出index.js
        chunkFilename: 'static/scripts/page/[id].[name].chunk.js', // 按需加载的页面模块
    },
    watch: true,
		externals: {
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
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
        loaders: [{
            test: /\.(js|jsx)$/,  // test匹配需要转换的文件
            loader: 'babel', //-> babel-loader
            exclude: /node_modules/, // exclude匹配不需要转换的文件或目录
        }, {
            test: /\.(jpg|png|gif)$/,
            loader: 'url', // -> url-loader
        }, {
            test: /\.(less)$/,
						loader:ExtractTextPlugin.extract('style',`css!postcss!less-loader`)
						//loaders 为数组，loader为字符串
            //loader:extractCSS.extract(['css!px2rem!postcss!less']),
            // loaders:[
            //             "style",
            //             "css", //?modules&camelCase&localIdentName=[name]__[local]___[hash:base64:5]
            //             "px2rem",
            //             "postcss",
						// 						`less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`,
            //         ] // loader从右向左以此执行 less-loader -> postcss-loader -> px2rem-loader -> css-loader -> style-loader
        },
        {
          test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
          loader: 'url?limit=50000&name=[path][name].[ext]'
        },
         {
            test: /\.(css)$/,
            loaders: ['style', 'css'],
        }]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 5 versions']
        })
    ],
    plugins: [
        new webpack.DefinePlugin({
						'process.env.NODE_ENV': '"development"',
						'process.env.__CLIENT__': 'true',
        }),

        new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: require('./manifest.development.json'),
        }),
				new HtmlWebpackPlugin({
		      filename: 'index.html',
		      template: 'src/assets/template/tpl.ejs',
					inject: true,
		    }),
				//extractCSS,
				new ExtractTextPlugin("static/styles/default/[name].css", { allChunks: true }),
        new webpack.BannerPlugin(`©Copyright Hualala inc. \n update: ${nowDateStr}`),
        new webpack.NoErrorsPlugin(),
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
        devtool: 'eval',
        hot: true, //热替换
        inline: true, //自动刷新
				host:'0.0.0.0',// 设置本地IP,如果没有设置在移动端默认浏览器中没法访问
        port: WEBPACK_DEVSERVER_PORT,
    },
    devtool: 'source-map',
};


module.exports = webpackConfig
