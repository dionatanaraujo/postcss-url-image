'use strict';

const postcss = require('postcss');

/**
 *
 * @type {Plugin}
 */
export default postcss.plugin('postcss-static-url-image', () => {
  return function(styles) {
    styles.walkDecls((declaration) => {
      declaration.value = declaration.value.replace('../../', '/');
      declaration.value = declaration.value.replace('../', '/');
    });
  };
});
