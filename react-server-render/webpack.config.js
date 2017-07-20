var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    client: [
      'babel-polyfill', // async/await
      './client/index.js',
      // 'webpack-hot-middleware/client'
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=300'
    ]
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: '[name].js',
    publicPath: '/'
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'server/router/template.ejs')
    })
  ]
}
