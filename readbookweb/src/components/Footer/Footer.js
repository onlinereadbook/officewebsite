/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

// function Footer() {
//
//   return (
//     <div className={s.root}>
//       <div className={s.container}>
//         <span className={s.text}>© Your Company</span>
//         <span className={s.spacer}>·</span>
//         <Link className={s.link} to="/">Home</Link>
//         <span className={s.spacer}>·</span>
//         <Link className={s.link} to="/admin">Admin</Link>
//         <span className={s.spacer}>·</span>
//         <Link className={s.link} to="/privacy">Privacy</Link>
//         <span className={s.spacer}>·</span>
//         <Link className={s.link} to="/not-found">Not Found</Link>
//       </div>
//     </div>
//   );
// }
//export default withStyles(s)(Footer);

class BottomNavigationExampleSimple extends React.Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
                label="Nearby"
                icon={nearbyIcon}
                onTouchTap={() => this.select(0)}
            />
            <BottomNavigationItem
                label="Nearby"
                icon={nearbyIcon}
                onTouchTap={() => this.select(1)}
            />

            <BottomNavigationItem
                label="Nearby"
                icon={nearbyIcon}
                onTouchTap={() => this.select(2)}
            />
          </BottomNavigation>
        </Paper>
    );
  }
}

export default withStyles(s)(BottomNavigationExampleSimple);