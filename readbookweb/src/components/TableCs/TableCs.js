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
import s from './TableCs.css';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { sendOneData } from '../../actions/tablecs';




// const events = [{
//     "eventTitle": "Nodejs讀書會",
//     "eventCal": "2016-12-12",
//     "eventKind": "後端",
//     "eventSpeaker": "主講者:polo",
//     "eventMemo": "好康之主題",
// }, {
//     "eventTitle": "Reactjs讀書會",
//     "eventCal": "2016-12-13",
//     "eventKind": "前端",
//     "eventSpeaker": "主講者:andy",
//     "eventMemo": "好康之主題",

// }]



class TableCs extends Component {
    constructor(props) {
        super(props);

        this.props = props;
        //console.log(this.props);
    }
    onSelectClick = (onedata) => {
        console.log('select' + onedata);
        const { sendOneData } = this.props;
        const tableName = "TableName";
        sendOneData({ tableName, onedata });
    }

    render() {
        const { tablecs} = this.props;
        const tabledata = tablecs.data;
        const {onSelectClick} = this;
        return (
            <div className={s.root}>
                <div className={s.container}>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Status</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>

                            {tabledata.map(function (data, index) {

                                return <TableRow key={index} onTouchTap={() => onSelectClick(data)}>
                                    <TableRowColumn>{index}</TableRowColumn>
                                    <TableRowColumn>{data.eventTitle}</TableRowColumn>
                                    <TableRowColumn>{data.eventCal}</TableRowColumn>
                                </TableRow>;
                            })}

                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }

}
const mapState = (state) => ({
    tablecs: state.tablecs
});
const mapDispatch = {
    sendOneData
};



export default connect(mapState, mapDispatch)(injectIntl(withStyles(s)(TableCs)));
