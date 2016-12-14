/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { IntlProvider } from 'react-intl';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import grayBlue from './mui-themes/grayBlue'



injectTapEventPlugin();

const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: PropTypes.func.isRequired,
  // Integrate Redux
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};
const muiTheme = getMuiTheme({
  palette: {
    textColor: 'cyan500',
  },
  appBar: {
    height: 50,
  },
});

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
class App extends React.Component {

  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = ContextType;

  getChildContext() {
    return this.props.context;
  }

  componentDidMount() {
    const store = this.props.context && this.props.context.store;
    if (store) {
      this.unsubscribe = store.subscribe(() => {
        const state = store.getState();
        const newIntl = state.intl;
        if (this.intl !== newIntl) {
          this.intl = newIntl;
          console.log('Intl changed'); // eslint-disable-line no-console
          this.forceUpdate();
        }
      });
    }
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    const store = this.props.context && this.props.context.store;
    const state = store && store.getState();
    this.intl = (state && state.intl) || {};
    const { initialNow, locale, messages } = this.intl;
    const localeMessages = (messages && messages[locale]) || {};
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(grayBlue)}>

        <IntlProvider
          initialNow={initialNow}
          locale={locale}
          messages={localeMessages}
          defaultLocale="en-US"
          >
          {React.Children.only(this.props.children)}
        </IntlProvider>
      </MuiThemeProvider>

    );
  }

}

export default App;
