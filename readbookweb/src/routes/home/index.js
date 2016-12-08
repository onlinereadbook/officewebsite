/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';




export default {

    path: '/',

    action() {
        const programdata = [
            {
                "id": 1,
                "title": "線上 react 讀書會",
                "subtitle": "歡迎來到線上讀書會",
                "weblink": "https://www.facebook.com/groups/906048196159262/",
                "memo": "可以學到 react reactnatvice redux ....",
                "icon": "images/react.png",
                "mainphoto": "images/react.png"
            }, {
                "id": 2,
                "title": "線上 nodejs 讀書會",
                "subtitle": "關於nodejs23事",

                "weblink": "https://www.facebook.com/groups/207139586323090/",
                "memo": "",
                "icon": "images/nodejs.png"

            },
            , {
                "id": 3,
                "title": "線上 docker 讀書會",
                "weblink": "https://www.facebook.com/groups/750311598438135/",
                "memo": ""
            }, {
                "id": 4,
                "title": "線上 swift 讀書會",
                "weblink": "https://www.facebook.com/groups/238948643131478/",
                "memo": ""
            }, {
                "id": 5,
                "title": "線上 laravel 讀書會",
                "weblink": "https://www.facebook.com/groups/956973084383781/",
                "memo": ""
            }, {
                "id": 6,
                "title": "線上 unity 讀書會",
                "weblink": "https://www.facebook.com/groups/1606498833013546/",
                "memo": ""
            }, {
                "id": 7,
                "title": "線上 strongloop 讀書會",
                "weblink": "https://www.facebook.com/groups/568032146690485/",
                "memo": ""
            }, {
                "id": 8,
                "title": "線上 vue.js 讀書會",
                "weblink": "https://www.facebook.com/groups/616281401885574/",
                "memo": ""
            }, {
                "id": 9,
                "title": "線上 maker 讀書會",
                "weblink": "https://www.facebook.com/groups/842415582524882/",
                "memo": ""
            }, {
                "id": 10,
                "title": "線上讀書會-迷你黑客松",
                "weblink": "https://www.facebook.com/groups/1274976625880806/",
                "memo": ""
            }, {
                "id": 11,
                "title": "線上 maker 讀書會",
                "weblink": "https://www.facebook.com/groups/1113446758690591/",
                "memo": ""
            }, {
                "id": 12,
                "title": "線上 ui/ux art 讀書會",
                "weblink": "https://www.facebook.com/groups/670166459806094/",
                "memo": ""
            }, {
                "id": 13,
                "title": "線上 chatbot 讀書會",
                "weblink": "https://www.facebook.com/groups/148210218987647/",
                "memo": ""
            }, {
                "id": 14,
                "title": "線上 meteor 讀書會",
                "weblink": "https://www.facebook.com/groups/930921220347797/",
                "memo": ""
            }, {
                "id": 15,
                "title": "線上 xamarin & C# 讀書會",
                "weblink": "https://www.facebook.com/groups/611143505736213/",
                "memo": ""
            }, {
                "id": 16,
                "title": "線上 go 讀書會",
                "weblink": "https://www.facebook.com/groups/1288435607857868/",
                "memo": ""
            }
        ];

        const otherdata = [

            {
                "title": "線上 創業 讀書會",
                "weblink": "https://www.facebook.com/groups/1746983635561623/",
                "memo": ""
            },
        ];

        const languagedata = [
            {
                "title": "線上 韓語 讀書會",
                "weblink": "https://www.facebook.com/groups/583103035208789/",
                "memo": ""
            }, {
                "title": "線上 越南語 讀書會",
                "weblink": "https://www.facebook.com/groups/683209238508614/",
                "memo": ""
            }, {
                "title": "線上 日語 讀書會",
                "weblink": "https://www.facebook.com/groups/1113446758690591/",
                "memo": ""
            }, {
                "title": "線上 英文 讀書會",
                "weblink": "https://www.facebook.com/groups/1781798848754929/",
                "memo": ""
            },
        ];
        // function OpenAbout() {
        //   IsOpenAbout = (IsOpenAbout == 'false') ? 'true' : 'false';
        //   console.log(IsOpenAbout);

        //   return IsOpenAbout
        // }
        // const resp = await fetch('/graphql', {
        //   method: 'post',
        //   headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     query: '{news{title,link,publishedDate,contentSnippet}}',
        //   }),
        //   credentials: 'include',
        // });
        // const { data } = await resp.json();
        //  if (!data || !data.news) throw new Error('Failed to load the news feed.');
        return {
            title: 'React Starter Kit',
            component: <Home programdata={programdata} otherdata={otherdata} languagedata={languagedata} />,
        };
    },

};
