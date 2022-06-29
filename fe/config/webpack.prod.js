/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
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
