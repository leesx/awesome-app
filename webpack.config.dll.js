const webpack = require('webpack')
const path = require('path')
const AssetsPlugin = require('assets-webpack-plugin');

const vendors = [
    'react',
    'react-dom',
    'redux',
    'immutable',
    'react-redux',
    'react-router',
    'react-router-redux',
]

var __DEV__ = process.env.NODE_ENV === 'production'
var manifestFileName = __DEV__ ? 'manifest.production.json' : 'manifest.development.json'

var config = {
    entry: {
        vendor: vendors,
    },
    output: {
        path:path.resolve(__dirname, 'static/scripts/common'),
        filename: '[name].[hash].js',
        library: '[name]_library'
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
  config.output.filename = '[name].[hash].min.js';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false,
    },
    compress: {
      warnings: false
    }
  }));
}

module.exports = config
