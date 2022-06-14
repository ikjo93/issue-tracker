const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    open: true,
    port: 3000,
    historyApiFallback: false,
    host: 'localhost',
    static: {
      directory: path.resolve(__dirname, '../public'),
    },
  },
});
