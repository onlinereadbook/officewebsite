import Sequelize from 'sequelize';
import { databaseUrl } from '../src/config';
import Youtubelist from '../src/data/models/YoutubeData';
import Promise from 'promise';

const sequelize = new Sequelize(databaseUrl, {
    define: {
        freezeTableName: true,
    },
});
const request = require('request-promise');

const fs = require('mz/fs');

import YOUTUBEDATA from '../youtubekey';

//Youtubelist.truncate();
//let YOUTUBEDATA = require('../youtubekey');
//console.log(YOUTUBEDATA.YOUR_API_KEY);
let YOUR_API_KEY = YOUTUBEDATA.YOUR_API_KEY;
let CHANNELID = YOUTUBEDATA.CHANNELID;
let MAXRESULTS = 50;

let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${MAXRESULTS}&channelId=${CHANNELID}&key=${YOUR_API_KEY}`

getdetail();

async function getdetail() {
    let Youtubedata = await Youtubelist.findAll({});
    //console.log(Youtubedata);
    Youtubedata.forEach(async (v) => {
        let url2 = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${v.dataValues.videoId}&key=${YOUR_API_KEY}`;
        let temp = await request(url2);
        temp = JSON.parse(temp);
        let tags = temp.items[0].snippet.tags.toString();
        v.tags = tags;
        v.save();
    });


}


