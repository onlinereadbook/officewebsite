'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Layout = require('./Layout.css');

var _Layout2 = _interopRequireDefault(_Layout);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _Feedback = require('../Feedback');

var _Feedback2 = _interopRequireDefault(_Feedback);

var _Footer = require('../Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

function Layout(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Good Day'
    ),
    _react2.default.createElement(_Header2.default, null),
    _react2.default.Children.only(children),
    _react2.default.createElement(_Footer2.default, null)
  );
}

Layout.propTypes = {
  children: _react.PropTypes.element.isRequired
};

exports.default = (0, _withStyles2.default)(_Layout2.default)(Layout);

//# sourceMappingURL=Layout-compiled.js.map