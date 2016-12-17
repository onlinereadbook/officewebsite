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
import s from './Menu.css';
//import MenuData from '../MenuData';
import { setLeftmenu } from '../../actions/common';
import { connect } from 'react-redux';
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
const programdata = [
    {
        "id": 1,
        "title": "線上 react 讀書會",
        "subtitle": "Reactjs 為目前主流框架之一,好維護強調 Learn Once Use Everywhere",
        "weblink": "https://www.facebook.com/groups/906048196159262/",
        "memo": "react 讀書會 攻略項目 目前包含 react ,reactnatvice ,redux ,webpack ,add-ons ,未來會攻略 ReactVr  ....",
        "icon": "images/icons/reactjs.png",
        "mainphoto": "images/mainphoto/a1.jpg"
    }, {
        "id": 2,
        "title": "線上 nodejs 讀書會",
        "subtitle": "nodejs在這幾年很火紅,目前已經支援最新的es6,es7語法,模組套件非常多,也常用於Iot開發語言",
        "weblink": "https://www.facebook.com/groups/207139586323090/",
        "memo": "目前nodejs攻略 有 後端開發express,strongloop或是 Iot物聯網使用也有 雲端 node-red ",
        "icon": "images/icons/nodejs.png",
        "mainphoto": "images/mainphoto/a2.jpg"

    },
    , {
        "id": 3,
        "title": "線上 docker 讀書會",
        "subtitle": "docker是虛擬化技術很重要的一個技術,也常用在CI/CD 或是 devops中",
        "weblink": "https://www.facebook.com/groups/750311598438135/",
        "memo": "docker 可以很快速的建立一個環境,並可以資料與系統分離 ",
        "icon": "images/icons/docker.png",
        "mainphoto": "images/mainphoto/a3.jpg"

    }, {
        "id": 4,
        "title": "線上 swift 讀書會",
        "icon": "images/icons/swift.png",

        "weblink": "https://www.facebook.com/groups/238948643131478/",
        "icon": "images/icons/swift.png",
        "memo": ""
    }, {
        "id": 5,
        "title": "線上 laravel 讀書會",
        "weblink": "https://www.facebook.com/groups/956973084383781/",
        "icon": "images/icons/laravel.png",

        "memo": ""
    }, {
        "id": 6,
        "title": "線上 unity 讀書會",
        "icon": "images/icons/unity.png",

        "weblink": "https://www.facebook.com/groups/1606498833013546/",
        "memo": ""
    }, {
        "id": 7,
        "title": "線上 strongloop 讀書會",
        "weblink": "https://www.facebook.com/groups/568032146690485/",
        "memo": "",
        "icon": "images/icons/strongloop.png",

    }, {
        "id": 8,
        "title": "線上 vue.js 讀書會",
        "weblink": "https://www.facebook.com/groups/616281401885574/",
        "memo": "",
        "icon": "images/icons/vue.png",

    }, {
        "id": 9,
        "title": "線上 maker 讀書會",
        "weblink": "https://www.facebook.com/groups/842415582524882/",
        "memo": "",
        "icon": "images/icons/maker.png",

    }, {
        "id": 10,
        "title": "線上讀書會-迷你黑客松",
        "weblink": "https://www.facebook.com/groups/1274976625880806/",
        "memo": "",
        "icon": "images/icons/mini.png",

    }, {
        "id": 11,
        "title": "線上 rap 讀書會",
        "weblink": "https://www.facebook.com/groups/1618294088475156/",
        "memo": "",
        "icon": "images/icons/rap.png",

    }, {
        "id": 12,
        "title": "線上 ui/ux art 讀書會",
        "weblink": "https://www.facebook.com/groups/670166459806094/",
        "memo": "",
        "icon": "images/icons/art.png",

    }, {
        "id": 13,
        "title": "線上 chatbot 讀書會",
        "weblink": "https://www.facebook.com/groups/148210218987647/",
        "memo": "",
        "icon": "images/icons/chatbot.png",

    }, {
        "id": 14,
        "title": "線上 meteor 讀書會",
        "weblink": "https://www.facebook.com/groups/930921220347797/",
        "memo": "",
        "icon": "images/icons/meteor.png",

    }, {
        "id": 15,
        "title": "線上 xamarin & C# 讀書會",
        "weblink": "https://www.facebook.com/groups/611143505736213/",
        "memo": "",
        "icon": "images/icons/xamarin.png",

    }, {
        "id": 16,
        "title": "線上 go 讀書會",
        "weblink": "https://www.facebook.com/groups/1288435607857868/",
        "memo": "",
        "icon": "images/icons/go.png",

    }
];

const otherdata = [

    {
        "title": "線上 創業 讀書會",
        "weblink": "https://www.facebook.com/groups/1746983635561623/",
        "memo": "",
        "icon": "images/icons/business.png",

    },
];

const languagedata = [
    {
        "title": "線上 韓語 讀書會",
        "weblink": "https://www.facebook.com/groups/583103035208789/",
        "memo": "",
        "icon": "images/icons/korean.png",
    }, {
        "title": "線上 越南語 讀書會",
        "weblink": "https://www.facebook.com/groups/683209238508614/",
        "memo": "",
        "icon": "images/icons/vietnam.png",
    }, {
        "title": "線上 日語 讀書會",
        "weblink": "https://www.facebook.com/groups/1113446758690591/",
        "memo": "",
        "icon": "images/icons/japan.png",
    }, {
        "title": "線上 英文 讀書會",
        "weblink": "https://www.facebook.com/groups/1781798848754929/",
        "memo": "",
        "icon": "images/icons/english.png",
    },
];

class Menu extends Component {
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
        //console.log(this.props);
    }

    OpenAbout = () => {
        // console.log(this.props);
        const { setLeftmenu } = this.props;
        setLeftmenu({
            openMenu: !this.props.common.openMenu,
            openMenuEvent: false
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
            openMenu: !this.props.common.openMenu
        });

        //   console.log('this.state');
    }
    ClickCloseInfo = () => {
        // this.setState({
        //     IsOpenInfo: false
        // })
        // console.log(this.state.IsOpenInfo);
        //  console.log('ooo');
        const { setLeftmenu } = this.props;
        setLeftmenu({
            openMenu: this.props.common.openMenu ? false : true
        });
        // console.log(this.props.common.openMenu);
    }
    render() {
        let {ClickBookTopic} = this;
        const items = this.state.items.map((item, i) => (
            <div key={i} onClick={() => this.handleRemove(i)}>
                {item}
            </div>
        ));
        const { common } = this.props;
        // console.log(common);
        return (
            <div className={s.root}>
                <div className={s.container}>


                    <Card>
                        <CardHeader
                            title={this.state.AssignData.title}
                            subtitle={this.state.AssignData.subtitle}
                            avatar={this.state.AssignData.icon}
                            />
                        <CardMedia
                            overlay={<CardTitle title="這不是一個實體的讀書會,但你會愛上他" subtitle="是透過Zoom線上會議軟體所進行的讀書會,而你可以在任何地點,只要可以上網有安裝Zoom軟體,都可以一起來享受學習的樂趣" />}
                            >
                            <img src="{this.state.AssignData.mainphoto}" key={this.state.AssignData.mainphoto} />
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


                        </CardActions></Card>

                    <Drawer open={common.openMenu} >
                        {programdata.map(function (result, index) {
                            return <MenuItem key={index} onTouchTap={() => ClickBookTopic(result)} >

                                <Avatar
                                    src={result.icon}
                                    size={30}
                                    style={styles.avatar}

                                    />
                                {result.title} </MenuItem >;

                        })}
                        <Divider />
                        {languagedata.map(function (result, index) {
                            return <MenuItem key={index}>
                                <Avatar
                                    src={result.icon}
                                    size={30}
                                    style={styles.avatar}
                                    />
                                {result.title} </MenuItem >;
                        })}
                        <Divider />
                        {otherdata.map(function (result, index) {
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
        )
    }

}
const mapState = (state) => ({
    common: state.common
});
const mapDispatch = {
    setLeftmenu
};



export default connect(mapState, mapDispatch)(injectIntl(withStyles(s)(Menu)));
