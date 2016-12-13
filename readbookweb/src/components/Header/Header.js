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
import { setLeftmenu } from '../../actions/common';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import TopicIcon from 'material-ui/svg-icons/action/toc';
import ChromeIcon from 'material-ui/svg-icons/action/chrome-reader-mode';

import DateIcon from 'material-ui/svg-icons/action/date-range';
import PeopleIcon from 'material-ui/svg-icons/action/assignment-ind';
import { bindActionCreators } from 'redux'






class Header extends Component {

    render() {
        const { test } = this.props;
        const {OpenAbout } = this;
        const MenuList = (props) => (
            <IconMenu
                {...props}
                iconButtonElement={
                    <IconButton >
                        <TopicIcon color="#fff" />  </IconButton>
                }
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                <MenuItem primaryText="探索讀書會主題" leftIcon={<ChromeIcon />} onTouchTap={this.OpenAbout} />
                <MenuItem primaryText="觀看活動清單" leftIcon={<DateIcon />} />
                <MenuItem primaryText="主講介紹" leftIcon={<PeopleIcon />} />
            </IconMenu>
        );
        return (
            <div style={{
                marginBottom: '2vh', width: '100%'
            }}>
                <AppBar iconElementLeft={<MenuList />} title="線上讀書會" />

            </div>
        )
    }

    OpenAbout() {

        //let temp = this;
        console.log(this);
        // setLeftmenu{


        // }
    }

    handleChange() {
        const { setTest } = this.props;
        setTest({
            name: 'polo'
        })
    }
}

// <h2>{this.props.test}</h2>
// <button onClick={this.handleChange.bind(this)}>change</button>

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
    test: state.test,
    common: state.common

});
const mapDispatch = {
    setTest,
    setLeftmenu
};



export default connect(mapState, mapDispatch)(injectIntl(withStyles(s)(Header)));
