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
import s from './Home.css';
//import MenuData from './MenuData';
import ActionStoreIcon from 'material-ui/svg-icons/action/store';
import ActionSearchIcon from 'material-ui/svg-icons/action/search';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux';
const styles = {
    button: { margin: 12 },
    Card: { marginBotton: 10 }
}


class Home extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        //        console.log(this.props);
    }

    OpenAbout = () => {
        // const { setLeftmenu } = this.props;
        console.log('ttest');
        // setLeftmenu({
        //     openMenu: !this.props.common.openMenu,
        //     openMenuEvent: false
        // });

    }
    render() {
        const { common } = this.props;
        const {OpenAbout} = this;

        return (
            <div>
                <Layout name="polo">
                    <div className={s.root}>
                        <div className={s.container}>

                            <Card style={styles.Card}>
                                <CardHeader
                                    title="歡迎來到讀書會"
                                    subtitle="由"
                                    avatar={"/images/logo.png"}
                                    />
                                <CardMedia
                                    overlay={<CardTitle title="這不是一個實體的讀書會,但你會愛上他" subtitle="是透過Zoom線上會議軟體所進行的讀書會,而你可以在任何地點,只要可以上網有安裝Zoom軟體,都可以一起來享受學習的樂趣" />}
                                    >
                                    <img src={"/images/1.jpg"} />
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
            </div >)
    }
}

// Home.propTypes = {

// };


const mapState = (state) => ({

    common: state.common

});
const mapDispatch = {

};



export default connect(mapState)(withStyles(s)(Home));
