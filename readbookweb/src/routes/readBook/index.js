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
import { programdata } from '../../components/Menu/MenuData';

const AssignData = {
    "id": 1,
    "title": "線上讀書會",
    "subtitle": "歡迎來到線上讀書會",
    "連結網址": "https://www.facebook.com/groups/906048196159262/",
    "介紹": "可以學到 react reactnatvice redux ....",
    "icon": "images/icons/reactjs.png",
    "mainphoto": "images/interior-of-library.jpg"
}


export default {
    path: '/readbook/',
    action() {
        return {
            title: 'React Starter Kit',
            component: <ReadBook />,
        }
    },
    path: '/readbook/:id',
    async action({ params }) {
        const showdata = programdata[params.id];
        if (showdata.github != "undefined") {
            await fetch(showdata.github, { mode: "cors" }).then(function (res) {
                // console.log(res);
                //return res;
            });
        }

        return {
            title: 'React Starter Kit',
            component: <ReadBook showdata={showdata} />,
        }
    },

};
