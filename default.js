'use strict';

module.exports = {
  extends: [
    'airbnb-base'
  ],
  rules: {
    // Vanilla eslint rules -------------------------------
    // Console logs should almost always be removed in favor of a proper logging library
    'no-console': 'warn',

    // Redefineing parameters is can lead to confusing bugs
    'no-param-reassign': 'error',

    // Allow functions without names (override airbnb)
    'func-names': 'off',

    // Never put a space before your function params (override airbnb)
    'space-before-function-paren': ['error', 'never'],

    // Make objects with more then one property go on multiple lines
    'object-curly-newline': ['error', {
      'multiline': true,
      'minProperties': 2
    }],

    // Make chained function calls go on newlines
    'newline-per-chained-call': 'error',

    // Require use strict everywhere
    strict: ['error', 'global'],

    // Import plugin rules --------------------------------
    // Enforce an order for your imports
    'import/order': ['error', {
      'newlines-between': 'always'
    }],

    // Allow importing devDependencies
    'import/no-extraneous-dependencies': [2, {
      devDependencies: false,
    }],
  }
};
