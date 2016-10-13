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
import { cyan500, cyan700,
    pinkA200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


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
    const muiTheme = getMuiTheme({
        palette: {
            primary1Color: cyan500,
            primary2Color: cyan700,
            primary3Color: grey400,
            accent1Color: pinkA200,
            accent2Color: grey100,
            accent3Color: grey500,
            textColor: darkBlack,
            alternateTextColor: white,
            canvasColor: white,
            borderColor: grey300,
            disabledColor: fade(darkBlack, 0.3),
            pickerHeaderColor: cyan500,
            clockCircleColor: fade(darkBlack, 0.07),
            shadowColor: fullBlack,
        },
          appBar: {
              height: 50,
          },
    });

      return (
      <MuiThemeProvider >

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
