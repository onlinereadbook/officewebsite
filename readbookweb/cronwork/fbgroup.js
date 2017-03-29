var request = require('request');
import Sequelize from 'sequelize';
import { databaseUrl } from '../src/config';
import GroupList from '../src/data/models/Group';


let url = 'https://graph.facebook.com/v2.8/';
url = url + 'me?fields=groups{email,name,owner,privacy,icon,cover,description}';
url = url + '&access_token=EAACEdEose0cBALP5t5ZA3PGZAal3tUma42PTDQMzlAApzPG0FZBmEOn16IoZBbXHrhEBRSgT3nPnReGAoO0MSmYYQuAjg79lL26MqVLznkiRoI1auffhZBRceFZBPcYOaZAajKhvBX5yXKp9z54VCHieuU91VGaoBiMZBkujOpzZAEDiDXi14ZCfWsnYEvR8pstJ4ZD';

go(url);
async function go(url) {
    //console.log(url);
    request(url, function (err, res, body) {
        let item = JSON.parse(body);
        // console.log(item.events.data);
        console.log(item.groups.paging.next);

        let next = item.groups.paging.next;

        item.groups.data.map((v) => {
            if (v.owner.name == '紀相安') {
                let data = {};
                data.email = v.email;
                data.title = v.name;
                data.description = v.description;
                if (typeof (v.cover) === "object") {
                    data.cover = v.cover;
                } else {
                    data.cover = '';
                }
                data.groupId = v.id;
                GroupList.build(data).save();
                //                console.log(data);
            }

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
            data.email = v.email;
            data.title = v.name;
            data.description = v.description;
            // console.log(typeof (v.cover) === "object");
            if (typeof (v.cover) === "object") {
                //console.log(v.cover)
                data.cover = v.cover;
            } else {
                data.cover = '';
            }
            data.groupId = v.id;
            GroupList.build(data).save();

        })


        if (next != "") {
            setTimeout(function () {
                console.log('下一次的旅行');
                go2(next);
            }, 5000);
        }
    });
}
