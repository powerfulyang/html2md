const { merge } = require('webpack-merge');
const common = require('./webpack.base');

module.exports = merge(common, {
  mode: 'production',
});
