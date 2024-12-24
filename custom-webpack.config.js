const webpack = require('webpack');
const XhrEvalChunkPlugin = require('xhr-eval-chunk-webpack-plugin').default;

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'STABLE_FEATURE': JSON.stringify(true),
      'EXPERIMENTAL_FEATURE': JSON.stringify(false)
    }),
    new XhrEvalChunkPlugin(),
  ]
};


