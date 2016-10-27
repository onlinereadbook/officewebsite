/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import LanguageSwitcher from '../LanguageSwitcher';
import logoUrl from './logo-small.png';
import AppBar from 'material-ui/AppBar';

import { connect } from 'react-redux';
import { setTest } from '../../actions/test';
import IconMenuExampleSimple from "./iconmenu";




class Header extends Component {
    render() {
        const { test } = this.props;

        return (
            <IconMenuExampleSimple />

            // <AppBar
            //     title="Title"
            //     iconClassNameRight="muidocs-icon-navigation-expand-more"
            //     />
            // <div>
            //     <h2>{this.props.test}</h2>
            //     <button onClick={this.handleChange.bind(this)}>change</button>
            // </div>
        )
    }
    handleChange() {
        const { setTest } = this.props;
        setTest({
            name: 'polo'
        })
    }
}


//
// const messages = defineMessages({
//   brand: {
//     id: 'header.brand',
//     defaultMessage: 'Your Company Brand',
//     description: 'Brand name displayed in header',
//   },
//   bannerTitle: {
//     id: 'header.banner.title',
//     defaultMessage: 'React',
//     description: 'Title in page header',
//   },
//   bannerDesc: {
//     id: 'header.banner.desc',
//     defaultMessage: 'Complex web apps made easy',
//     description: 'Description in header',
//   },
// });
//
// function Header() {
//
//   return (
//     <div className={s.root}>
//       <div className={s.container}>
//         <AppBar title="My AppBar" />
//
//
//       </div>
//     </div>
//   );
// }
//

const mapState = (state) => ({
    test: state.test
});
const mapDispatch = {
    setTest
};



export default connect(mapState, mapDispatch)(injectIntl(withStyles(s)(Header)));
