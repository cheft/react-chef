//react v16 npm i react@next react-dom@next --save
var path = require('path')
var webpack = require('webpack')
process.env.NODE_ENV = 'development'

module.exports = {
  entry: {
    client: [
      // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      'webpack-hot-middleware/client',
      './client/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [{
      test: /\.js|jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['react-hmre']
      }
    }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
