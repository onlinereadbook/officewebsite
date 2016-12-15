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

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import ActionStoreIcon from 'material-ui/svg-icons/action/store';
import ActionSearchIcon from 'material-ui/svg-icons/action/search';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import Avatar from 'material-ui/Avatar';
import { setLeftmenu } from '../../actions/common';
import { connect } from 'react-redux';

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


class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            IsOpenData: false,
            IsOpenInfo: false,
            AssignData: {
                "id": 1,
                "title": "線上讀書會",
                "subtitle": "歡迎來到線上讀書會",
                "連結網址": "https://www.facebook.com/groups/906048196159262/",
                "介紹": "可以學到 react reactnatvice redux ....",
                "icon": "images/icons/reactjs.png",
                "mainphoto": "images/interior-of-library.jpg"
            },
            items: ['hello', 'world', 'click', 'me']


        }
        this.props = props;
        //        console.log(this.props);
    }

    OpenAbout = () => {
        // console.log(this.props);
        const { setLeftmenu } = this.props;
        setLeftmenu({
            openstate: !this.props.common.openstate
        });

    }
    ClickBookTopic = (result) => {
        //console.log(result);

        this.setState({
            IsOpenData: !this.state.IsOpenData,
            IsOpenInfo: true,
            AssignData: result
        })

        const { setLeftmenu } = this.props;
        //console.log(this.props);

        setLeftmenu({
            openstate: !this.props.common.openstate
        });

        console.log('this.state');
    }
    ClickCloseInfo = () => {
        // this.setState({
        //     IsOpenInfo: false
        // })
        // console.log(this.state.IsOpenInfo);
        console.log('ooo');
        const { setLeftmenu } = this.props;
        setLeftmenu({
            openstate: this.props.common.openstate ? false : true
        });
        console.log(this.props.common.openstate);
    }




    render() {
        let {ClickBookTopic} = this;
        const items = this.state.items.map((item, i) => (
            <div key={i} onClick={() => this.handleRemove(i)}>
                {item}
            </div>
        ));
        const { common } = this.props;
        console.log(common);
        return (
            <div>
                <Layout name="polo">
                    <div className={s.root}>
                        <div className={s.container}>

                            <ReactCSSTransitionGroup
                                className={s.example}
                                transitionName="example"
                                transitionEnterTimeout={1000}
                                transitionLeaveTimeout={1000}
                                >
                                <Card key={this.state.AssignData.mainphoto}>
                                    <CardHeader
                                        title={this.state.AssignData.title}
                                        subtitle={this.state.AssignData.subtitle}
                                        avatar={this.state.AssignData.icon}
                                        />
                                    <CardMedia
                                        overlay={<CardTitle title="這不是一個實體的讀書會,但你會愛上他" subtitle="是透過Zoom線上會議軟體所進行的讀書會,而你可以在任何地點,只要可以上網有安裝Zoom軟體,都可以一起來享受學習的樂趣" />}
                                        >
                                        <img src={this.state.AssignData.mainphoto} key={this.state.AssignData.mainphoto} />
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
                                            onTouchTap={this.OpenAbout}
                                            />


                                    </CardActions>
                                </Card>

                            </ReactCSSTransitionGroup>
                            <Drawer open={common.openstate} >
                                {this.props.programdata.map(function (result, index) {
                                    return <MenuItem key={index} onTouchTap={() => ClickBookTopic(result)} >

                                        <Avatar
                                            src={result.icon}
                                            size={30}
                                            style={styles.avatar}

                                            />
                                        {result.title} </MenuItem >;

                                })}
                                <Divider />
                                {this.props.languagedata.map(function (result, index) {
                                    return <MenuItem key={index}>
                                        <Avatar
                                            src={result.icon}
                                            size={30}
                                            style={styles.avatar}
                                            />
                                        {result.title} </MenuItem >;
                                })}
                                <Divider />
                                {this.props.otherdata.map(function (result, index) {
                                    return <MenuItem key={index}>
                                        <Avatar
                                            src={result.icon}
                                            size={30}
                                            style={styles.avatar}
                                            />
                                        {result.title} </MenuItem >;
                                })}


                                <RaisedButton
                                    label="關閉"
                                    labelPosition="before"
                                    primary={true}
                                    icon={<ActionSearchIcon />}
                                    style={styles.button}

                                    onTouchTap={this.OpenAbout}
                                    />
                            </Drawer>






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
    setLeftmenu
};



export default connect(mapState, mapDispatch)(withStyles(s)(Home));
