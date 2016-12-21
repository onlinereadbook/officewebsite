/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Events from './Events';
import fetch from '../../core/fetch';

export default {
    path: '/events',
    async action() {
        const resp = await fetch('/graphql', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: '{events2 {title}}',
            }),
            credentials: 'include',
        });
        const { data } = await resp.json();
        console.log(data);
        console.log('data');

        // if (!data || !data.events) throw new Error('Failed to load the news feed.');
        // console.log(data);
        return {
            title: '行事曆',
            component: <Events />,
        };
    },

};
