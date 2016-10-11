/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { FormattedRelative } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Home.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



function Home( ) {
  return (
    <Layout>
      <div className={s.root}>
        <div className={s.container}>
                <Card>
                <CardHeader
                  title="URL Avatar"
                  subtitle="Subtitle"
                  avatar="images/s1.jpg"
                />
                <CardMedia
                  overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                  <img src="images/1.jpg" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
        </div>
      </div>
    </Layout>
  );
}

Home.propTypes = {
 
};

export default withStyles(s)(Home);
