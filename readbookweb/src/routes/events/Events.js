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
import TextField from 'material-ui/TextField';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { connect } from 'react-redux';
const styles = {
    button: { margin: 12 },
    Card: { marginBotton: 10 }
}


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
        //const { common } = this.props;
        //const { OpenAbout } = this;
        const eventdata = this.props.eventdata;

        return (
            <div>
                <Layout name="polo">
                    <div className={s.root}>
                        <div className={s.container}>

                            <Card  >
                                <CardText>
                                    <div className={s.flexContainer}>
                                        <div className={s.flex2} >
                                            <TextField hintText="輸入關鍵字" fullWidth={true} id="search"></TextField>
                                        </div>

                                    </div>
                                </CardText>
                                <Table adjustForCheckbox={false}>
                                    <TableHeader >
                                        <TableRow>
                                            <TableHeaderColumn>影片名稱</TableHeaderColumn>
                                            <TableHeaderColumn>內容</TableHeaderColumn>
                                            <TableHeaderColumn>Tags</TableHeaderColumn>


                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>



                                    </TableBody>
                                </Table>
                            </Card>
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
