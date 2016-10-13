'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Header = require('./Header.css');

var _Header2 = _interopRequireDefault(_Header);

var _Link = require('../Link');

var _Link2 = _interopRequireDefault(_Link);

var _Navigation = require('../Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _LanguageSwitcher = require('../LanguageSwitcher');

var _LanguageSwitcher2 = _interopRequireDefault(_LanguageSwitcher);

var _logoSmall = require('./logo-small.png');

var _logoSmall2 = _interopRequireDefault(_logoSmall);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messages = (0, _reactIntl.defineMessages)({
  brand: {
    id: 'header.brand',
    defaultMessage: 'Your Company Brand',
    description: 'Brand name displayed in header'
  },
  bannerTitle: {
    id: 'header.banner.title',
    defaultMessage: 'React',
    description: 'Title in page header'
  },
  bannerDesc: {
    id: 'header.banner.desc',
    defaultMessage: 'Complex web apps made easy',
    description: 'Description in header'
  }
}); /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */

function Header() {

  return _react2.default.createElement(
    'div',
    { className: _Header2.default.root },
    _react2.default.createElement(
      'div',
      { className: _Header2.default.container },
      _react2.default.createElement(_AppBar2.default, { title: 'Add' })
    )
  );
}

exports.default = (0, _reactIntl.injectIntl)((0, _withStyles2.default)(_Header2.default)(Header));

//# sourceMappingURL=Header-compiled.js.map