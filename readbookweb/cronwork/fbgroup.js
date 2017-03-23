var request = require('request');
import Sequelize from 'sequelize';
import { databaseUrl } from '../src/config';
import Eventslist from '../src/data/models/Events';


let url = 'https://graph.facebook.com/v2.8/me?fields=id,name,events{id,start_time,description,owner,end_time,parent_group,name}'

url = url + '&access_token=EAACEdEose0cBAOCR90V5uphAg0sZCbJOPxmncZBo8NfdIcKthSzaHgqrPcPau9gmkRKtqNI9ye0M0Ih2ZAtclZAhpsNFfXsTQYouxklW2lJ5Uyq5LPHZBPR9nfkZCRc0ZCanZBJqzvALFr3dCaCXXZAJyAnWn5TjnXPWZCJACNd4xV3faKa3LCCtgUZB5gp65Xt208ZD'

go(url);
async function go(url) {
    //console.log(url);
    request(url, function (err, res, body) {
        let item = JSON.parse(body);
        // console.log(item.events.data);
        //console.log(item.events.paging.next);

        let next = item.events.paging.next;

        item.events.data.map((v) => {
            let data = {};
            data.start_time = v.start_time;
            data.title = v.name;
            data.description = v.description;
            data.speaker = '';
            data.startTime = v.start_time;
            data.endTime = v.end_time;
            if (typeof (v.parent_group) == "object") {
                data.parentGroupName = v.parent_group.name;
                data.parentGroupId = v.parent_group.id;
                data.privacy = v.parent_group.privacy;
                data.owner = v.owner.name;
                Eventslist.build(data).save();
            }
            //console.log(typeof (v.parent_group));
        })
        //console.log(item.events);
        if (next != "") {
            setTimeout(function () {
                console.log('下一次的旅行');
                go2(next);
            }, 3000);
        }
    });
}
async function go2(url) {

    request(url, function (err, res, body) {
        let item = JSON.parse(body);
        //console.log(item.events.data);
        //console.log(item);
        let next = item.paging.next;


        item.data.map((v) => {
            let data = {};
            data.start_time = v.start_time;
            data.title = v.name;
            data.description = v.description;
            data.speaker = '';
            data.startTime = v.start_time;
            data.endTime = v.end_time;
            if (typeof (v.parent_group) == "object") {
                data.parentGroupName = v.parent_group.name;
                data.parentGroupId = v.parent_group.id;
                data.privacy = v.parent_group.privacy;
                data.owner = v.owner.name;
                Eventslist.build(data).save();
            }
            //console.log(typeof (v.parent_group));
        })


        if (next != "") {
            setTimeout(function () {
                console.log('下一次的旅行');
                go2(next);
            }, 5000);
        }
    });
}
