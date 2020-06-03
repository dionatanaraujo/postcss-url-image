'use strict';

const postcss = require('postcss');

/**
 *
 * @type {Plugin}
 */
exports.default = postcss.plugin('postcss-static-url-image', () => {
  return function (styles) {
    styles.walkDecls((declaration) => {
      declaration.value = declaration.value.replace('../../', '/');
      declaration.value = declaration.value.replace('../', '/');
    });
  };
});

module.exports = exports['default'];
