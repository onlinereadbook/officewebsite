'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Footer = require('./Footer.css');

var _Footer2 = _interopRequireDefault(_Footer);

var _Link = require('../Link');

var _Link2 = _interopRequireDefault(_Link);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _BottomNavigation = require('material-ui/BottomNavigation');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _locationOn = require('material-ui/svg-icons/communication/location-on');

var _locationOn2 = _interopRequireDefault(_locationOn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var recentsIcon = _react2.default.createElement(
  _FontIcon2.default,
  { className: 'material-icons' },
  'restore'
);
var favoritesIcon = _react2.default.createElement(
  _FontIcon2.default,
  { className: 'material-icons' },
  'favorite'
);
var nearbyIcon = _react2.default.createElement(_locationOn2.default, null);

// function Footer() {
//
//   return (
//     <div className={s.root}>
//       <div className={s.container}>
//         <span className={s.text}>© Your Company</span>
//         <span className={s.spacer}>·</span>
//         <Link className={s.link} to="/">Home</Link>
//         <span className={s.spacer}>·</span>
//         <Link className={s.link} to="/admin">Admin</Link>
//         <span className={s.spacer}>·</span>
//         <Link className={s.link} to="/privacy">Privacy</Link>
//         <span className={s.spacer}>·</span>
//         <Link className={s.link} to="/not-found">Not Found</Link>
//       </div>
//     </div>
//   );
// }

exports.default = (0, _withStyles2.default)(_Footer2.default)(Footer);

//# sourceMappingURL=Footer-compiled.js.map