
import React, { Component, PropTypes } from 'react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';

import s from './MenuEvent.css';
import { setLeftmenu } from '../../actions/common';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';


class MenuEvent extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     IsOpenData: false,
        //     IsOpenInfo: false,
        //     AssignData: {
        //         "id": 1,
        //         "title": "線上讀書會",
        //         "subtitle": "歡迎來到線上讀書會",
        //         "連結網址": "https://www.facebook.com/groups/906048196159262/",
        //         "介紹": "可以學到 react reactnatvice redux ....",
        //         "icon": "images/icons/reactjs.png",
        //         "mainphoto": "images/interior-of-library.jpg"
        //     },
        //     items: ['hello', 'world', 'click', 'me']


        // }
        this.props = props;
        //console.log(this.props);
    }

    OpenAbout = () => {
        const { setLeftmenu } = this.props;
        setLeftmenu({
            openstate: false,
            openMenuEvent: !this.props.common.openMenuEvent
        });

    }
    ClickBookTopic = (result) => {
        this.setState({
            IsOpenData: !this.state.IsOpenData,
            IsOpenInfo: true,
            AssignData: result
        })
        const { setLeftmenu } = this.props;
        setLeftmenu({
            openstate: !this.props.common.openstate
        });


    }

    render() {

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
                            <TableRow>
                                <TableRowColumn>1</TableRowColumn>
                                <TableRowColumn>John Smith</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>2</TableRowColumn>
                                <TableRowColumn>Randal White</TableRowColumn>
                                <TableRowColumn>Unemployed</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>3</TableRowColumn>
                                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>4</TableRowColumn>
                                <TableRowColumn>Steve Brown</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
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

export default connect(mapState, mapDispatch)(injectIntl(withStyles(s)(MenuEvent)));