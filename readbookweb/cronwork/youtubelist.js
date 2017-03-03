// const Sequelize = require('sequelize');
// const { databaseUrl } = require('../src/config');
// const Youtubelist ＝  require('../src/data/models/YoutubeData');
//console.log(databaseUrl);

// const sequelize = new Sequelize(databaseUrl, {
//     define: {
//         freezeTableName: true,
//     },
// });

//正準備要塞資料 有些還沒寫完歐

const request = require('request');
const fs = require('mz/fs');




let YOUTUBEDATA = require('../youtubekey');

let YOUR_API_KEY = YOUTUBEDATA.YOUR_API_KEY;
let CHANNELID = YOUTUBEDATA.CHANNELID;
let MAXRESULTS = 3;
// console.log(YOUR_API_KEY);
let url = `https://www.googleapis.com/youtube/v3/activities?part=contentDetails%2Csnippet&maxResults=${MAXRESULTS}&channelId=${CHANNELID}&key=${YOUR_API_KEY}`


request(url, function (err, res) {
    //console.log(res);
    let data = JSON.parse(res.body);
    //console.log(data.items);
    //var arr = JSON.stringify(data.items);
    data.items.forEach(function (value, id) {

        let data = {};
        console.log(value.snippet.title);
        //data.title = value.snippet.title;

        //  Youtubelist.build(data).save();

    })
    // fs.writeFile('xx.json', arr);
    //gonext(url, data.pageToken);
})

function gonext(url, pageToken) {
    let newurl = `https://www.googleapis.com/youtube/v3/activities?part=contentDetails%2Csnippet&maxResults=50&channelId=UCWyojczht33LY1TQbw2k4Sg&key=${YOUR_API_KEY}&pageToken=${pageToken}`

    request(url, function (err, res) {
        //console.log(res);
        let data = JSON.parse(res.body);
        data.items.forEach(function (value, id) {
            console.log(value);
        })

        //gonext(url, data.pageToken);
    })


}