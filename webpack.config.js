const path = require('path');
const webpack = require('webpack');


module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  }
};
