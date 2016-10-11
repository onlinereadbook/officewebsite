'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabTemplate = function (_Component) {
  (0, _inherits3.default)(TabTemplate, _Component);

  function TabTemplate() {
    (0, _classCallCheck3.default)(this, TabTemplate);
    return (0, _possibleConstructorReturn3.default)(this, (TabTemplate.__proto__ || (0, _getPrototypeOf2.default)(TabTemplate)).apply(this, arguments));
  }

  (0, _createClass3.default)(TabTemplate, [{
    key: 'render',
    value: function render() {
      var styles = {
        width: '100%',
        position: 'relative',
        textAlign: 'initial'
      };

      if (!this.props.selected) {
        styles.height = 0;
        styles.overflow = 'hidden';
      }

      return _react2.default.createElement(
        'div',
        { style: styles },
        this.props.children
      );
    }
  }]);
  return TabTemplate;
}(_react.Component);

process.env.NODE_ENV !== "production" ? TabTemplate.propTypes = {
  children: _react.PropTypes.node,
  selected: _react.PropTypes.bool
} : void 0;
exports.default = TabTemplate;