var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
  devServer: {
    inline: true,
    port: 3000
  },
  output: { path: __dirname, filename: 'bundle.js' },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      css: path.resolve(__dirname, 'src/css'),
      js: path.resolve(__dirname, 'src/js'),
      image: path.resolve(__dirname, 'src/images')
    }
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }, {
         test: /\.scss$/,
         loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};