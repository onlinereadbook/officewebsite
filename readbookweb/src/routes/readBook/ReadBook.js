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
import Drawer from 'material-ui/Drawer';
import ActionStoreIcon from 'material-ui/svg-icons/action/store';
import ActionSearchIcon from 'material-ui/svg-icons/action/search';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
//import MenuData from './MenuData';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';



const styles = {
    button: {
        margin: 12,
    },
    exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
    avatar: {
        margin: 5
    }
};



//class ReadBook extends Component {
    function ReadBook({showdata}){
    console.log(showdata);
    return (
                 <Layout name="polo">
                    <div className={s.root}>
                        <div className={s.container}>
                        <Card>
                       
                        </Card>
                          {showdata.bookname}
                                                </div>
                    </div>
                </Layout>
     )
}
 



export default withStyles(s)(ReadBook);
