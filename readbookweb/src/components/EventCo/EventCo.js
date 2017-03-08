import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './EventCo.css';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { sendOneData } from '../../actions/tablecs';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FlatButton from 'material-ui/FlatButton';


function EventCo() {
  return (
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

              </TableRow>
            </TableHeader>
            <TableBody>


            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}

export default withStyles(s)(EventCo);
