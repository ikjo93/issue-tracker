/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  // TODO: 디버깅용. 최송 배포떄는 제거할 것
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
              replace: 'http://3.38.208.189',
              flags: 'g',
            },
          },
        ],
      },
    ],
  },
});
