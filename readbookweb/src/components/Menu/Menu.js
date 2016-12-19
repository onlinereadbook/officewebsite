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
 import history from '../../core/history';

import Link from '../Link';
import {programdata} from './MenuData';


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

    OpenAbout = (result) => {
        // console.log(this.props);
        const { setLeftmenu } = this.props;
        setLeftmenu({
            openMenu: !this.props.common.openMenu,
            openMenuEvent: false
        });
  
    }
    ClickBookTopic = (index) => {
        //console.log(result);

        this.setState({
            IsOpenData: !this.state.IsOpenData,
            IsOpenInfo: true,
           // AssignData: result
        })

        const { setLeftmenu } = this.props;
        //console.log(this.props);
 

        setLeftmenu({
            openMenu: !this.props.common.openMenu
        });
  console.log(index);
    history.push('/readbook/'+index);
        //狀態更改後要轉址
     
 //

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
 
         
                
                     <Drawer open={common.openMenu} width={350}>
                        {programdata.map(function (result, index) {
                           // result.bookname =(result.bookname)?result.bookname:"未設定";
                            return <MenuItem key={index} onTouchTap={() => ClickBookTopic(index)} >

                                <Avatar
                                    src={"/" + result.icon}
                                    size={30}
                                    style={styles.avatar}

                                    />
                                    
                                              {result.title} 

                               </MenuItem >;

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
