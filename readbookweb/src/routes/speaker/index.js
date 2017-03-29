
import React from 'react';
import Speaker from './Speaker';
import fetch from '../../core/fetch';

export default {
    path: '/speaker',
    async action() {
        // const resp = await fetch('/graphql', {
        //     method: 'post',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         query: '{Youtube {title,videoId,description,tags}}',
        //     }),
        //     credentials: 'include',
        // });
        // const youtubedata = await resp.json();
        // console.log(youtubedata);
        // console.log('youtubedata');

        // if (!data || !data.events) throw new Error('Failed to load the news feed.');
        // console.log(data);
        return {
            title: '影片資料',
            component: <Speaker />,
        };
    },

};