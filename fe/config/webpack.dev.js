/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

const { merge } = require('webpack-merge');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new ESLintPlugin({
      extensions: ['tsx', 'ts', 'jsx', 'js'],
    }),
  ],
  devServer: {
    open: true,
    port: 8111,
    historyApiFallback: false,
    host: 'localhost',
    static: {
      directory: path.join(__dirname, '..', 'public'),
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});
