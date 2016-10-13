require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _typeof2 = __webpack_require__(1);
  
  var _typeof3 = _interopRequireDefault(_typeof2);
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _toConsumableArray2 = __webpack_require__(3);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _extends2 = __webpack_require__(5);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _set = __webpack_require__(6);
  
  var _set2 = _interopRequireDefault(_set);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  __webpack_require__(8);
  
  var _path = __webpack_require__(9);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(10);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _cookieParser = __webpack_require__(11);
  
  var _cookieParser2 = _interopRequireDefault(_cookieParser);
  
  var _expressRequestLanguage = __webpack_require__(12);
  
  var _expressRequestLanguage2 = _interopRequireDefault(_expressRequestLanguage);
  
  var _bodyParser = __webpack_require__(13);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _expressJwt = __webpack_require__(14);
  
  var _expressJwt2 = _interopRequireDefault(_expressJwt);
  
  var _expressGraphql = __webpack_require__(15);
  
  var _expressGraphql2 = _interopRequireDefault(_expressGraphql);
  
  var _jsonwebtoken = __webpack_require__(16);
  
  var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _server = __webpack_require__(18);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _universalRouter = __webpack_require__(19);
  
  var _universalRouter2 = _interopRequireDefault(_universalRouter);
  
  var _prettyError = __webpack_require__(20);
  
  var _prettyError2 = _interopRequireDefault(_prettyError);
  
  var _reactIntl = __webpack_require__(21);
  
  __webpack_require__(22);
  
  var _App = __webpack_require__(26);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _Html = __webpack_require__(38);
  
  var _Html2 = _interopRequireDefault(_Html);
  
  var _ErrorPage = __webpack_require__(40);
  
  var _ErrorPage2 = __webpack_require__(42);
  
  var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);
  
  var _passport = __webpack_require__(50);
  
  var _passport2 = _interopRequireDefault(_passport);
  
  var _models = __webpack_require__(53);
  
  var _models2 = _interopRequireDefault(_models);
  
  var _schema = __webpack_require__(60);
  
  var _schema2 = _interopRequireDefault(_schema);
  
  var _routes = __webpack_require__(76);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _assets = __webpack_require__(137);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _configureStore = __webpack_require__(138);
  
  var _configureStore2 = _interopRequireDefault(_configureStore);
  
  var _runtime = __webpack_require__(148);
  
  var _intl = __webpack_require__(95);
  
  var _config = __webpack_require__(24);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // eslint-disable-line import/no-unresolved
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var app = (0, _express2.default)();
  
  //
  // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
  // user agent is not known.
  // -----------------------------------------------------------------------------
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';
  
  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
  app.use((0, _cookieParser2.default)());
  app.use((0, _expressRequestLanguage2.default)({
    languages: _config.locales,
    queryName: 'lang',
    cookie: {
      name: 'lang',
      options: {
        path: '/',
        maxAge: 3650 * 24 * 3600 * 1000 },
      url: '/lang/{language}'
    }
  }));
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());
  
  //
  // Authentication
  // -----------------------------------------------------------------------------
  app.use((0, _expressJwt2.default)({
    secret: _config.auth.jwt.secret,
    credentialsRequired: false,
    getToken: function getToken(req) {
      return req.cookies.id_token;
    }
  }));
  app.use(_passport2.default.initialize());
  
  app.get('/login/facebook', _passport2.default.authenticate('facebook', { scope: ['email', 'user_location'], session: false }));
  app.get('/login/facebook/return', _passport2.default.authenticate('facebook', { failureRedirect: '/login', session: false }), function (req, res) {
    var expiresIn = 60 * 60 * 24 * 180; // 180 days
    var token = _jsonwebtoken2.default.sign(req.user, _config.auth.jwt.secret, { expiresIn: expiresIn });
    res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
    res.redirect('/');
  });
  
  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  app.use('/graphql', (0, _expressGraphql2.default)(function (req) {
    return {
      schema: _schema2.default,
      graphiql: true,
      rootValue: { request: req },
      pretty: ("production") !== 'production'
    };
  }));
  
  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  app.get('*', function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, next) {
      var _ret;
  
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              return _context2.delegateYield(_regenerator2.default.mark(function _callee() {
                var store, locale, css, context, route, data, html;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        store = (0, _configureStore2.default)({
                          user: req.user || null
                        }, {
                          cookie: req.headers.cookie
                        });
  
  
                        store.dispatch((0, _runtime.setRuntimeVariable)({
                          name: 'initialNow',
                          value: Date.now()
                        }));
  
                        store.dispatch((0, _runtime.setRuntimeVariable)({
                          name: 'availableLocales',
                          value: _config.locales
                        }));
  
                        locale = req.language;
                        _context.next = 6;
                        return store.dispatch((0, _intl.setLocale)({
                          locale: locale
                        }));
  
                      case 6:
                        css = new _set2.default();
  
                        // Global (context) variables that can be easily accessed from any React component
                        // https://facebook.github.io/react/docs/context.html
  
                        context = {
                          // Enables critical path CSS rendering
                          // https://github.com/kriasoft/isomorphic-style-loader
                          insertCss: function insertCss() {
                            for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
                              styles[_key] = arguments[_key];
                            }
  
                            // eslint-disable-next-line no-underscore-dangle
                            styles.forEach(function (style) {
                              return css.add(style._getCss());
                            });
                          },
                          // Initialize a new Redux store
                          // http://redux.js.org/docs/basics/UsageWithReact.html
                          store: store
                        };
                        _context.next = 10;
                        return _universalRouter2.default.resolve(_routes2.default, (0, _extends3.default)({}, context, {
                          path: req.path,
                          query: req.query
                        }));
  
                      case 10:
                        route = _context.sent;
  
                        if (!route.redirect) {
                          _context.next = 14;
                          break;
                        }
  
                        res.redirect(route.status || 302, route.redirect);
                        return _context.abrupt('return', {
                          v: void 0
                        });
  
                      case 14:
                        data = (0, _extends3.default)({}, route);
  
                        data.children = _server2.default.renderToString((0, _jsx3.default)(_App2.default, {
                          context: context
                        }, void 0, route.component));
                        data.style = [].concat((0, _toConsumableArray3.default)(css)).join('');
                        data.script = _assets2.default.main.js;
                        data.state = context.store.getState();
                        data.lang = locale;
                        html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, data));
  
  
                        res.status(route.status || 200);
                        res.send('<!doctype html>' + html);
  
                      case 23:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              })(), 't0', 2);
  
            case 2:
              _ret = _context2.t0;
  
              if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {
                _context2.next = 5;
                break;
              }
  
              return _context2.abrupt('return', _ret.v);
  
            case 5:
              _context2.next = 10;
              break;
  
            case 7:
              _context2.prev = 7;
              _context2.t1 = _context2['catch'](0);
  
              next(_context2.t1);
  
            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 7]]);
    }));
  
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  
  //
  // Error handling
  // -----------------------------------------------------------------------------
  var pe = new _prettyError2.default();
  pe.skipNodeFiles();
  pe.skipPackage('express');
  
  app.use(function (err, req, res, next) {
    // eslint-disable-line no-unused-vars
    console.log(pe.render(err)); // eslint-disable-line no-console
    var locale = req.language;
    var html = _server2.default.renderToStaticMarkup((0, _jsx3.default)(_Html2.default, {
      title: 'Internal Server Error',
      description: err.message,
      style: _ErrorPage3.default._getCss(),
      lang: locale
    }, void 0, _server2.default.renderToString((0, _jsx3.default)(_reactIntl.IntlProvider, {
      locale: locale
    }, void 0, (0, _jsx3.default)(_ErrorPage.ErrorPageWithoutStyle, {
      error: err
    })))));
    res.status(err.status || 500);
    res.send('<!doctype html>' + html);
  });
  
  //
  // Launch the server
  // -----------------------------------------------------------------------------
  /* eslint-disable no-console */
  _models2.default.sync().catch(function (err) {
    return console.error(err.stack);
  }).then(function () {
    app.listen(_config.port, function () {
      console.log('The server is running at http://localhost:' + _config.port + '/');
    });
  });
  /* eslint-enable no-console */

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/typeof");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/jsx");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/set");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("cookie-parser");

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("express-request-language");

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("express-jwt");

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("express-graphql");

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("jsonwebtoken");

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("universal-router");

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("pretty-error");

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("react-intl");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _intlLocalesSupported = __webpack_require__(23);
  
  var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);
  
  var _config = __webpack_require__(24);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  if (global.Intl) {
    // Determine if the built-in `Intl` has the locale data we need.
    if (!(0, _intlLocalesSupported2.default)(_config.locales)) {
      // `Intl` exists, but it doesn't have the data we need, so load the
      // polyfill and replace the constructors with need with the polyfill's.
      var IntlPolyfill = __webpack_require__(25); // eslint-disable-line global-require
  
      Intl.NumberFormat = IntlPolyfill.NumberFormat;
      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    }
  } else {
    // No `Intl`, so use and load the polyfill.
    global.Intl = __webpack_require__(25); // eslint-disable-line global-require
  }

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("intl-locales-supported");

/***/ },
/* 24 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /* eslint-disable max-len */
  
  var port = exports.port = process.env.PORT || 3000;
  var host = exports.host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;
  
  // default locale is the first one
  var locales = exports.locales = ['en-US', 'cs-CZ'];
  
  var databaseUrl = exports.databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
  
  var analytics = exports.analytics = {
  
    // https://analytics.google.com/
    google: {
      trackingId: process.env.GOOGLE_TRACKING_ID }
  
  };
  
  var auth = exports.auth = {
  
    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },
  
    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
    },
  
    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },
  
    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  
  };

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("intl");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(27);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(28);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(29);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(30);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(31);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactIntl = __webpack_require__(21);
  
  var _reactTapEventPlugin = __webpack_require__(32);
  
  var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
  
  var _colors = __webpack_require__(33);
  
  var _colorManipulator = __webpack_require__(34);
  
  var _MuiThemeProvider = __webpack_require__(35);
  
  var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
  
  var _getMuiTheme = __webpack_require__(36);
  
  var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
  
  var _darkBaseTheme = __webpack_require__(37);
  
  var _darkBaseTheme2 = _interopRequireDefault(_darkBaseTheme);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  (0, _reactTapEventPlugin2.default)();
  
  var ContextType = {
    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
    insertCss: _react.PropTypes.func.isRequired,
    // Integrate Redux
    // http://redux.js.org/docs/basics/UsageWithReact.html
    store: _react.PropTypes.shape({
      subscribe: _react.PropTypes.func.isRequired,
      dispatch: _react.PropTypes.func.isRequired,
      getState: _react.PropTypes.func.isRequired
    }).isRequired
  };
  
  /**
   * The top-level React component setting context (global) variables
   * that can be accessed from all the child components.
   *
   * https://facebook.github.io/react/docs/context.html
   *
   * Usage example:
   *
   *   const context = {
   *     history: createBrowserHistory(),
   *     store: createStore(),
   *   };
   *
   *   ReactDOM.render(<App context={context}><HomePage /></App>, container);
   */
  
  var App = function (_React$Component) {
    (0, _inherits3.default)(App, _React$Component);
  
    function App() {
      (0, _classCallCheck3.default)(this, App);
      return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(App, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return this.props.context;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
  
        var store = this.props.context && this.props.context.store;
        if (store) {
          this.unsubscribe = store.subscribe(function () {
            var state = store.getState();
            var newIntl = state.intl;
            if (_this2.intl !== newIntl) {
              _this2.intl = newIntl;
              console.log('Intl changed'); // eslint-disable-line no-console
              _this2.forceUpdate();
            }
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.unsubscribe) {
          this.unsubscribe();
          this.unsubscribe = null;
        }
      }
    }, {
      key: 'render',
      value: function render() {
        // NOTE: If you need to add or modify header, footer etc. of the app,
        // please do that inside the Layout component.
        var store = this.props.context && this.props.context.store;
        var state = store && store.getState();
        this.intl = state && state.intl || {};
        var _intl = this.intl;
        var initialNow = _intl.initialNow;
        var locale = _intl.locale;
        var messages = _intl.messages;
  
        var localeMessages = messages && messages[locale] || {};
        var muiTheme = (0, _getMuiTheme2.default)({
          palette: {
            primary1Color: _colors.cyan500,
            primary2Color: _colors.cyan700,
            primary3Color: _colors.grey400,
            accent1Color: _colors.pinkA200,
            accent2Color: _colors.grey100,
            accent3Color: _colors.grey500,
            textColor: _colors.darkBlack,
            alternateTextColor: _colors.white,
            canvasColor: _colors.white,
            borderColor: _colors.grey300,
            disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
            pickerHeaderColor: _colors.cyan500,
            clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
            shadowColor: _colors.fullBlack
          },
          appBar: {
            height: 50
          }
        });
  
        return (0, _jsx3.default)(_MuiThemeProvider2.default, {}, void 0, (0, _jsx3.default)(_reactIntl.IntlProvider, {
          initialNow: initialNow,
          locale: locale,
          messages: localeMessages,
          defaultLocale: 'en-US'
        }, void 0, _react2.default.Children.only(this.props.children)));
      }
    }]);
    return App;
  }(_react2.default.Component);
  
  App.childContextTypes = ContextType;
  exports.default = App;

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 30 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 31 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 32 */
/***/ function(module, exports) {

  module.exports = require("react-tap-event-plugin");

/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = require("material-ui/styles/colors");

/***/ },
/* 34 */
/***/ function(module, exports) {

  module.exports = require("material-ui/utils/colorManipulator");

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = require("material-ui/styles/getMuiTheme");

/***/ },
/* 37 */
/***/ function(module, exports) {

  module.exports = require("material-ui/styles/baseThemes/darkBaseTheme");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _serializeJavascript = __webpack_require__(39);
  
  var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);
  
  var _config = __webpack_require__(24);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref2 = (0, _jsx3.default)('meta', {
    charSet: 'utf-8'
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  var _ref3 = (0, _jsx3.default)('meta', {
    httpEquiv: 'x-ua-compatible',
    content: 'ie=edge'
  });
  
  var _ref4 = (0, _jsx3.default)('meta', {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
  });
  
  var _ref5 = (0, _jsx3.default)('link', {
    rel: 'apple-touch-icon',
    href: 'apple-touch-icon.png'
  });
  
  var _ref6 = (0, _jsx3.default)('script', {
    src: 'https://www.google-analytics.com/analytics.js',
    async: true,
    defer: true
  });
  
  function Html(_ref) {
    var title = _ref.title;
    var description = _ref.description;
    var style = _ref.style;
    var script = _ref.script;
    var state = _ref.state;
    var lang = _ref.lang;
    var children = _ref.children;
  
    return (0, _jsx3.default)('html', {
      className: 'no-js',
      lang: lang
    }, void 0, (0, _jsx3.default)('head', {}, void 0, _ref2, _ref3, (0, _jsx3.default)('title', {}, void 0, title), (0, _jsx3.default)('meta', {
      name: 'description',
      content: description
    }), _ref4, _ref5, style && (0, _jsx3.default)('style', {
      id: 'css',
      dangerouslySetInnerHTML: { __html: style }
    })), (0, _jsx3.default)('body', {}, void 0, (0, _jsx3.default)('div', {
      id: 'app',
      dangerouslySetInnerHTML: { __html: children }
    }), state && (0, _jsx3.default)('script', {
      dangerouslySetInnerHTML: {
        __html: 'window.APP_STATE=' + (0, _serializeJavascript2.default)(state, { isJSON: true })
      }
    }), script && (0, _jsx3.default)('script', {
      src: script
    }), _config.analytics.google.trackingId && (0, _jsx3.default)('script', {
      dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + ('ga(\'create\',\'' + _config.analytics.google.trackingId + '\',\'auto\');ga(\'send\',\'pageview\')') }
    }), _config.analytics.google.trackingId && _ref6));
  }
  
  exports.default = Html;

/***/ },
/* 39 */
/***/ function(module, exports) {

  module.exports = require("serialize-javascript");

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ErrorPageWithoutStyle = undefined;
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ErrorPage = __webpack_require__(42);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref2 = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('h1', {}, void 0, 'Error'), (0, _jsx3.default)('p', {}, void 0, 'Sorry, a critical error occurred on this page.')); /**
                                                                                                                                                                                            * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                                                                                            *
                                                                                                                                                                                            * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                                                                                            *
                                                                                                                                                                                            * This source code is licensed under the MIT license found in the
                                                                                                                                                                                            * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                                                                            */
  
  function ErrorPage(_ref) {
    var error = _ref.error;
  
    if (false) {
      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('h1', {}, void 0, error.name), (0, _jsx3.default)('p', {}, void 0, error.message), (0, _jsx3.default)('pre', {}, void 0, error.stack));
    }
  
    return _ref2;
  }
  
  exports.ErrorPageWithoutStyle = ErrorPage;
  exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ },
/* 41 */
/***/ function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(43);
      var insertCss = __webpack_require__(45);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, "*{line-height:1.2;margin:0}html{color:#888;display:table;font-family:sans-serif;height:100%;text-align:center;width:100%}body{display:table-cell;vertical-align:middle;padding:2em}h1{color:#555;font-size:2em;font-weight:400}p{margin:0 auto;width:280px}pre{text-align:left;margin-top:32px;margin-top:2rem}@media only screen and (max-width:280px){body,p{width:95%}h1{font-size:1.5em;margin:0 0 .3em}}", ""]);
  
  // exports


/***/ },
/* 44 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(46);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _stringify = __webpack_require__(47);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _slicedToArray2 = __webpack_require__(48);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _getIterator2 = __webpack_require__(49);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var prefix = 's';
  var inserted = {};
  
  // Base64 encoding and decoding - The "Unicode Problem"
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }
  
  /**
   * Remove style/link elements for specified node IDs
   * if they are no longer referenced by UI components.
   */
  function removeCss(ids) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
  
    try {
      for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;
  
        if (--inserted[id] <= 0) {
          var elem = document.getElementById(prefix + id);
          if (elem) {
            elem.parentNode.removeChild(elem);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  
  /**
   * Example:
   *   // Insert CSS styles object generated by `css-loader` into DOM
   *   var removeCss = insertCss([[1, 'body { color: red; }']]);
   *
   *   // Remove it from the DOM
   *   removeCss();
   */
  function insertCss(styles, options) {
    var _Object$assign = (0, _assign2.default)({
      replace: false,
      prepend: false
    }, options);
  
    var replace = _Object$assign.replace;
    var prepend = _Object$assign.prepend;
  
  
    var ids = [];
    for (var i = 0; i < styles.length; i++) {
      var _styles$i = (0, _slicedToArray3.default)(styles[i], 4);
  
      var moduleId = _styles$i[0];
      var css = _styles$i[1];
      var media = _styles$i[2];
      var sourceMap = _styles$i[3];
  
      var id = moduleId + '-' + i;
  
      ids.push(id);
  
      if (inserted[id]) {
        if (!replace) {
          inserted[id]++;
          continue;
        }
      }
  
      inserted[id] = 1;
  
      var elem = document.getElementById(prefix + id);
      var create = false;
  
      if (!elem) {
        create = true;
  
        elem = document.createElement('style');
        elem.setAttribute('type', 'text/css');
        elem.id = prefix + id;
  
        if (media) {
          elem.setAttribute('media', media);
        }
      }
  
      var cssText = css;
      if (sourceMap) {
        cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
        cssText += '\n/*# sourceURL=' + sourceMap.file + '*/';
      }
  
      if ('textContent' in elem) {
        elem.textContent = cssText;
      } else {
        elem.styleSheet.cssText = cssText;
      }
  
      if (create) {
        if (prepend) {
          document.head.insertBefore(elem, document.head.childNodes[0]);
        } else {
          document.head.appendChild(elem);
        }
      }
    }
  
    return removeCss.bind(null, ids);
  }
  
  module.exports = insertCss;

/***/ },
/* 46 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/assign");

/***/ },
/* 47 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 48 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 49 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _passport = __webpack_require__(51);
  
  var _passport2 = _interopRequireDefault(_passport);
  
  var _passportFacebook = __webpack_require__(52);
  
  var _models = __webpack_require__(53);
  
  var _config = __webpack_require__(24);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Sign in with Facebook.
   */
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /**
   * Passport.js reference implementation.
   * The database schema used in this sample is available at
   * https://github.com/membership/membership.db/tree/master/postgres
   */
  
  _passport2.default.use(new _passportFacebook.Strategy({
    clientID: _config.auth.facebook.id,
    clientSecret: _config.auth.facebook.secret,
    callbackURL: '/login/facebook/return',
    profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
    passReqToCallback: true
  }, function (req, accessToken, refreshToken, profile, done) {
    /* eslint-disable no-underscore-dangle */
    var loginName = 'facebook';
    var claimType = 'urn:facebook:access_token';
    var fooBar = function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var userLogin, user, users, _user;
  
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req.user) {
                  _context.next = 14;
                  break;
                }
  
                _context.next = 3;
                return _models.UserLogin.findOne({
                  attributes: ['name', 'key'],
                  where: { name: loginName, key: profile.id }
                });
  
              case 3:
                userLogin = _context.sent;
  
                if (!userLogin) {
                  _context.next = 8;
                  break;
                }
  
                // There is already a Facebook account that belongs to you.
                // Sign in with that account or delete it, then link it with your current account.
                done();
                _context.next = 12;
                break;
  
              case 8:
                _context.next = 10;
                return _models.User.create({
                  id: req.user.id,
                  email: profile._json.email,
                  logins: [{ name: loginName, key: profile.id }],
                  claims: [{ type: claimType, value: profile.id }],
                  profile: {
                    displayName: profile.displayName,
                    gender: profile._json.gender,
                    picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
                  }
                }, {
                  include: [{ model: _models.UserLogin, as: 'logins' }, { model: _models.UserClaim, as: 'claims' }, { model: _models.UserProfile, as: 'profile' }]
                });
  
              case 10:
                user = _context.sent;
  
                done(null, {
                  id: user.id,
                  email: user.email
                });
  
              case 12:
                _context.next = 32;
                break;
  
              case 14:
                _context.next = 16;
                return _models.User.findAll({
                  attributes: ['id', 'email'],
                  where: { '$logins.name$': loginName, '$logins.key$': profile.id },
                  include: [{
                    attributes: ['name', 'key'],
                    model: _models.UserLogin,
                    as: 'logins',
                    required: true
                  }]
                });
  
              case 16:
                users = _context.sent;
  
                if (!users.length) {
                  _context.next = 21;
                  break;
                }
  
                done(null, users[0]);
                _context.next = 32;
                break;
  
              case 21:
                _context.next = 23;
                return _models.User.findOne({ where: { email: profile._json.email } });
  
              case 23:
                _user = _context.sent;
  
                if (!_user) {
                  _context.next = 28;
                  break;
                }
  
                // There is already an account using this email address. Sign in to
                // that account and link it with Facebook manually from Account Settings.
                done(null);
                _context.next = 32;
                break;
  
              case 28:
                _context.next = 30;
                return _models.User.create({
                  email: profile._json.email,
                  emailConfirmed: true,
                  logins: [{ name: loginName, key: profile.id }],
                  claims: [{ type: claimType, value: accessToken }],
                  profile: {
                    displayName: profile.displayName,
                    gender: profile._json.gender,
                    picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
                  }
                }, {
                  include: [{ model: _models.UserLogin, as: 'logins' }, { model: _models.UserClaim, as: 'claims' }, { model: _models.UserProfile, as: 'profile' }]
                });
  
              case 30:
                _user = _context.sent;
  
                done(null, {
                  id: _user.id,
                  email: _user.email
                });
  
              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));
  
      return function fooBar() {
        return _ref.apply(this, arguments);
      };
    }();
  
    fooBar().catch(done);
  }));
  
  exports.default = _passport2.default;

/***/ },
/* 51 */
/***/ function(module, exports) {

  module.exports = require("passport");

/***/ },
/* 52 */
/***/ function(module, exports) {

  module.exports = require("passport-facebook");

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UserProfile = exports.UserClaim = exports.UserLogin = exports.User = undefined;
  
  var _sequelize = __webpack_require__(54);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _User = __webpack_require__(56);
  
  var _User2 = _interopRequireDefault(_User);
  
  var _UserLogin = __webpack_require__(57);
  
  var _UserLogin2 = _interopRequireDefault(_UserLogin);
  
  var _UserClaim = __webpack_require__(58);
  
  var _UserClaim2 = _interopRequireDefault(_UserClaim);
  
  var _UserProfile = __webpack_require__(59);
  
  var _UserProfile2 = _interopRequireDefault(_UserProfile);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  _User2.default.hasMany(_UserLogin2.default, {
    foreignKey: 'userId',
    as: 'logins',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  _User2.default.hasMany(_UserClaim2.default, {
    foreignKey: 'userId',
    as: 'claims',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  });
  
  _User2.default.hasOne(_UserProfile2.default, {
    foreignKey: 'userId',
    as: 'profile',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  });
  
  function sync() {
    return _sequelize2.default.sync.apply(_sequelize2.default, arguments);
  }
  
  exports.default = { sync: sync };
  exports.User = _User2.default;
  exports.UserLogin = _UserLogin2.default;
  exports.UserClaim = _UserClaim2.default;
  exports.UserProfile = _UserProfile2.default;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(55);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _config = __webpack_require__(24);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var sequelize = new _sequelize2.default(_config.databaseUrl, {
    define: {
      freezeTableName: true
    }
  });
  
  exports.default = sequelize;

/***/ },
/* 55 */
/***/ function(module, exports) {

  module.exports = require("sequelize");

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(55);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(54);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var User = _sequelize4.default.define('User', {
  
    id: {
      type: _sequelize2.default.UUID,
      defaultValue: _sequelize2.default.UUIDV1,
      primaryKey: true
    },
  
    email: {
      type: _sequelize2.default.STRING(255),
      validate: { isEmail: true }
    },
  
    emailConfirmed: {
      type: _sequelize2.default.BOOLEAN,
      defaultValue: false
    }
  
  }, {
  
    indexes: [{ fields: ['email'] }]
  
  });
  
  exports.default = User;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(55);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(54);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var UserLogin = _sequelize4.default.define('UserLogin', {
  
    name: {
      type: _sequelize2.default.STRING(50),
      primaryKey: true
    },
  
    key: {
      type: _sequelize2.default.STRING(100),
      primaryKey: true
    }
  
  });
  
  exports.default = UserLogin;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(55);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(54);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var UserClaim = _sequelize4.default.define('UserClaim', {
  
    type: {
      type: _sequelize2.default.STRING
    },
  
    value: {
      type: _sequelize2.default.INTEGER
    }
  
  });
  
  exports.default = UserClaim;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(55);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(54);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var UserProfile = _sequelize4.default.define('UserProfile', {
  
    userId: {
      type: _sequelize2.default.UUID,
      primaryKey: true
    },
  
    displayName: {
      type: _sequelize2.default.STRING(100)
    },
  
    picture: {
      type: _sequelize2.default.STRING(255)
    },
  
    gender: {
      type: _sequelize2.default.STRING(50)
    },
  
    location: {
      type: _sequelize2.default.STRING(100)
    },
  
    website: {
      type: _sequelize2.default.STRING(255)
    }
  
  });
  
  exports.default = UserProfile;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(61);
  
  var _me = __webpack_require__(62);
  
  var _me2 = _interopRequireDefault(_me);
  
  var _content = __webpack_require__(64);
  
  var _content2 = _interopRequireDefault(_content);
  
  var _news = __webpack_require__(70);
  
  var _news2 = _interopRequireDefault(_news);
  
  var _intl = __webpack_require__(74);
  
  var _intl2 = _interopRequireDefault(_intl);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var schema = new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
      name: 'Query',
      fields: {
        me: _me2.default,
        content: _content2.default,
        news: _news2.default,
        intl: _intl2.default
      }
    })
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = schema;

/***/ },
/* 61 */
/***/ function(module, exports) {

  module.exports = require("graphql");

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _UserType = __webpack_require__(63);
  
  var _UserType2 = _interopRequireDefault(_UserType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var me = {
    type: _UserType2.default,
    resolve: function resolve(_ref) {
      var request = _ref.request;
  
      return request.user && {
        id: request.user.id,
        email: request.user.email
      };
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */
  
  exports.default = me;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(61);
  
  var UserType = new _graphql.GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
      email: { type: _graphql.GraphQLString }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = UserType;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getIterator2 = __webpack_require__(49);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _assign = __webpack_require__(46);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var resolveExtension = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(path, extension) {
      var fileNameBase, ext, fileName;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fileNameBase = (0, _path.join)(CONTENT_DIR, '' + (path === '/' ? '/index' : path));
              ext = extension;
  
              if (!ext.startsWith('.')) {
                ext = '.' + extension;
              }
  
              fileName = fileNameBase + ext;
              _context.next = 6;
              return fileExists(fileName);
  
            case 6:
              if (_context.sent) {
                _context.next = 9;
                break;
              }
  
              fileNameBase = (0, _path.join)(CONTENT_DIR, path + '/index');
              fileName = fileNameBase + ext;
  
            case 9:
              _context.next = 11;
              return fileExists(fileName);
  
            case 11:
              if (_context.sent) {
                _context.next = 13;
                break;
              }
  
              return _context.abrupt('return', { success: false });
  
            case 13:
              return _context.abrupt('return', { success: true, fileName: fileName });
  
            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  
    return function resolveExtension(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  
  var resolveFileName = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(path) {
      var extensions, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, extension, maybeFileName;
  
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              extensions = ['.md', '.html'];
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context2.prev = 4;
              _iterator = (0, _getIterator3.default)(extensions);
  
            case 6:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context2.next = 16;
                break;
              }
  
              extension = _step.value;
              _context2.next = 10;
              return resolveExtension(path, extension);
  
            case 10:
              maybeFileName = _context2.sent;
  
              if (!maybeFileName.success) {
                _context2.next = 13;
                break;
              }
  
              return _context2.abrupt('return', { success: true, fileName: maybeFileName.fileName, extension: extension });
  
            case 13:
              _iteratorNormalCompletion = true;
              _context2.next = 6;
              break;
  
            case 16:
              _context2.next = 22;
              break;
  
            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2['catch'](4);
              _didIteratorError = true;
              _iteratorError = _context2.t0;
  
            case 22:
              _context2.prev = 22;
              _context2.prev = 23;
  
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
  
            case 25:
              _context2.prev = 25;
  
              if (!_didIteratorError) {
                _context2.next = 28;
                break;
              }
  
              throw _iteratorError;
  
            case 28:
              return _context2.finish(25);
  
            case 29:
              return _context2.finish(22);
  
            case 30:
              return _context2.abrupt('return', { success: false, fileName: null, extension: null });
  
            case 31:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[4, 18, 22, 30], [23,, 25, 29]]);
    }));
  
    return function resolveFileName(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  
  var _fs = __webpack_require__(65);
  
  var _fs2 = _interopRequireDefault(_fs);
  
  var _path = __webpack_require__(9);
  
  var _bluebird = __webpack_require__(66);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _frontMatter = __webpack_require__(67);
  
  var _frontMatter2 = _interopRequireDefault(_frontMatter);
  
  var _markdownIt = __webpack_require__(68);
  
  var _markdownIt2 = _interopRequireDefault(_markdownIt);
  
  var _graphql = __webpack_require__(61);
  
  var _ContentType = __webpack_require__(69);
  
  var _ContentType2 = _interopRequireDefault(_ContentType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var md = new _markdownIt2.default();
  
  // A folder with Markdown/HTML content pages
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var CONTENT_DIR = (0, _path.join)(__dirname, './content');
  
  // Extract 'front matter' metadata and generate HTML
  var parseContent = function parseContent(path, fileContent, extension) {
    var fmContent = (0, _frontMatter2.default)(fileContent);
    var htmlContent = void 0;
    switch (extension) {
      case '.md':
        htmlContent = md.render(fmContent.body);
        break;
      case '.html':
        htmlContent = fmContent.body;
        break;
      default:
        return null;
    }
    return (0, _assign2.default)({ path: path, content: htmlContent }, fmContent.attributes);
  };
  
  var readFile = _bluebird2.default.promisify(_fs2.default.readFile);
  var fileExists = function fileExists(filename) {
    return new _bluebird2.default(function (resolve) {
      _fs2.default.exists(filename, resolve);
    });
  };
  
  var content = {
    type: _ContentType2.default,
    args: {
      path: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    },
    resolve: function resolve(_ref3, _ref4) {
      var _this = this;
  
      var request = _ref3.request;
      var path = _ref4.path;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var _ref5, success, fileName, extension, source;
  
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return resolveFileName(path);
  
              case 2:
                _ref5 = _context3.sent;
                success = _ref5.success;
                fileName = _ref5.fileName;
                extension = _ref5.extension;
  
                if (success) {
                  _context3.next = 8;
                  break;
                }
  
                return _context3.abrupt('return', null);
  
              case 8:
                _context3.next = 10;
                return readFile(fileName, { encoding: 'utf8' });
  
              case 10:
                source = _context3.sent;
                return _context3.abrupt('return', parseContent(path, source, extension));
  
              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this);
      }))();
    }
  };
  
  exports.default = content;

/***/ },
/* 65 */
/***/ function(module, exports) {

  module.exports = require("fs");

/***/ },
/* 66 */
/***/ function(module, exports) {

  module.exports = require("bluebird");

/***/ },
/* 67 */
/***/ function(module, exports) {

  module.exports = require("front-matter");

/***/ },
/* 68 */
/***/ function(module, exports) {

  module.exports = require("markdown-it");

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(61);
  
  var ContentType = new _graphql.GraphQLObjectType({
    name: 'Content',
    fields: {
      path: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      component: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = ContentType;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(61);
  
  var _fetch = __webpack_require__(71);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  var _NewsItemType = __webpack_require__(73);
  
  var _NewsItemType2 = _interopRequireDefault(_NewsItemType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // React.js News Feed (RSS)
  var url = 'http://ajax.googleapis.com/ajax/services/feed/load' + '?v=1.0&num=10&q=https://reactjsnews.com/feed.xml'; /**
                                                                                                                        * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                        *
                                                                                                                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                        *
                                                                                                                        * This source code is licensed under the MIT license found in the
                                                                                                                        * LICENSE.txt file in the root directory of this source tree.
                                                                                                                        */
  
  var items = [];
  var lastFetchTask = void 0;
  var lastFetchTime = new Date(1970, 0, 1);
  
  var news = {
    type: new _graphql.GraphQLList(_NewsItemType2.default),
    resolve: function resolve() {
      if (lastFetchTask) {
        return lastFetchTask;
      }
  
      if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
          lastFetchTime = new Date();
          lastFetchTask = (0, _fetch2.default)(url).then(function (response) {
            return response.json();
          }).then(function (data) {
            if (data.responseStatus === 200) {
              items = data.responseData.feed.entries;
            }
  
            return items;
          }).finally(function () {
            lastFetchTask = null;
          });
  
          if (items.length) {
            return items;
          }
  
          return lastFetchTask;
        }
  
      return items;
    }
  };
  
  exports.default = news;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Response = exports.Headers = exports.Request = exports.default = undefined;
  
  var _bluebird = __webpack_require__(66);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _nodeFetch = __webpack_require__(72);
  
  var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
  
  var _config = __webpack_require__(24);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  _nodeFetch2.default.Promise = _bluebird2.default; /**
                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                     *
                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                     *
                                                     * This source code is licensed under the MIT license found in the
                                                     * LICENSE.txt file in the root directory of this source tree.
                                                     */
  
  _nodeFetch.Response.Promise = _bluebird2.default;
  
  function localUrl(url) {
    if (url.startsWith('//')) {
      return 'https:' + url;
    }
  
    if (url.startsWith('http')) {
      return url;
    }
  
    return 'http://' + _config.host + url;
  }
  
  function localFetch(url, options) {
    return (0, _nodeFetch2.default)(localUrl(url), options);
  }
  
  exports.default = localFetch;
  exports.Request = _nodeFetch.Request;
  exports.Headers = _nodeFetch.Headers;
  exports.Response = _nodeFetch.Response;

/***/ },
/* 72 */
/***/ function(module, exports) {

  module.exports = require("node-fetch");

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(61);
  
  var NewsItemType = new _graphql.GraphQLObjectType({
    name: 'NewsItem',
    fields: {
      title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      link: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      author: { type: _graphql.GraphQLString },
      publishedDate: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      contentSnippet: { type: _graphql.GraphQLString }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = NewsItemType;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _fs = __webpack_require__(65);
  
  var _fs2 = _interopRequireDefault(_fs);
  
  var _path = __webpack_require__(9);
  
  var _bluebird = __webpack_require__(66);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _graphql = __webpack_require__(61);
  
  var _IntlMessageType = __webpack_require__(75);
  
  var _IntlMessageType2 = _interopRequireDefault(_IntlMessageType);
  
  var _config = __webpack_require__(24);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // A folder with messages
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var CONTENT_DIR = (0, _path.join)(__dirname, './messages');
  
  var readFile = _bluebird2.default.promisify(_fs2.default.readFile);
  
  var intl = {
    type: new _graphql.GraphQLList(_IntlMessageType2.default),
    args: {
      locale: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    },
    resolve: function resolve(_ref, _ref2) {
      var _this = this;
  
      var request = _ref.request;
      var locale = _ref2.locale;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var localeData;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_config.locales.includes(locale)) {
                  _context.next = 2;
                  break;
                }
  
                throw new Error('Locale \'' + locale + '\' not supported');
  
              case 2:
                localeData = void 0;
                _context.prev = 3;
                _context.next = 6;
                return readFile((0, _path.join)(CONTENT_DIR, locale + '.json'));
  
              case 6:
                localeData = _context.sent;
                _context.next = 13;
                break;
  
              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](3);
  
                if (!(_context.t0.code === 'ENOENT')) {
                  _context.next = 13;
                  break;
                }
  
                throw new Error('Locale \'' + locale + '\' not found');
  
              case 13:
                return _context.abrupt('return', JSON.parse(localeData));
  
              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[3, 9]]);
      }))();
    }
  };
  
  exports.default = intl;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(61);
  
  var IntlMessageType = new _graphql.GraphQLObjectType({
    name: 'IntlMessage',
    fields: {
      id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      defaultMessage: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      message: { type: _graphql.GraphQLString },
      description: { type: _graphql.GraphQLString },
      files: { type: new _graphql.GraphQLList(_graphql.GraphQLString) }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = IntlMessageType;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /* eslint-disable global-require */
  
  // The top-level (parent) route
  exports.default = {
  
    path: '/',
  
    // Keep in mind, routes are evaluated in order
    children: [__webpack_require__(77).default, __webpack_require__(113).default, __webpack_require__(117).default, __webpack_require__(121).default, __webpack_require__(125).default,
  
    // place new routes before...
    __webpack_require__(129).default, __webpack_require__(133).default],
  
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var route;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                route = void 0;
  
                // Execute each child route until one of them return the result
                // TODO: move this logic to the `next` function
  
              case 1:
                _context.next = 3;
                return next();
  
              case 3:
                route = _context.sent;
  
              case 4:
                if (!route) {
                  _context.next = 1;
                  break;
                }
  
              case 5:
  
                // Provide default values for title, description etc.
                route.title = (route.title || 'Untitled Page') + ' - www.reactstarterkit.com';
                route.description = route.description || '';
  
                return _context.abrupt('return', route);
  
              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Home = __webpack_require__(78);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _fetch = __webpack_require__(71);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_Home2.default, {}); /**
                                                      * React Starter Kit (https://www.reactstarterkit.com/)
                                                      *
                                                      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                      *
                                                      * This source code is licensed under the MIT license found in the
                                                      * LICENSE.txt file in the root directory of this source tree.
                                                      */
  
  exports.default = {
  
    path: '/',
  
    action: function action() {
      // const resp = await fetch('/graphql', {
      //   method: 'post',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     query: '{news{title,link,publishedDate,contentSnippet}}',
      //   }),
      //   credentials: 'include',
      // });
      // const { data } = await resp.json();
      //  if (!data || !data.news) throw new Error('Failed to load the news feed.');
      return {
        title: 'React Starter Kit',
        component: _ref
      };
    }
  };

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactIntl = __webpack_require__(21);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(79);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Home = __webpack_require__(109);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _Card = __webpack_require__(111);
  
  var _FlatButton = __webpack_require__(112);
  
  var _FlatButton2 = _interopRequireDefault(_FlatButton);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_Card.Card, {}, void 0, (0, _jsx3.default)(_Card.CardHeader, {
    title: 'URL Avatar',
    subtitle: 'Subtitle',
    avatar: 'images/s1.jpg'
  }), (0, _jsx3.default)(_Card.CardMedia, {
    overlay: (0, _jsx3.default)(_Card.CardTitle, {
      title: 'Overlay title',
      subtitle: 'Overlay subtitle'
    })
  }, void 0, (0, _jsx3.default)('img', {
    src: 'images/1.jpg'
  })), (0, _jsx3.default)(_Card.CardTitle, {
    title: 'Card title',
    subtitle: 'Card subtitle'
  }), (0, _jsx3.default)(_Card.CardText, {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'), (0, _jsx3.default)(_Card.CardActions, {}, void 0, (0, _jsx3.default)(_FlatButton2.default, {
    label: 'Action1'
  }), (0, _jsx3.default)(_FlatButton2.default, {
    label: 'Action2'
  }))); /**
         * React Starter Kit (https://www.reactstarterkit.com/)
         *
         * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE.txt file in the root directory of this source tree.
         */
  
  function Home() {
    return (0, _jsx3.default)(_Layout2.default, {}, void 0, (0, _jsx3.default)('div', {
      className: _Home2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Home2.default.container
    }, void 0, _ref)));
  }
  
  exports.default = (0, _withStyles2.default)(_Home2.default)(Home);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(80);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Header = __webpack_require__(82);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Feedback = __webpack_require__(99);
  
  var _Feedback2 = _interopRequireDefault(_Feedback);
  
  var _Footer = __webpack_require__(102);
  
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
  
  var _ref2 = (0, _jsx3.default)(_Header2.default, {});
  
  var _ref3 = (0, _jsx3.default)(_Footer2.default, {});
  
  function Layout(_ref) {
    var children = _ref.children;
  
    return (0, _jsx3.default)('div', {}, void 0, _ref2, _react2.default.Children.only(children), _ref3);
  }
  
  exports.default = (0, _withStyles2.default)(_Layout2.default)(Layout);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(81);
      var insertCss = __webpack_require__(45);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */html{color:#222;font-weight:100;font-size:1em;font-family:Segoe UI,HelveticaNeue-Light,sans-serif;line-height:1.375}a{color:#0074c2}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:' (' attr(href) ')'}abbr[title]:after{content:' (' attr(title) ')'}a[href^='#']:after,a[href^='javascript:']:after{content:''}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}", ""]);
  
  // exports


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactIntl = __webpack_require__(21);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Header = __webpack_require__(83);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Link = __webpack_require__(85);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _Navigation = __webpack_require__(89);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var _LanguageSwitcher = __webpack_require__(93);
  
  var _LanguageSwitcher2 = _interopRequireDefault(_LanguageSwitcher);
  
  var _logoSmall = __webpack_require__(97);
  
  var _logoSmall2 = _interopRequireDefault(_logoSmall);
  
  var _AppBar = __webpack_require__(98);
  
  var _AppBar2 = _interopRequireDefault(_AppBar);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var messages = (0, _reactIntl.defineMessages)({
    brand: {
      'id': 'header.brand',
      'defaultMessage': 'Your Company Brand'
    },
    bannerTitle: {
      'id': 'header.banner.title',
      'defaultMessage': 'React'
    },
    bannerDesc: {
      'id': 'header.banner.desc',
      'defaultMessage': 'Complex web apps made easy'
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  var _ref = (0, _jsx3.default)(_AppBar2.default, {
    title: 'Add'
  });
  
  function Header() {
  
    return (0, _jsx3.default)('div', {
      className: _Header2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Header2.default.container
    }, void 0, _ref));
  }
  
  exports.default = (0, _reactIntl.injectIntl)((0, _withStyles2.default)(_Header2.default)(Header));

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(84);
      var insertCss = __webpack_require__(45);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, "._3Gi4{background:#fff;color:#fff}._1rGb{margin:0 auto;padding:20px 0;max-width:100%}._19ln{color:#92e5fc;text-decoration:none;font-size:1.75em}._2mix{margin-left:10px}._1zCy{float:right;margin-top:6px}._2Lc2{text-align:center}._2Qzp{margin:0;padding:10px;font-weight:400;font-size:4em;line-height:1em}._3mmk{padding:0;color:hsla(0,0%,100%,.5);font-size:1.25em;margin:0}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_3Gi4",
  	"container": "_1rGb",
  	"brand": "_19ln",
  	"brandTxt": "_2mix",
  	"nav": "_1zCy",
  	"banner": "_2Lc2",
  	"bannerTitle": "_2Qzp",
  	"bannerDesc": "_3mmk"
  };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(5);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(86);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(27);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(28);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(29);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(30);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(31);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(87);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function isLeftClickEvent(event) {
    return event.button === 0;
  }
  
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  
  var Link = function (_Component) {
    (0, _inherits3.default)(Link, _Component);
  
    function Link() {
      var _ref;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, Link);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
  
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }
  
        if (event.defaultPrevented === true) {
          return;
        }
  
        event.preventDefault();
        _history2.default.push(_this.props.to);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;
        var props = (0, _objectWithoutProperties3.default)(_props, ['to', 'children']);
  
        return _react2.default.createElement(
          'a',
          (0, _extends3.default)({ href: to }, props, { onClick: this.handleClick }),
          children
        );
      }
    }]);
    return Link;
  }(_react.Component);
  
  exports.default = Link;

/***/ },
/* 86 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createBrowserHistory = __webpack_require__(88);
  
  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // Navigation manager, e.g. history.push('/home')
  // https://github.com/mjackson/history
  exports.default = (false) && (0, _createBrowserHistory2.default)();

/***/ },
/* 88 */
/***/ function(module, exports) {

  module.exports = require("history/createBrowserHistory");

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactIntl = __webpack_require__(21);
  
  var _classnames = __webpack_require__(90);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Navigation = __webpack_require__(91);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var _Link = __webpack_require__(85);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var messages = (0, _reactIntl.defineMessages)({
    about: {
      'id': 'navigation.about',
      'defaultMessage': 'About'
    },
    contact: {
      'id': 'navigation.contact',
      'defaultMessage': 'Contact'
    },
    login: {
      'id': 'navigation.login',
      'defaultMessage': 'Log in'
    },
    or: {
      'id': 'navigation.separator.or',
      'defaultMessage': 'or'
    },
    signup: {
      'id': 'navigation.signup',
      'defaultMessage': 'Sign up'
    }
  });
  
  function Navigation(_ref) {
    var className = _ref.className;
  
    return (0, _jsx3.default)('div', {
      className: (0, _classnames2.default)(_Navigation2.default.root, className),
      role: 'navigation'
    }, void 0, (0, _jsx3.default)(_Link2.default, {
      className: _Navigation2.default.link,
      to: '/about'
    }, void 0, _react2.default.createElement(_reactIntl.FormattedMessage, messages.about)), (0, _jsx3.default)(_Link2.default, {
      className: _Navigation2.default.link,
      to: '/contact'
    }, void 0, _react2.default.createElement(_reactIntl.FormattedMessage, messages.contact)), (0, _jsx3.default)('span', {
      className: _Navigation2.default.spacer
    }, void 0, ' | '), (0, _jsx3.default)(_Link2.default, {
      className: _Navigation2.default.link,
      to: '/login'
    }, void 0, _react2.default.createElement(_reactIntl.FormattedMessage, messages.login)), (0, _jsx3.default)('span', {
      className: _Navigation2.default.spacer
    }, void 0, _react2.default.createElement(_reactIntl.FormattedMessage, messages.or)), (0, _jsx3.default)(_Link2.default, {
      className: (0, _classnames2.default)(_Navigation2.default.link, _Navigation2.default.highlight),
      to: '/register'
    }, void 0, _react2.default.createElement(_reactIntl.FormattedMessage, messages.signup)));
  }
  
  exports.default = (0, _withStyles2.default)(_Navigation2.default)(Navigation);

/***/ },
/* 90 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(92);
      var insertCss = __webpack_require__(45);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, ".Kev6{margin:0}._1-rh{display:inline-block;padding:3px 8px;text-decoration:none;font-size:1.125em}._1-rh,._1-rh:active,._1-rh:visited{color:hsla(0,0%,100%,.6)}._1-rh:hover,.g6k6{color:#fff}.g6k6{margin-right:8px;margin-left:8px;border-radius:3px;background:rgba(0,0,0,.15)}.g6k6:hover{background:rgba(0,0,0,.3)}._2KA9{color:hsla(0,0%,100%,.3)}", ""]);
  
  // exports
  exports.locals = {
  	"root": "Kev6",
  	"link": "_1-rh",
  	"highlight": "g6k6",
  	"spacer": "_2KA9"
  };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(94);
  
  var _intl = __webpack_require__(95);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function LanguageSwitcher(_ref) {
    var currentLocale = _ref.currentLocale;
    var availableLocales = _ref.availableLocales;
    var setLocale = _ref.setLocale;
  
    var isSelected = function isSelected(locale) {
      return locale === currentLocale;
    };
    var localeDict = {
      'en-US': 'English',
      'cs-CZ': 'Česky'
    };
    var localeName = function localeName(locale) {
      return localeDict[locale] || locale;
    };
    return (0, _jsx3.default)('div', {}, void 0, availableLocales.map(function (locale) {
      return (0, _jsx3.default)('span', {}, locale, isSelected(locale) ? (0, _jsx3.default)('span', {}, void 0, localeName(locale)) : (0, _jsx3.default)('a', {
        href: '?lang=' + locale,
        onClick: function onClick(e) {
          setLocale({ locale: locale });
          e.preventDefault();
        }
      }, void 0, localeName(locale)), ' ');
    }));
  } /* eslint-disable no-shadow */
  
  var mapState = function mapState(state) {
    return {
      availableLocales: state.runtime.availableLocales,
      currentLocale: state.intl.locale
    };
  };
  
  var mapDispatch = {
    setLocale: _intl.setLocale
  };
  
  exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(LanguageSwitcher);

/***/ },
/* 94 */
/***/ function(module, exports) {

  module.exports = require("react-redux");

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  exports.setLocale = setLocale;
  
  var _constants = __webpack_require__(96);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var query = '\n  query ($locale:String!) {\n    intl (locale:$locale) {\n      id\n      message\n    }\n  }\n'; /* eslint-disable import/prefer-default-export */
  
  function setLocale(_ref) {
    var _this = this;
  
    var locale = _ref.locale;
  
    return function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(dispatch, getState, _ref3) {
        var graphqlRequest = _ref3.graphqlRequest;
  
        var _ref4, data, messages, maxAge;
  
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: _constants.SET_LOCALE_START,
                  payload: {
                    locale: locale
                  }
                });
  
                _context.prev = 1;
                _context.next = 4;
                return graphqlRequest(query, { locale: locale });
  
              case 4:
                _ref4 = _context.sent;
                data = _ref4.data;
                messages = data.intl.reduce(function (msgs, msg) {
                  msgs[msg.id] = msg.message; // eslint-disable-line no-param-reassign
                  return msgs;
                }, {});
  
                dispatch({
                  type: _constants.SET_LOCALE_SUCCESS,
                  payload: {
                    locale: locale,
                    messages: messages
                  }
                });
  
                // remember locale for every new request
                if (false) {
                  maxAge = 3650 * 24 * 3600; // 10 years in seconds
  
                  document.cookie = 'lang=' + locale + ';path=/;max-age=' + maxAge;
                }
                _context.next = 15;
                break;
  
              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](1);
  
                dispatch({
                  type: _constants.SET_LOCALE_ERROR,
                  payload: {
                    locale: locale,
                    error: _context.t0
                  }
                });
                return _context.abrupt('return', false);
  
              case 15:
                return _context.abrupt('return', true);
  
              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[1, 11]]);
      }));
  
      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }();
  }

/***/ },
/* 96 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* eslint-disable import/prefer-default-export */
  
  var SET_RUNTIME_VARIABLE = exports.SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
  var SET_LOCALE_START = exports.SET_LOCALE_START = 'SET_LOCALE_START';
  var SET_LOCALE_SUCCESS = exports.SET_LOCALE_SUCCESS = 'SET_LOCALE_SUCCESS';
  var SET_LOCALE_ERROR = exports.SET_LOCALE_ERROR = 'SET_LOCALE_ERROR';

/***/ },
/* 97 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACrRJREFUeNqcWAlQlFcSnosBhmFmBAaVG0RAEBQVUUh2jRKjiKJGEfFE8YisGkw066rrmd2o5bWaaIyaQuMRo/EAiRG8SojxwAMFEQWEkUMYkBlmmHtmu//9f+rtXzhFQlXXPN7r192vX/fX/X4+x/4fF4gHxAcSADnQvwJ6jksThxhz6TU+zU/u4RH8dv/43TCKMUhIkyP9y2cZx+Z3ZPGTh/nThpFKGOFOBAlp5Xyaj+1Vht+Z4O/KMNu7DBPYMZoxDJU4i739xe/96+BIB1epXFtf+7p4x9p7quoKLayZgUxAFuKw1PVJA0NcBn+2JcbFy8/H1K5qLvzHwmuauhoNbRwaZaWpS8+8y5NC+rSiPhPSfOM2f3NY4OwSzjBYLea3bRWlh36dl3hc39JkJBTwnNw9hR8dyZshC4nI4PEFPZg9Zp227Pb6pRkvzx+rhX87gPRARuJQdq+SuUZHmkSjD+duAk9Flh/fn1mweNJ2LpdbiB6UBvSdEzZ94QhQ+Kz58V30mnP47L/1HbX/7D5xb9/xHU0N1yt+PPTV1cwp2/lCx0J59LCpntGx3qVHdl+ljbHSHrd1x2Nc2lsYHyJZnzC3iZce33n7/En2heQhh0nXx67dNThk6ryNPAcHSVn23i04Fz5n6VqryaSu+OnI+jtbsorJ0JiY82C+rG/EnPPjBsS2VZa30l7T0V6zsePILkyEpMwP4PJ4opbShw/p0xlpMoHikivzxy0ztLUqIuYu34iEY5zDNTr2GH4zePUhygpJyQgkEof7rgB/l2GUcc4ePakY0b6pa6dPxQQtrgve3C/Uvzjz/UUun++I9PzHQxdwjk4cLs1L7etobkQZHGcPTxlhFPePZGUnSJp1HdSEk8xdyuKnsi8wMcU/Iv3TJR3NDdU4GZnxWWbbizJFdd5pDWEcpctR5ib53yHr9SwctOsxNspT+NV4v7ANFx1lPXrDjwtJrj4BkrhNX6+2mk3G/PlJ+5BwjHO4xuIXOcncUAZHWXJPQwC2oKtr5XWB2gw4Ur/VOafUoKxd7BOIUOEKJIPrlQeNnx764eFLWUKJzKfl6YPf+89fEYWEY5zDNeRBXtwDJBF7B/RDWbX5Fzro5HJkVYZOe9i1jTmFC22EBLBLOqWgfJfAWSTVKZsUzp69Ah1EYo/ulhaMLVOHRqlraqyG2PKF0FCdSQjLAohRwZoaCONOSyQJwoiFSxRYIVFyRKGpC/qGz14629UvKAEwCE/M6XhT97JdUV1lUL1V+Y1Mmqypr31y64t5Bw1tLUZNvQKFc8Revi6OMnfh+1uPLBR7+UXWXsv92VHaQ+rqGxgk6ukdjDwWo6GtvbaqoOzo3qPPT333ggBbBnDNfFZtE/mOTPIceyx/U9C4aeuEUpl/e01lUX1RQUGP0MiYF2ezT9/4NC0/In35MGd5T+9bK9O3wVqzvqXZaDUarEgwNkHZ0amrKyoCk1ISTJr2lkupfzkFRurlA2OHVOWc3A8HbZcEBI/0Gzl+Zmhqhr/61csHwG8is55PFFrR8PV7Bw/+/MtsBxfXUOWT4oNXP5m85eGeDYU1V87VAKK/J5L3loC3GsJnZabX3bpy9uHeTQ/wSoOSUv1j1+xIDJ40K8pqNmveVjxVq2tedsijYmy9Y0ckqaqe3wtJmTcSMMycOyV+D1SQm4pruWfcw6PbwMBJAWM+ngSyH72++UszAUdUYHoHjJ0ydM4znXLmo7fPgifOGgtz0UCDEOCBRo0+fCl7brnBlHKzqhR4Wpzc5HNhPjV62fptc5/pTekVJhsSjqOXb9iOa3Clc4C3GffgXpSBsmiZKDsadaFO1I02oC1oUyc8DMxcm8Ll8lxv/zNzJRTZRhq19XTJ0BXvWJPDsdksLr19wxVXc87oW5sxLmxhMxanArB24huOw9IWTcM1iD0d8P6Me2CvtXjXulxGHi3bhLpQJ+pGGxj46ExPoavE12LQ11VePNFM9EpWJktayh6pda1NL9C4h3s3/8bUNiG0Qew0JOZsFC/swb0AJSpGHlEROKgTdYMNPky28xgDdMo3pQAJ/tA/hbDQn8pav4RkL5FHr36AMPyhq7ePZjBH19xYzTZM19TAzPEoXtgDe8NQRhetOQd1om6woYyJLx7T6EHanwVsqQSQ3Dl8w76BdLZSHQb+Ri74PBnA0QCB/ZtXfEKyrG84lihO8c51P9CYxPRcquLd64+hUuQB3gm4B/o3Q9SiVcmkTNSBulAn6kYb6BBCmygmdyC/kKnp8TOKlXcgiC0pNypz+s1ckobBCnGTjEE84dzdm5DyWRCohqSfin7FAEeC8jMfWqDdSDhm5pEHeXEP7gUZSpSFMlE26kBdoPMu6kYbaFtEXKIkUJABqC5KPHkjHU67gCdwkEJ3Wgqg+gqEJwF07Hz09ZdlCQfOjfX9YNzE2xuXris/8W0l09SS9RcayCDwxhYA2HMAO5cHZq4Jh2xd0fzoTi6AbQB0uRFwAyoo+N/lTR/xPVSHDrKr5RL3TT46RNKgUI+Yv2+b4B4RPQbioz/GCQjSQxzUAIi+cQ8fGG9QtdaVnzx4wmY2WyFLNVQX4iYXcwUCHhiW5ih184GkKXRyl/eEmukPB3XCROhQNj6F/u7yva9WXQCMayEMMjBlqat3oJC+XglNrqlFit0AjkLoOp9AS+0PWecpcBF7QD/vZK9IQlzpzVqN0tiuaoJqUAPdcKTNajWcivfNIuqkmjbMSDxqLAI6Ky2sVwuPKejQKTiBF/q8KS46/cvMUSfIKxtzND+t97ARsxQ38k7XFlwsx0m/hAlhviMSUxp+v3Hs8uwP/49/7PFr03sOipsGMk1GdZueqI962ihGv43HwiymdTYwG+CFJMPOFAp4BX06FU3qgkUTj2sbX5d4xyeMh67BZtJqbDjGufyMpB/Y/PDse46yoB6LCB3M9ZlJbOOxHp82AgApIz0iB1NdJ7Q8DTRiM0GqgxTXQWBvA3BUx23clxm/+ZtMHFNzRoOOza9vVaIMjnzAUAn76gj9dnv+TgO5PD715oOs0RKIbaGFmiCIW0sObj/gIJZ4IOEY51gPYWoPyNBRlUEs4bPRv7s9P7PBqm1QoBKOxC/Ig04Q8jFigRbIa8Anq5dY9DqKD8fQ/rx+emRXC6s75tEyOLRMK9lJdPeV1FknS77dVg3Z1SYfEBtHwgqkvhCCeVLMqq3/sVnM2qK1i1cUrlmUBWPNkJX/3oNryEO2zh5RQ4ejLJBZxbrCbnmMTASzSdtu0NYrzgMozgBlNVCIK9z6DQj2iBryMYBxCAR63lV4nQNeUc8pVeWz9FEHzq3sFfP+F2n3myYrS+6faX32+KV7/0Eh4LGp7a9fHQeZTLC/8zrtfbtwYL7YyIL7uY3JvrLVWd4rkfkgYlS9vVt/+9qh68tSi4iM6vwY88Gek3FecaMyhNIescweKPh5+YuSV8PhlGTr09W3C66ddyX5SYnqcqEI+8mCwz0V1/Nq4d3YQgS4mfW1h+kg8N3p7vPXj/wA4ZvgCmuJHs9A7LX9EcPYb0zyicUhIMXUlceIL4l8IqHITwx2r5LfnecXK+7I7xFGAo/MREBbWIaTfORB3gkX3THMShhFKjN1cWobq7SZCTLZA9Q/YxjbaxbWr81OZlu74LV2R+F/BRgA2E9xgXp3xzgAAAAASUVORK5CYII="

/***/ },
/* 98 */
/***/ function(module, exports) {

  module.exports = require("material-ui/AppBar");

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Feedback = __webpack_require__(100);
  
  var _Feedback2 = _interopRequireDefault(_Feedback);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Feedback() {
    return (0, _jsx3.default)('div', {
      className: _Feedback2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Feedback2.default.container
    }, void 0, (0, _jsx3.default)('a', {
      className: _Feedback2.default.link,
      href: 'https://gitter.im/kriasoft/react-starter-kit'
    }, void 0, 'Ask a question'), (0, _jsx3.default)('span', {
      className: _Feedback2.default.spacer
    }, void 0, '|'), (0, _jsx3.default)('a', {
      className: _Feedback2.default.link,
      href: 'https://github.com/kriasoft/react-starter-kit/issues/new'
    }, void 0, 'Report an issue')));
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  exports.default = (0, _withStyles2.default)(_Feedback2.default)(Feedback);

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(101);
      var insertCss = __webpack_require__(45);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, "._2NP0{background:#f5f5f5;color:#333}._2AyN{margin:0 auto;padding:20px 8px;max-width:100%;text-align:center;font-size:1.5em}._17M0,._17M0:active,._17M0:hover,._17M0:visited{color:#333;text-decoration:none}._17M0:hover{text-decoration:underline}._2n9Q{padding-right:15px;padding-left:15px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_2NP0",
  	"container": "_2AyN",
  	"link": "_17M0",
  	"spacer": "_2n9Q"
  };

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(27);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(28);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(29);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(30);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(31);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Footer = __webpack_require__(103);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  var _Link = __webpack_require__(85);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _FontIcon = __webpack_require__(105);
  
  var _FontIcon2 = _interopRequireDefault(_FontIcon);
  
  var _BottomNavigation = __webpack_require__(106);
  
  var _Paper = __webpack_require__(107);
  
  var _Paper2 = _interopRequireDefault(_Paper);
  
  var _locationOn = __webpack_require__(108);
  
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
  
  var recentsIcon = (0, _jsx3.default)(_FontIcon2.default, {
    className: 'material-icons'
  }, void 0, 'restore');
  var favoritesIcon = (0, _jsx3.default)(_FontIcon2.default, {
    className: 'material-icons'
  }, void 0, 'favorite');
  var nearbyIcon = (0, _jsx3.default)(_locationOn2.default, {});
  
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
  //export default withStyles(s)(Footer);
  
  var BottomNavigationExampleSimple = function (_React$Component) {
    (0, _inherits3.default)(BottomNavigationExampleSimple, _React$Component);
  
    function BottomNavigationExampleSimple() {
      var _ref;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, BottomNavigationExampleSimple);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BottomNavigationExampleSimple.__proto__ || (0, _getPrototypeOf2.default)(BottomNavigationExampleSimple)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        selectedIndex: 0
      }, _this.select = function (index) {
        return _this.setState({ selectedIndex: index });
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(BottomNavigationExampleSimple, [{
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        return (0, _jsx3.default)(_Paper2.default, {
          zDepth: 1
        }, void 0, (0, _jsx3.default)(_BottomNavigation.BottomNavigation, {
          selectedIndex: this.state.selectedIndex
        }, void 0, (0, _jsx3.default)(_BottomNavigation.BottomNavigationItem, {
          label: 'Nearby',
          icon: nearbyIcon,
          onTouchTap: function onTouchTap() {
            return _this2.select(0);
          }
        }), (0, _jsx3.default)(_BottomNavigation.BottomNavigationItem, {
          label: 'Nearby',
          icon: nearbyIcon,
          onTouchTap: function onTouchTap() {
            return _this2.select(1);
          }
        }), (0, _jsx3.default)(_BottomNavigation.BottomNavigationItem, {
          label: 'Nearby',
          icon: nearbyIcon,
          onTouchTap: function onTouchTap() {
            return _this2.select(2);
          }
        })));
      }
    }]);
    return BottomNavigationExampleSimple;
  }(_react2.default.Component);
  
  exports.default = (0, _withStyles2.default)(_Footer2.default)(BottomNavigationExampleSimple);

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(104);
      var insertCss = __webpack_require__(45);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, "._3Jih{background:#333;color:#fff}.n1bV{margin:0 auto;padding:20px 15px;max-width:100%;text-align:center}._2mr6{color:hsla(0,0%,100%,.5)}._3HO-,._9iT6{color:hsla(0,0%,100%,.3)}._1sUk,._2mr6{padding:2px 5px;font-size:1em}._1sUk,._1sUk:active,._1sUk:visited{color:hsla(0,0%,100%,.6);text-decoration:none}._1sUk:hover{color:#fff}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_3Jih",
  	"container": "n1bV",
  	"text": "_2mr6",
  	"textMuted": "_9iT6 _2mr6",
  	"spacer": "_3HO-",
  	"link": "_1sUk"
  };

/***/ },
/* 105 */
/***/ function(module, exports) {

  module.exports = require("material-ui/FontIcon");

/***/ },
/* 106 */
/***/ function(module, exports) {

  module.exports = require("material-ui/BottomNavigation");

/***/ },
/* 107 */
/***/ function(module, exports) {

  module.exports = require("material-ui/Paper");

/***/ },
/* 108 */
/***/ function(module, exports) {

  module.exports = require("material-ui/svg-icons/communication/location-on");

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(110);
      var insertCss = __webpack_require__(45);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, "._2IMq{padding-left:20px;padding-right:20px}._2Yej{margin:0 auto;padding:0 0 40px;max-width:100%}.oTyG{padding:0}._3Ob1{list-style-type:none;padding-bottom:6px}._1yWV{font-size:1.125em}._1yWV,._21LX{display:block}._2Mwy{font-size:.8em;color:#777}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_2IMq",
  	"container": "_2Yej",
  	"news": "oTyG",
  	"newsItem": "_3Ob1",
  	"newsTitle": "_1yWV",
  	"newsDesc": "_21LX",
  	"publishedDate": "_2Mwy"
  };

/***/ },
/* 111 */
/***/ function(module, exports) {

  module.exports = require("material-ui/Card");

/***/ },
/* 112 */
/***/ function(module, exports) {

  module.exports = require("material-ui/FlatButton");

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Contact = __webpack_require__(114);
  
  var _Contact2 = _interopRequireDefault(_Contact);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var title = 'Contact Us';
  
  var _ref = (0, _jsx3.default)(_Contact2.default, {
    title: title
  });
  
  exports.default = {
  
    path: '/contact',
  
    action: function action() {
      return {
        title: title,
        component: _ref
      };
    }
  };

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(79);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Contact = __webpack_require__(115);
  
  var _Contact2 = _interopRequireDefault(_Contact);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref2 = (0, _jsx3.default)('p', {}, void 0, '...');
  
  function Contact(_ref) {
    var title = _ref.title;
  
    return (0, _jsx3.default)(_Layout2.default, {}, void 0, (0, _jsx3.default)('div', {
      className: _Contact2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Contact2.default.container
    }, void 0, (0, _jsx3.default)('h1', {}, void 0, title), _ref2)));
  }
  
  exports.default = (0, _withStyles2.default)(_Contact2.default)(Contact);

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(116);
      var insertCss = __webpack_require__(45);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, "._1G9o{padding-left:20px;padding-right:20px}._2TnC{margin:0 auto;padding:0 0 40px;max-width:100%}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_1G9o",
  	"container": "_2TnC"
  };

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Login = __webpack_require__(118);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var title = 'Log In';
  
  var _ref = (0, _jsx3.default)(_Login2.default, {
    title: title
  });
  
  exports.default = {
  
    path: '/login',
  
    action: function action() {
      return {
        title: title,
        component: _ref
      };
    }
  };

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(79);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Login = __webpack_require__(119);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref2 = (0, _jsx3.default)('path', {
    d: 'M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z'
  });
  
  var _ref3 = (0, _jsx3.default)('span', {}, void 0, 'Log in with Facebook');
  
  var _ref4 = (0, _jsx3.default)('span', {}, void 0, 'Log in with Google');
  
  var _ref5 = (0, _jsx3.default)('span', {}, void 0, 'Log in with Twitter');
  
  function Login(_ref) {
    var title = _ref.title;
  
    return (0, _jsx3.default)(_Layout2.default, {}, void 0, (0, _jsx3.default)('div', {
      className: _Login2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Login2.default.container
    }, void 0, (0, _jsx3.default)('h1', {}, void 0, title), (0, _jsx3.default)('p', {
      className: _Login2.default.lead
    }, void 0, 'Log in with your username or company email address.'), (0, _jsx3.default)('div', {
      className: _Login2.default.formGroup
    }, void 0, (0, _jsx3.default)('a', {
      className: _Login2.default.facebook,
      href: '/login/facebook'
    }, void 0, (0, _jsx3.default)('svg', {
      className: _Login2.default.icon,
      width: '30',
      height: '30',
      viewBox: '0 0 30 30',
      xmlns: 'http://www.w3.org/2000/svg'
    }, void 0, _ref2), _ref3)), (0, _jsx3.default)('div', {
      className: _Login2.default.formGroup
    }, void 0, (0, _jsx3.default)('a', {
      className: _Login2.default.google,
      href: '/login/google'
    }, void 0, (0, _jsx3.default)('svg', {
      className: _Login2.default.icon,
      width: '30',
      height: '30',
      viewBox: '0 0 30 30',
      xmlns: 'http://www.w3.org/2000/svg'
    }, void 0, (0, _jsx3.default)('path', {
      d: 'M30 13h-4V9h-2v4h-4v2h4v4h2v-4h4m-15 2s-2-1.15-2-2c0 0-.5-1.828 1-3 ' + '1.537-1.2 3-3.035 3-5 0-2.336-1.046-5-3-6h3l2.387-1H10C5.835 0 2 3.345 2 7c0 ' + '3.735 2.85 6.56 7.086 6.56.295 0 .58-.006.86-.025-.273.526-.47 1.12-.47 1.735 ' + '0 1.037.817 2.042 1.523 2.73H9c-5.16 0-9 2.593-9 6 0 3.355 4.87 6 10.03 6 5.882 ' + '0 9.97-3 9.97-7 0-2.69-2.545-4.264-5-6zm-4-4c-2.395 0-5.587-2.857-6-6C4.587 ' + '3.856 6.607.93 9 1c2.394.07 4.603 2.908 5.017 6.052C14.43 10.195 13 13 11 ' + '13zm-1 15c-3.566 0-7-1.29-7-4 0-2.658 3.434-5.038 7-5 .832.01 2 0 2 0 1 0 ' + '2.88.88 4 2 1 1 1 2.674 1 3 0 3-1.986 4-7 4z'
    })), _ref4)), (0, _jsx3.default)('div', {
      className: _Login2.default.formGroup
    }, void 0, (0, _jsx3.default)('a', {
      className: _Login2.default.twitter,
      href: '/login/twitter'
    }, void 0, (0, _jsx3.default)('svg', {
      className: _Login2.default.icon,
      width: '30',
      height: '30',
      viewBox: '0 0 30 30',
      xmlns: 'http://www.w3.org/2000/svg'
    }, void 0, (0, _jsx3.default)('path', {
      d: 'M30 6.708c-1.105.49-2.756 1.143-4 1.292 1.273-.762 2.54-2.56 ' + '3-4-.97.577-2.087 1.355-3.227 1.773L25 5c-1.12-1.197-2.23-2-4-2-3.398 0-6 ' + '2.602-6 6 0 .4.047.7.11.956L15 10C9 10 5.034 8.724 2 5c-.53.908-1 1.872-1 ' + '3 0 2.136 1.348 3.894 3 5-1.01-.033-2.17-.542-3-1 0 2.98 4.186 6.432 7 7-1 ' + '1-4.623.074-5 0 .784 2.447 3.31 3.95 6 4-2.105 1.648-4.647 2.51-7.53 2.51-.5 ' + '0-.988-.03-1.47-.084C2.723 27.17 6.523 28 10 28c11.322 0 17-8.867 17-17 ' + '0-.268.008-.736 0-1 1.2-.868 2.172-2.058 3-3.292z'
    })), _ref5)), (0, _jsx3.default)('strong', {
      className: _Login2.default.lineThrough
    }, void 0, 'OR'), (0, _jsx3.default)('form', {
      method: 'post'
    }, void 0, (0, _jsx3.default)('div', {
      className: _Login2.default.formGroup
    }, void 0, (0, _jsx3.default)('label', {
      className: _Login2.default.label,
      htmlFor: 'usernameOrEmail'
    }, void 0, 'Username or email address:'), (0, _jsx3.default)('input', {
      className: _Login2.default.input,
      id: 'usernameOrEmail',
      type: 'text',
      name: 'usernameOrEmail',
      autoFocus: true
    })), (0, _jsx3.default)('div', {
      className: _Login2.default.formGroup
    }, void 0, (0, _jsx3.default)('label', {
      className: _Login2.default.label,
      htmlFor: 'password'
    }, void 0, 'Password:'), (0, _jsx3.default)('input', {
      className: _Login2.default.input,
      id: 'password',
      type: 'password',
      name: 'password'
    })), (0, _jsx3.default)('div', {
      className: _Login2.default.formGroup
    }, void 0, (0, _jsx3.default)('button', {
      className: _Login2.default.button,
      type: 'submit'
    }, void 0, 'Log in'))))));
  }
  
  exports.default = (0, _withStyles2.default)(_Login2.default)(Login);

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(120);
      var insertCss = __webpack_require__(45);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, ".rQNQ{padding-left:20px;padding-right:20px}._2BVu{margin:0 auto;padding:0 0 40px;max-width:380px}._1mJB{font-size:1.25em}._25Ti{margin-bottom:15px}._2G0a{display:inline-block;margin-bottom:5px;max-width:100%;font-weight:700}._1bTr{display:block;box-sizing:border-box;padding:10px 16px;width:100%;height:46px;outline:0;border:1px solid #ccc;border-radius:0;background:#fff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);color:#616161;font-size:18px;line-height:1.3333333;-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}._1bTr:focus{border-color:#0074c2;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(0,116,194,.6)}._11e1{display:block;box-sizing:border-box;margin:0;padding:10px 16px;width:100%;outline:0;border:1px solid #373277;border-radius:0;background:#373277;color:#fff;text-align:center;text-decoration:none;font-size:18px;line-height:1.3333333;cursor:pointer}._11e1:hover{background:rgba(54,50,119,.8)}._11e1:focus{border-color:#0074c2;box-shadow:0 0 8px rgba(0,116,194,.6)}._2nZ7{border-color:#3b5998;background:#3b5998}._2nZ7:hover{background:#2d4373}._23Hc{border-color:#dd4b39;background:#dd4b39}._23Hc:hover{background:#c23321}.AJde{border-color:#55acee;background:#55acee}.AJde:hover{background:#2795e9}._34kk{display:inline-block;margin:-2px 12px -2px 0;width:20px;height:20px;vertical-align:middle;fill:currentColor}.UpbG{position:relative;z-index:1;display:block;margin-bottom:15px;width:100%;color:#757575;text-align:center;font-size:80%}.UpbG:before{top:50%;left:50%;z-index:-1;margin-top:-5px;margin-left:-20px;width:40px;height:10px;background-color:#fff}.UpbG:after,.UpbG:before{position:absolute;content:''}.UpbG:after{top:49%;z-index:-2;display:block;width:100%;border-bottom:1px solid #ddd}", ""]);
  
  // exports
  exports.locals = {
  	"root": "rQNQ",
  	"container": "_2BVu",
  	"lead": "_1mJB",
  	"formGroup": "_25Ti",
  	"label": "_2G0a",
  	"input": "_1bTr",
  	"button": "_11e1",
  	"facebook": "_2nZ7 _11e1",
  	"google": "_23Hc _11e1",
  	"twitter": "AJde _11e1",
  	"icon": "_34kk",
  	"lineThrough": "UpbG"
  };

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Register = __webpack_require__(122);
  
  var _Register2 = _interopRequireDefault(_Register);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var title = 'New User Registration';
  
  var _ref = (0, _jsx3.default)(_Register2.default, {
    title: title
  });
  
  exports.default = {
  
    path: '/register',
  
    action: function action() {
      return {
        title: title,
        component: _ref
      };
    }
  };

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(79);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Register = __webpack_require__(123);
  
  var _Register2 = _interopRequireDefault(_Register);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref2 = (0, _jsx3.default)('p', {}, void 0, '...');
  
  function Register(_ref) {
    var title = _ref.title;
  
    return (0, _jsx3.default)(_Layout2.default, {}, void 0, (0, _jsx3.default)('div', {
      className: _Register2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Register2.default.container
    }, void 0, (0, _jsx3.default)('h1', {}, void 0, title), _ref2)));
  }
  
  exports.default = (0, _withStyles2.default)(_Register2.default)(Register);

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(124);
      var insertCss = __webpack_require__(45);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, "._1hu0{padding-left:20px;padding-right:20px}.OjhI{margin:0 auto;padding:0 0 40px;max-width:100%}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_1hu0",
  	"container": "OjhI"
  };

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Admin = __webpack_require__(126);
  
  var _Admin2 = _interopRequireDefault(_Admin);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var title = 'Admin Page';
  var isAdmin = false;
  
  var _ref = (0, _jsx3.default)(_Admin2.default, {
    title: title
  });
  
  exports.default = {
  
    path: '/admin',
  
    action: function action() {
      if (!isAdmin) {
        return { redirect: '/login' };
      }
  
      return {
        title: title,
        component: _ref
      };
    }
  };

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(79);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Admin = __webpack_require__(127);
  
  var _Admin2 = _interopRequireDefault(_Admin);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref2 = (0, _jsx3.default)('p', {}, void 0, '...');
  
  function Admin(_ref) {
    var title = _ref.title;
  
    return (0, _jsx3.default)(_Layout2.default, {}, void 0, (0, _jsx3.default)('div', {
      className: _Admin2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Admin2.default.container
    }, void 0, (0, _jsx3.default)('h1', {}, void 0, title), _ref2)));
  }
  
  exports.default = (0, _withStyles2.default)(_Admin2.default)(Admin);

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(128);
      var insertCss = __webpack_require__(45);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, ".P91v{padding-left:20px;padding-right:20px}._301u{margin:0 auto;padding:0 0 40px;max-width:100%}", ""]);
  
  // exports
  exports.locals = {
  	"root": "P91v",
  	"container": "_301u"
  };

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _stringify = __webpack_require__(47);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Content = __webpack_require__(130);
  
  var _Content2 = _interopRequireDefault(_Content);
  
  var _fetch = __webpack_require__(71);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '*',
  
    action: function action(_ref) {
      var _this = this;
  
      var path = _ref.path;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var resp, _ref2, data;
  
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('/graphql', {
                  method: 'post',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({
                    query: '{content(path:"' + path + '"){path,title,content,component}}'
                  }),
                  credentials: 'include'
                });
  
              case 2:
                resp = _context.sent;
  
                if (!(resp.status !== 200)) {
                  _context.next = 5;
                  break;
                }
  
                throw new Error(resp.statusText);
  
              case 5:
                _context.next = 7;
                return resp.json();
  
              case 7:
                _ref2 = _context.sent;
                data = _ref2.data;
  
                if (!(!data || !data.content)) {
                  _context.next = 11;
                  break;
                }
  
                return _context.abrupt('return', undefined);
  
              case 11:
                return _context.abrupt('return', {
                  title: data.content.title,
                  component: _react2.default.createElement(_Content2.default, data.content)
                });
  
              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(79);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Content = __webpack_require__(131);
  
  var _Content2 = _interopRequireDefault(_Content);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function Content(_ref) {
    var path = _ref.path;
    var title = _ref.title;
    var content = _ref.content;
  
    return (0, _jsx3.default)(_Layout2.default, {}, void 0, (0, _jsx3.default)('div', {
      className: _Content2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Content2.default.container
    }, void 0, title && path !== '/' && (0, _jsx3.default)('h1', {}, void 0, title), (0, _jsx3.default)('div', {
      dangerouslySetInnerHTML: { __html: content }
    }))));
  }
  
  exports.default = (0, _withStyles2.default)(_Content2.default)(Content);

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(132);
      var insertCss = __webpack_require__(45);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, ".aWU5{padding-left:20px;padding-right:20px}._2OJN{margin:0 auto;padding:0 0 40px;max-width:100%}", ""]);
  
  // exports
  exports.locals = {
  	"root": "aWU5",
  	"container": "_2OJN"
  };

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _NotFound = __webpack_require__(134);
  
  var _NotFound2 = _interopRequireDefault(_NotFound);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var title = 'Page Not Found';
  
  var _ref = (0, _jsx3.default)(_NotFound2.default, {
    title: title
  });
  
  exports.default = {
  
    path: '*',
  
    action: function action() {
      return {
        title: title,
        component: _ref,
        status: 404
      };
    }
  };

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(79);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _NotFound = __webpack_require__(135);
  
  var _NotFound2 = _interopRequireDefault(_NotFound);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref2 = (0, _jsx3.default)('p', {}, void 0, 'Sorry, the page you were trying to view does not exist.');
  
  function NotFound(_ref) {
    var title = _ref.title;
  
    return (0, _jsx3.default)(_Layout2.default, {
      full: false
    }, void 0, (0, _jsx3.default)('div', {
      className: _NotFound2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _NotFound2.default.container
    }, void 0, (0, _jsx3.default)('h1', {}, void 0, title), _ref2)));
  }
  
  exports.default = (0, _withStyles2.default)(_NotFound2.default)(NotFound);

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(136);
      var insertCss = __webpack_require__(45);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, "._3whb{padding-left:20px;padding-right:20px}._1BOH{margin:0 auto;padding:0 0 40px;max-width:100%}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_3whb",
  	"container": "_1BOH"
  };

/***/ },
/* 137 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = configureStore;
  
  var _redux = __webpack_require__(139);
  
  var _reduxThunk = __webpack_require__(140);
  
  var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
  
  var _reducers = __webpack_require__(141);
  
  var _reducers2 = _interopRequireDefault(_reducers);
  
  var _createHelpers = __webpack_require__(145);
  
  var _createHelpers2 = _interopRequireDefault(_createHelpers);
  
  var _logger = __webpack_require__(146);
  
  var _logger2 = _interopRequireDefault(_logger);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function configureStore(initialState, helpersConfig) {
    var helpers = (0, _createHelpers2.default)(helpersConfig);
    var middleware = [_reduxThunk2.default.withExtraArgument(helpers)];
  
    var enhancer = void 0;
  
    if (false) {
      middleware.push((0, _logger2.default)());
  
      // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
      var devToolsExtension = function devToolsExtension(f) {
        return f;
      };
      if (process.env.BROWSER && window.devToolsExtension) {
        devToolsExtension = window.devToolsExtension();
      }
  
      enhancer = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware), devToolsExtension);
    } else {
      enhancer = _redux.applyMiddleware.apply(undefined, middleware);
    }
  
    // See https://github.com/rackt/redux/releases/tag/v3.1.0
    var store = (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
  
    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (false) {
      module.hot.accept('../reducers', function () {
        return store.replaceReducer(require('../reducers').default);
      } // eslint-disable-line global-require
      );
    }
  
    return store;
  }

/***/ },
/* 139 */
/***/ function(module, exports) {

  module.exports = require("redux");

/***/ },
/* 140 */
/***/ function(module, exports) {

  module.exports = require("redux-thunk");

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _redux = __webpack_require__(139);
  
  var _runtime = __webpack_require__(142);
  
  var _runtime2 = _interopRequireDefault(_runtime);
  
  var _intl = __webpack_require__(144);
  
  var _intl2 = _interopRequireDefault(_intl);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = (0, _redux.combineReducers)({
    runtime: _runtime2.default,
    intl: _intl2.default
  });

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty2 = __webpack_require__(143);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _extends3 = __webpack_require__(5);
  
  var _extends4 = _interopRequireDefault(_extends3);
  
  exports.default = runtime;
  
  var _constants = __webpack_require__(96);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function runtime() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];
  
    switch (action.type) {
      case _constants.SET_RUNTIME_VARIABLE:
        return (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, action.payload.name, action.payload.value));
      default:
        return state;
    }
  }

/***/ },
/* 143 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/defineProperty");

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty2 = __webpack_require__(143);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _extends3 = __webpack_require__(5);
  
  var _extends4 = _interopRequireDefault(_extends3);
  
  exports.default = intl;
  
  var _constants = __webpack_require__(96);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function intl() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];
  
    if (state === null) {
      return {
        initialNow: Date.now()
      };
    }
  
    switch (action.type) {
      case _constants.SET_LOCALE_START:
        {
          var locale = state[action.payload.locale] ? action.payload.locale : state.locale;
          return (0, _extends4.default)({}, state, {
            locale: locale,
            newLocale: action.payload.locale
          });
        }
  
      case _constants.SET_LOCALE_SUCCESS:
        {
          return (0, _extends4.default)({}, state, {
            locale: action.payload.locale,
            newLocale: null,
            messages: (0, _extends4.default)({}, state.messages, (0, _defineProperty3.default)({}, action.payload.locale, action.payload.messages))
          });
        }
  
      case _constants.SET_LOCALE_ERROR:
        {
          return (0, _extends4.default)({}, state, {
            newLocale: null
          });
        }
  
      default:
        {
          return state;
        }
    }
  }

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(5);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _stringify = __webpack_require__(47);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  exports.default = createHelpers;
  
  var _fetch = __webpack_require__(71);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function createGraphqlRequest(fetchKnowingCookie) {
    return function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(query, variables) {
        var fetchConfig, resp;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetchConfig = {
                  method: 'post',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({ query: query, variables: variables }),
                  credentials: 'include'
                };
                _context.next = 3;
                return fetchKnowingCookie('/graphql', fetchConfig);
  
              case 3:
                resp = _context.sent;
  
                if (!(resp.status !== 200)) {
                  _context.next = 6;
                  break;
                }
  
                throw new Error(resp.statusText);
  
              case 6:
                _context.next = 8;
                return resp.json();
  
              case 8:
                return _context.abrupt('return', _context.sent);
  
              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
  
      function graphqlRequest(_x, _x2) {
        return _ref.apply(this, arguments);
      }
  
      return graphqlRequest;
    }();
  }
  
  function createFetchKnowingCookie(_ref2) {
    var cookie = _ref2.cookie;
  
    if (true) {
      return function (url) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
        var isLocalUrl = /^\/($|[^\/])/.test(url);
  
        // pass cookie only for itself.
        // We can't know cookies for other sites BTW
        if (isLocalUrl && options.credentials === 'include') {
          var headers = (0, _extends3.default)({}, options.headers, {
            cookie: cookie
          });
          return (0, _fetch2.default)(url, (0, _extends3.default)({}, options, { headers: headers }));
        }
  
        return (0, _fetch2.default)(url, options);
      };
    }
  
    return _fetch2.default;
  }
  
  function createHelpers(config) {
    var fetchKnowingCookie = createFetchKnowingCookie(config);
    var graphqlRequest = createGraphqlRequest(fetchKnowingCookie);
  
    return {
      fetch: fetchKnowingCookie,
      graphqlRequest: graphqlRequest,
      history: config.history
    };
  }

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createLogger;
  
  var _util = __webpack_require__(147);
  
  // Server side redux action logger
  function createLogger() {
    return function (store) {
      return function (next) {
        return function (action) {
          // eslint-disable-line no-unused-vars
          var formattedPayload = (0, _util.inspect)(action.payload, {
            colors: true
          });
          console.log(' * ' + action.type + ': ' + formattedPayload); // eslint-disable-line no-console
          return next(action);
        };
      };
    };
  }

/***/ },
/* 147 */
/***/ function(module, exports) {

  module.exports = require("util");

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setRuntimeVariable = setRuntimeVariable;
  
  var _constants = __webpack_require__(96);
  
  function setRuntimeVariable(_ref) {
    var name = _ref.name;
    var value = _ref.value;
  
    return {
      type: _constants.SET_RUNTIME_VARIABLE,
      payload: {
        name: name,
        value: value
      }
    };
  } /* eslint-disable import/prefer-default-export */

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map