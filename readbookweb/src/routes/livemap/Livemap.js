/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { FormattedRelative } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Livemap.css';





function Livemap({news}) {
    return (
        <Layout  >
            <div className={s.root}>
                <div className={s.container}>
                    <div id="map"></div>
                </div>
            </div>
        </Layout >
    );
}

Livemap.propTypes = {

};

export default withStyles(s)(Livemap);
