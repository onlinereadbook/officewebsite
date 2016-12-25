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


class FormCs extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        //console.log(this.props);
    }
    onInsertClick = () => {
        //console.log('test');
        let data = {};
        data.title = this.refs.title.getValue();
        data.calendar = this.refs.calendar.getDate();
        data.memo = this.refs.memo.getValue();
        data.speaker = this.refs.speaker.getValue();
        const { insertTable } = this.props;

        insertTable({ table: "table", data: data });
    }

    render() {
        const {onInsertClick} = this;

        return (
            <div className={s.root}>
                <div className={s.container}>
                    <Card>

                        <CardTitle title="表單操作" subtitle="Card subtitle" />
                        <CardText>
                            <TextField fullWidth={true} hintText="活動名稱" name="title" ref="title"></TextField>
                            <DatePicker hintText="活動日期" mode="landscape" name="calendar" ref="calendar" />
                            <TextField rows={3} multiLine={true} fullWidth={true} hintText="活動說明" name="memo" ref="memo"></TextField>
                            <TextField fullWidth={true} hintText="主講者" name="speaker" ref="speaker"></TextField>


                        </CardText>
                        <CardActions>
                            <FlatButton label="新增" onTouchTap={() => onInsertClick()} />
                            <FlatButton label="修改" />
                        </CardActions>
                    </Card>
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
