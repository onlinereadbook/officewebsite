/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './MatchWork.css';
import Menu from '../../components/Menu'
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import { setLeftmenu } from '../../actions/common';
import { connect } from 'react-redux';


function MatchWork({ path, title, content }) {
    return (
        <Layout>
            <div className={s.root}>
                <div className={s.container}>
                    {title && path !== '/' && <h1>{title}</h1>}
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                    <Menu open={'false'} />

                </div>
            </div>
        </Layout>
    );
}

MatchWork.propTypes = {
    // path: PropTypes.string.isRequired,
    // content: PropTypes.string.isRequired,
    // title: PropTypes.string,
};

export default withStyles(s)(MatchWork);
