/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';

import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FormUd.css';
//import MenuData from '../MenuData';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import { insertTable } from '../../actions/tablecs';

//目標 把FormCs 配合 傳進來的資料可以修改 寫成可以吃各種的Table 資料庫

const divHide = {
    display: "none"
}

class FormUd extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            //      tablId: "",
            title: "",
            calendar: null,
            memo: "",
            speaker: ""
        }

    }

    componentWillReceiveProps(nextProps) {
        const { readyUpdata} = nextProps;
        this.setState({
            //        tablId: "test",
            title: readyUpdata.title,
            calendar: readyUpdata.calendar,
            memo: readyUpdata.memo,
            speaker: readyUpdata.speaker
        });
        //      this.setState({ title: "123" })


    }




    onUpdateClick = () => {
        console.log('update');
        console.log(this.state);


    }
    onDeleteClick = () => {
        console.log('detele');

    }
    render() {

        return (
            <div className={s.root}>
                <div className={s.container}>
                    <div id="panel" >
                        <Card >
                            <form ref="myform" id="myform">
                                <CardTitle title="表單修改操作" subtitle="Card subtitle" />
                                <CardText>
                                    <TextField fullWidth={true} hintText="tablId" name="tablId" ref="tablId" id="tablId" value={this.state.tablId} onChange={(event) => { this.setState({ id: event.target.value }) } } ></TextField>

                                    <TextField fullWidth={true} hintText="活動名稱" name="title" ref="title" id="title" value={this.state.title} onChange={(event) => { this.setState({ title: event.target.value }) } } ></TextField>
                                    <DatePicker hintText="活動日期" mode="landscape" autoOk={true} name="calendar"
                                        ref="calendar" id="calendar" value={this.state.calendar}
                                        onChange={(event, date) => { this.setState({ calendar: date }) } } />
                                    <TextField rows={3} multiLine={true} fullWidth={true} hintText="活動說明" name="memo" ref="memo" id="memo" value={this.state.memo} onChange={(event) => { this.setState({ memo: event.target.value }) } }></TextField>
                                    <TextField fullWidth={true} hintText="主講者" name="speaker" ref="speaker" id="speaker" value={this.state.speaker} onChange={(event) => { this.setState({ speaker: event.target.value }) } }></TextField>

                                </CardText>
                                <CardActions>
                                    <FlatButton label="修改" onTouchTap={this.onUpdateClick} />
                                    <FlatButton label="刪除" onTouchTap={this.onDeleteClick} />
                                </CardActions>
                            </form>
                        </Card>
                    </div>

                </div>
            </div>
        )
    }

}
const mapState = (state) => ({
    readyUpdata: state.tablecs.readyUpdata

});
const mapDispatch = {
    insertTable
};



export default connect(mapState, mapDispatch)(injectIntl(withStyles(s)(FormUd)));
