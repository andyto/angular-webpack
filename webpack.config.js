process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackMerge = require('webpack-merge')

const baseConfig = require('./webpack.base.js')

const config = {
  module: {
    rules: [
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: 'production',
      PRODUCTION: true,
      DEVELOPMENT: false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ]
}

module.exports = webpackMerge(baseConfig, config)
