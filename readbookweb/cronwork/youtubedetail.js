import Sequelize from 'sequelize';
import { databaseUrl } from '../src/config';
import Youtubelist from '../src/data/models/YoutubeData';
//console.log(databaseUrl);

const sequelize = new Sequelize(databaseUrl, {
    define: {
        freezeTableName: true,
    },
});

//正準備要塞資料 有些還沒寫完歐

const request = require('request');
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
    Youtubedata.map((v) => {
        console.log(v.dataValues.videoId);
    })

}

