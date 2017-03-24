var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'bin');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  module: {
    loaders: [
      { test : /\.jsx?$/, include : APP_DIR, loader : 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader'}
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'static/index.html' }
    ])
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
};

module.exports = config;
