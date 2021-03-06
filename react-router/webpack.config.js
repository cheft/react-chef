//react v16 npm i react@next react-dom@next --save
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    main: [
      'react-hot-loader/patch',
      './main.js'
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
      use: ['babel-loader'],
      exclude: /node_modules/
    }]
  }
}
