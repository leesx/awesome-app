const webpack = require('webpack')
const path = require('path')
const AssetsPlugin = require('assets-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const moment = require('moment')
const nowDateStr = moment().format("YYYY-MM-DD HH:mm:ss")

const vendors = [
    'react',
    'react-dom',
    'react-router',
    // 'redux',
    // 'immutable',
    // 'react-redux',
    //'react-router-redux',
]

var __DEV__ = process.env.NODE_ENV === 'production'
var manifestFileName = __DEV__ ? 'manifest.production.json' : 'manifest.development.json'

var config = {
    entry: {
        vendor: vendors,
    },
    output: {
        //publicPath: '/',
        path:path.resolve(__dirname, 'dist/scripts/common'),
        filename: '[name].js',
        library: '[name]_library',
        libraryTarget: "umd"
    },
    plugins: [
        new webpack.DllPlugin({
            path: manifestFileName,
            name: '[name]_library',
            context: __dirname,
        }),
        // new webpack.LoaderOptionsPlugin({
        //     minimize: __DEV__,
        //     debug: !__DEV__
        // }),
        new AssetsPlugin({
        	filename: __DEV__ === true ? 'assets.config.prod.json' : 'assets.config.dev.json', 
        	path: __dirname,
        }),
				new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),

    ],
    devtool: 'source-map',
};

//生产环境构建
if (__DEV__ === true) {
  config.output.filename = '[name].[chunkhash].min.js';

  const productionPlugins = [
    new CleanWebpackPlugin(['dist/scripts/common'], {
        root: __dirname, // An absolute path for the root  of webpack.config.js
        verbose: true,// Write logs to console.
        dry: false, // Do not delete anything, good for testing.
        exclude:['vendor.js'], //排除其他文件
    }),
    new WebpackMd5Hash(),
    new webpack.BannerPlugin(`Copyright Hualala inc. \n update: ${nowDateStr}`),
    new webpack.optimize.UglifyJsPlugin({
        output: {
        comments: false,
        },
        compress: {
        warnings: false
        }
    })
  ]
  config.plugins.push(...productionPlugins);
}

module.exports = config
