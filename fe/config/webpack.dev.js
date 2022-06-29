/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');

const ESLintPlugin = require('eslint-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'string-replace-loader',
            options: {
              search: '__API_END_POINT__',
              replace: 'http://localhost:8111',
              flags: 'g',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['tsx', 'ts', 'jsx', 'js'],
    }),
  ],
  devServer: {
    open: true,
    port: 8111,
    historyApiFallback: true,
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
