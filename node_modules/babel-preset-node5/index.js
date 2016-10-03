/* global module */
module.exports = {
  plugins: [
    require('babel-plugin-syntax-async-functions'),
    require('babel-plugin-syntax-object-rest-spread'),
    require('babel-plugin-syntax-trailing-function-commas'),
    require('babel-plugin-transform-es2015-destructuring'),
    require('babel-plugin-transform-es2015-modules-commonjs'),
    require('babel-plugin-transform-es2015-parameters'),
    require('babel-plugin-transform-es2015-sticky-regex'),
    require('babel-plugin-transform-es2015-unicode-regex'),
    require('babel-plugin-transform-strict-mode'),
    require('babel-plugin-transform-object-rest-spread'),
    require('babel-plugin-transform-async-to-generator'),
  ],
};
