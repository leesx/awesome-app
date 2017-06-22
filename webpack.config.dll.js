const webpack = require('webpack')
const path = require('path')

const vendors = [
    'react',
    'react-dom',
    'redux',
    'immutable',
    'react-redux',
    'react-router',
    'react-router-redux',
]

var libraryName = 'vendorLibrary';
var __DEV__ = process.env.NODE_ENV === 'production'
var manifestFileName = __DEV__ ? 'manifest.development.json' : 'manifest.production.json'

var config = {
    entry: {
        vendor: vendors,
    },
    output: {
        path: 'static/scripts/common',
        filename: '[name].js',
        library: libraryName,
    },
		// module: {
    //     noParse: [/src/],
    // },
    plugins: [
        new webpack.DllPlugin({
            path: manifestFileName,
            name: libraryName,
            context: __dirname,
        }),
				// new webpack.DefinePlugin({
				//   'process.env': {
				//     NODE_ENV: JSON.stringify(process.env.NODE_ENV)
				//   }
				// }),

    ],
    devtool: 'source-map',
};

//生产环境构建
if (__DEV__ === true) {
  config.output.filename = 'vendor.min.js';
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
