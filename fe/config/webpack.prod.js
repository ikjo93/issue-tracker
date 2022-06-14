/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  //   optimization: {
  //     usedExports: true,
  //     minimize: true,
  //     minimizer: [
  //       new TerserPlugin({ terserOptions: { compress: { drop_console: true } } }),
  //       new CssMinimizerPlugin(),
  //     ],
  //     splitChunks: { chunks: 'all' },
  //   },
  //   performance: {
  //     hints: false,
  //     maxEntrypointSize: 512000,
  //     maxAssetSize: 512000,
  //   },
});
