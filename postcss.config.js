/* eslint-env node */

module.exports = {
  use: [
    'postcss-import',
    'postcss-cssnext',
    'postcss-reporter'
  ],

  'postcss-reporter': {
    clearAllMessages: true,
    throwError: true
  }
};