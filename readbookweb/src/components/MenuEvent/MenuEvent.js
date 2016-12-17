
import React, { Component, PropTypes } from 'react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';

import s from './MenuEvent.css';
import { setLeftmenu } from '../../actions/common';
import TableCs from '../TableCs';


class MenuEvent extends Component {
    constructor(props) {
        super(props);

        this.props = props;

    }

    // OpenAbout = () => {
    //     const { setLeftmenu } = this.props;
    //     setLeftmenu({
    //         openstate: false,
    //         openMenuEvent: !this.props.common.openMenuEvent
    //     });

    // }
    // ClickBookTopic = (result) => {
    //     this.setState({
    //         IsOpenData: !this.state.IsOpenData,
    //         IsOpenInfo: true,
    //         AssignData: result
    //     })
    //     const { setLeftmenu } = this.props;
    //     setLeftmenu({
    //         openstate: !this.props.common.openstate
    //     });
    // }

    render() {

        return (
            <div className={s.root}>
                <div className={s.container}>
                    <TableCs></TableCs>
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
