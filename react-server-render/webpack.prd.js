var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    client: [
      'babel-polyfill', // async/await
      './client/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: '[name]-[hash:8].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [{
      test: /\.js|jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'server/router/template.ejs'),
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
  ]
}
