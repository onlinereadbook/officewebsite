/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import ReadBook from './readBook';
import fetch from '../../core/fetch';

export default {
    path: '/readbook/',
    action() {
        return {
            title: 'React Starter Kit',
            component: <ReadBook />,
        }
    },
    path: '/readbook/:bookname',
    action({ params }) {
        return {

            title: 'React Starter Kit',
            component: <ReadBook  />,
        }
    },



    // ,
    // children: [{
    //    path:'/:bookname',
    //    action(){ return {
    //                    component: <ReadBook />
    //    }}

    // }]

};
