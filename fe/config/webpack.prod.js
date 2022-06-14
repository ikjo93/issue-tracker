const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

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
