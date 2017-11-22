const webpack = require('webpack');
const path = require('path');

const LIBRARY_NAME = 'lib';

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${LIBRARY_NAME}.js`,
    library: LIBRARY_NAME,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
