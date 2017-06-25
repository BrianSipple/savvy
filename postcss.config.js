/* eslint-env node */

module.exports = function (ctx) {
  const { 
    file: { basename: CURRENT_FILE_BASE_NAME },
    options: contextOpts
  } = ctx;

  const { MINIFY, VARIABLES } = process.env;

  return {
    map: contextOpts.map,

    plugins: {
      // ⚠️ Order matters! PostCSS will run plugins in the order listed.
      'postcss-import': {},

      'postcss-cssnext': {
        features: {
          customProperties: {
            preserve: !!VARIABLES
          }
        }
      },

      // 🔑 Set `process.env.NODE_ENV` to "production" to create
      // a minified production build
      cssnano: !!MINIFY ? {} : false,

      'postcss-reporter': {
        clearAllMessages: true,
        throwError: true
      }
    }
  };
};
