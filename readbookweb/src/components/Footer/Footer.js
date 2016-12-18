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

function Footer() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <span className={s.text}>© 線上讀書會</span>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/">首頁</Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/admin">登入讀書會</Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/privacy">隱私權政策</Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/support">贊助讀書會</Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/matchwork">線上媒合</Link>


      </div>
    </div>
  );
}

export default withStyles(s)(Footer);
