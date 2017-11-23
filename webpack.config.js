const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const LIBRARY_NAME = 'add';
const DIST_FOLDER = path.resolve(__dirname, 'dist');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `index.js`,
    library: {
      root: LIBRARY_NAME,
      amd: LIBRARY_NAME,
      commonjs: LIBRARY_NAME
    },
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
  },
  plugins: [new CleanWebpackPlugin(DIST_FOLDER)]
};
