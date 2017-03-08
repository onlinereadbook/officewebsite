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
import s from './Events.css';
//import MenuData from './MenuData';
import ActionStoreIcon from 'material-ui/svg-icons/action/store';
import ActionSearchIcon from 'material-ui/svg-icons/action/search';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import EventCo from '../../components/EventCo';

import { connect } from 'react-redux';
const styles = {
    button: { margin: 12 },
    Card: { marginBotton: 10 }
}


const TableHeaderData = ["時間", "種類", "主講者", "內容"];

// const TableRowData = [
//     { time: "time", kind: "kind", speaker: "speaker", content: "content" },
//     { time: "time", kind: "kind", speaker: "speaker", content: "content" },
// ];


const TableRowData = [{
    "eventTitle": "Nodejs讀書會",
    "eventCal": "2016-12-12",
    "eventKind": "後端",
    "eventSpeaker": "主講者:polo",
    "eventMemo": "好康之主題",
}, {
    "eventTitle": "Reactjs讀書會",
    "eventCal": "2016-12-13",
    "eventKind": "前端",
    "eventSpeaker": "主講者:andy",
    "eventMemo": "好康之主題",

}]


class Events extends Component {
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
        const { OpenAbout } = this;
        console.log('TableRowData');
        console.log(TableRowData);
        return (
            <div>
                <Layout name="polo">
                    <div className={s.root}>
                        <div className={s.container}>

                            <EventCo   >   </EventCo>

                        </div>
                    </div>
                </Layout>
            </div >)
    }
}

// Events.propTypes = {

// };


const mapState = (state) => ({

    common: state.common

});
const mapDispatch = {

};



export default connect(mapState)(withStyles(s)(Events));
