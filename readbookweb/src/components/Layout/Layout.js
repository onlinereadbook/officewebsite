/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import { connect } from 'react-redux';
import Menu from '../../components/Menu'
import MenuEvent from '../../components/MenuEvent'

//function Layout({ children }) {
class Layout extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    // console.log(this.props);
  }
  render() {
    const children = this.props.children;

    return (
      <div>
        <Header />
        {this.props.common.openMenuEvent &&
          <MenuEvent></MenuEvent>}

        {!this.props.common.openMenuEvent &&
          <Menu></Menu>}

        {React.Children.only(children)}
        <Footer />
      </div>
    );
  }
}
Layout.propTypes = {
  children: PropTypes.element.isRequired,
};


const mapState = (state) => ({

  common: state.common

});
const mapDispatch = {

};

export default connect(mapState)(withStyles(s)(Layout));
