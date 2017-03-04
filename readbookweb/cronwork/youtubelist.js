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

Youtubelist.truncate();
//let YOUTUBEDATA = require('../youtubekey');
//console.log(YOUTUBEDATA.YOUR_API_KEY);
let YOUR_API_KEY = YOUTUBEDATA.YOUR_API_KEY;
let CHANNELID = YOUTUBEDATA.CHANNELID;
let MAXRESULTS = 10;
// console.log(YOUR_API_KEY);
let url = `https://www.googleapis.com/youtube/v3/activities?part=contentDetails%2Csnippet&maxResults=${MAXRESULTS}&channelId=${CHANNELID}&key=${YOUR_API_KEY}`


request(url, function (err, res) {
    //console.log(res);
    let data = JSON.parse(res.body);
    let pageToken = data.nextPageToken;
    // console.log(data.nextPageToken);
    //var arr = JSON.stringify(data.items);
    data.items.forEach(function (value, id) {

        let data2 = {};
        //console.log(value.snippet);
        //console.log(value.snippet.title);
        //console.log(value.snippet.description);
        data2.title = value.snippet.title;
        data2.description = value.snippet.description;
        data2.videoId = (typeof (value.contentDetails.upload.videoId) === "string") ? value.contentDetails.upload.videoId : "";
        //   console.log(value.snippet.thumbnails.default.url);
        // console.log(value.contentDetails.upload.videoId);
        //data.title = value.snippet.title;

        Youtubelist.build(data2).save();

    })
    // fs.writeFile('xx.json', arr);
    //console.log(data.pageToken);
    gonext(pageToken);
})

async function gonext(Token) {
    let newurl = `https://www.googleapis.com/youtube/v3/activities?part=contentDetails%2Csnippet&maxResults=${MAXRESULTS}&channelId=${CHANNELID}&key=${YOUR_API_KEY}&pageToken=${Token}`
    //console.log(newurl);
    request(newurl, function (err, res) {
        //  console.log(res.body);
        let data = JSON.parse(res.body);

        let Token = data.nextPageToken;
        //console.log(data);
        //     //var arr = JSON.stringify(data.items);
        data.items.forEach(function (value, id) {
            let data2 = {};
            data2.title = value.snippet.title;
            data2.description = value.snippet.description;
            console.log(typeof (value.contentDetails.upload.videoId));
            data2.videoId = (typeof (value.contentDetails.upload.videoId) === "string") ? value.contentDetails.upload.videoId : "";
            Youtubelist.build(data2).save();

        })

        if (Token != "") {
            setTimeout(function () {
                console.log('下一次的旅程');
                gonext(Token);
            }, 1000);
        }
    })


}