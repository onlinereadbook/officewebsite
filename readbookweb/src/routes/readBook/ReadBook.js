/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes, Component } from 'react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';

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
import { setLeftmenu } from '../../actions/common';

import { connect } from 'react-redux';


const styles = {
    button: {
        margin: 12,
    },
    avatar: {
        margin: 5
    }
};



class ReadBook extends Component {
    ///    function ReadBook({showdata}){
    constructor(props) {
        super(props);

        this.props = props;
    }


    OpenAbout = () => {
        const { setLeftmenu } = this.props;
        console.log('ttest');
        setLeftmenu({
            openMenu: !this.props.common.openMenu,
            openMenuEvent: false
        });

    }


    render() {
        const showdata = this.props.showdata;
        const {OpenAbout} = this;
        return (
            <Layout name="polo">
                <div className={s.root}>
                    <div className={s.container}>
                        <Card>
                            <CardHeader
                                title={showdata.title}
                                subtitle={showdata.subtitle}
                                avatar={"/" + showdata.icon}
                                />
                            <CardMedia
                                overlay={<CardTitle title="這不是一個實體的讀書會,但你會愛上他" subtitle="是透過Zoom線上會議軟體所進行的讀書會,而你可以在任何地點,只要可以上網有安裝Zoom軟體,都可以一起來享受學習的樂趣" />}
                                >
                                <img src={"/" + showdata.mainphoto} key={showdata.mainphoto} />
                            </CardMedia>
                            <CardTitle title="再也不是一個人讀書" subtitle="線上讀書會 讓在學習知識的路上不孤單,可以快速攻略並藉由線上會議交談與主題探索發現,原來學習只要找對同好 一切是如此的順暢" />

                            <CardText>

                            </CardText>
                            <CardActions>
                                <RaisedButton
                                    label="更了解線上讀書會"
                                    labelPosition="before"
                                    primary={true}
                                    icon={<ActionStoreIcon />}
                                    style={styles.button}
                                    />
                                <RaisedButton
                                    label="想要再探索看看還有什麼讀書會"
                                    labelPosition="before"
                                    primary={true}
                                    icon={<ActionSearchIcon />}
                                    style={styles.button}
                                    onTouchTap={() => OpenAbout()}
                                    />


                            </CardActions>
                        </Card>

                    </div>
                </div>
            </Layout>
        )
    }
}


const mapState = (state) => ({
    common: state.common
});
const mapDispatch = {
    setLeftmenu
};

export default connect(mapState, mapDispatch)(injectIntl(withStyles(s)(ReadBook)));

