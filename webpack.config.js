'use strict'

const path = require('path')
const webpack = require('webpack')
//
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const AssetsPlugin = require('assets-webpack-plugin')

const SRC_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'build', 'assets')

let isProduction = false
if (process.argv.length >= 3 && process.argv[2] === '-p') {
  isProduction = true
}

const config = {
  context: SRC_DIR,
  entry: {
    app: ['./index.js'],
    vendor: ['es6-shim']
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    publicPath: '/assets/'
  },
  resolve: {
    modules: ['node_modules', SRC_DIR],
    extensions: ['.js']
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.json/, exclude: /node_modules/, use: ['json-loader']},
      {test: /\.html/, use: ['html-loader']},
      {test: /\.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader']})},
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'less-loader']})
      },
      {test: /\.png$/, loader: 'url?limit=8192&mimetype=image/png'},
      {test: /\.jpe?g$/, loader: 'url?limit=8192&mimetype=image/jpg'},
      {test: /\.gif$/, loader: 'url?limit=8192&mimetype=image/gif'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=application/font-woff'},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=image/svg+xml'},
      {test: /\.otf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?limit=10000&mimetype=font/opentype'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=image/svg+xml'}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new ExtractTextPlugin('[name].css')
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: 'build'
  }
}

if (isProduction) {
} else {
}

//   commonConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'))
//   commonConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
//   commonConfig.plugins.push(new webpack.NoErrorsPlugin())
//   commonConfig.entry.app.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true')

// } else {
//   commonConfig.plugins.push(new webpack.NoErrorsPlugin())
//   commonConfig.output.filename = '[name]-[hash].js'
//   commonConfig.plugins.push(new webpack.optimize.DedupePlugin())
//   commonConfig.plugins.push(new AssetsPlugin({path: BUILD_DIR}))
//   commonConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor-[hash].js'))
//   commonConfig.module.loaders.push({test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')})
//   commonConfig.module.loaders.push({
//     test: /\.less$/,
//     loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
//   })
//   commonConfig.plugins.push(new ExtractTextPlugin('[name]-[hash].css'))
//   commonConfig.plugins.push(new webpack.DefinePlugin({
//     IS_DEVELOPMENT: true,
//     'process.env': {
//       'NODE_ENV': JSON.stringify('production')
//     }
//   }))
// }

module.exports = config
