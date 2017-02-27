const webpack = require('webpack')
const path = require('path')

const webpackMerge = require('webpack-merge')

const baseConfig = require('./webpack.base.js')

const config = {
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      ENV: 'development',
      PRODUCTION: false,
      DEVELOPMENT: true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    hot: true,
    historyApiFallback: true,
    proxy: {}
  }
}

module.exports = webpackMerge(baseConfig, config)
