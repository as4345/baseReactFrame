var webpack = require('webpack');

var vendors = [
  'react',
  'react-dom',
  'antd',
  'react-redux',
  'react-router',
  'redux',
  'redux-thunk',
  'immutable',
  "es6-promise"
];

module.exports = {
  output: {
    path: 'dll',
    filename: '[name]_[chunkhash].js',
    library: '[name]_[chunkhash]',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'dll/manifest.json',
      name: '[name]_[chunkhash]',
      context: __dirname,
    }),
  ],
};