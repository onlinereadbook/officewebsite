/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes, Component } from 'react';
import { FormattedRelative } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './ReadBook.css';
//import MenuData from './MenuData';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

import { connect } from 'react-redux';


class ReadBook extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        //        console.log(this.props);
    }
    render() {

        return (
            <div>
                <Layout name="polo">
                    <div className={s.root}>
                        <div className={s.container}>
                            Larval

                        </div>
                    </div>
                </Layout>
            </div >)
    }
}

// Home.propTypes = {

// };


const mapState = (state) => ({



});
const mapDispatch = {

};



export default connect(mapState)(withStyles(s)(ReadBook));
