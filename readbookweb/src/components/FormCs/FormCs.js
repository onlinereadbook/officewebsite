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
import s from './FormCs.css';
//import MenuData from '../MenuData';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import { insertTable } from '../../actions/tablecs';

//目標 把FormCs 寫成可以吃各種的Table 資料庫

const divHide = {
    display: "none"
}

class FormCs extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        //this.refs = props;
        //console.log(this.props);
        this.state = {
            title: "",
            calendar: null,
            memo: "",
            speaker: "",
            calendarError: "",
            titleError: "",
            memoError: "",
            speakerError: ""

        }

    }


    verification = () => {
        let isError = false;
        //console.log("verification");

        if (this.refs.calendar.getDate() == null) {
            this.setState({ calendarError: "日期欄位必填歐" });
            //  console.log("test");
            isError = true;
        }
        if (this.refs.title.getValue() == "") {
            this.setState({ titleError: "活動欄位必填歐" });
            isError = true;
        }
        if (this.refs.memo.getValue() == "") {
            this.setState({ memoError: "活動說明欄位必填歐" });
            isError = true;
        }
        if (this.refs.speaker.getValue() == "") {
            this.setState({ speakerError: "主講者欄位必填歐" });
            isError = true;
        }


        return isError;
    }

    onInsertClick = (e) => {
        // e.preventDefault();
        //   console.log(e);
        //console.log(this.refs.title.getValue().trim())

        if (this.verification()) {
            return
        }

        let data = {};
        data.title = this.refs.title.getValue();
        data.calendar = this.refs.calendar.getDate();
        data.memo = this.refs.memo.getValue();
        data.speaker = this.refs.speaker.getValue();
        const { insertTable } = this.props;
        //console.log(data);
        //this.refs.title.value = '';
        insertTable({ table: "events", data: data });
        //   documentById("myform").reset();
        //  React.findDOMNode(this.refs.myform).reset();
        //this.refs.myform.getDomNode().reset();
        this.setState({
            title: "",
            calendar: null,
            memo: "",
            speaker: ""
        });
        // this.refs.myform.getDOMNode().reset();
        //ReactDom.findDOMNode(this.refs["title"]).value = '';
        //        ReactDom.findDOMNode(this.refs.myform).reset();
    }

    onUpdateClick = () => {
        console.log('update');

    }
    onDeleteClick = () => {

    }
    render() {

        return (
            <div className={s.root}>
                <div className={s.container}>
                    <div id="panel" >
                        <Card >
                            <form ref="myform" id="myform">
                                <CardTitle title="表單新增操作" subtitle="Card subtitle" />
                                <CardText>
                                    <TextField fullWidth={true} hintText="活動名稱" name="title" ref="title" id="title" value={this.state.title}
                                        errorText={this.state.titleError}
                                        onChange={(event) => { this.setState({ title: event.target.value, titleError: "" }) } } ></TextField>
                                    <DatePicker hintText="活動日期" mode="landscape" autoOk={true} name="calendar"
                                        ref="calendar" id="calendar" value={this.state.calendar} errorText={this.state.calendarError}
                                        onChange={(event, date) => { this.setState({ calendar: date, calendarError: "" }) } } />
                                    <TextField rows={3} multiLine={true} fullWidth={true} hintText="活動說明" name="memo"
                                        ref="memo" id="memo" value={this.state.memo}
                                        errorText={this.state.memoError}
                                        onChange={(event) => { this.setState({ memo: event.target.value, memoError: "" }) } }></TextField>
                                    <TextField fullWidth={true} hintText="主講者" name="speaker" ref="speaker" id="speaker"
                                        value={this.state.speaker}
                                        errorText={this.state.speakerError}

                                        onChange={(event) => { this.setState({ speaker: event.target.value, speakerError: "" }) } }></TextField>

                                </CardText>
                                <CardActions>
                                    <FlatButton label="新增" onTouchTap={this.onInsertClick} />
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
});
const mapDispatch = {
    insertTable
};



export default connect(mapState, mapDispatch)(injectIntl(withStyles(s)(FormCs)));
