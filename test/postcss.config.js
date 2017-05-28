/* eslint-env node */

module.exports = function (/* ctx */) {
  return {
    plugins: {
      'postcss-import': {},
      // 'postcss-cssnext': {},

      'postcss-reporter': {
        clearAllMessages: true,
        throwError: true
      }
    }
  };
};
