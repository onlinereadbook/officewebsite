/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';
import EventsType from '../types/EventsType';
import Events from '../models/Events' // <---這邊是 Models 避免名稱一樣用as轉到event2 
//     ^ 會不會是這邊錯了 變成 {} 了看一下




const datas = [];
const events2 = {
    type: new List(EventsType),
    async resolve() {
        //這邊開始透過sequelize 去撈資料 在放到 events
        //我現在要用Sequelize 連到 mysql 這邊有引入model與 Sequelize 
        // let data = {};
        // //console.log('graphQL');
        // data.title = "polo";
        // data.calendar = "polo";
        // data.memo = "2016-10-10";
        // data.publishedDate = "2016-10-10";
        // data.speaker = "2016-10-10";
        // datas.push(data);
        // return datas;
        //console.log(Events);   //<--有問題的是這個地方 我log出來長這樣  { default: Events } <--這個有正常嗎
        // 問題是 Events2 到底有沒有成功呢  <---
        let datas = await Events.findAll();  //這邊一定要用async
        console.log(datas);
        return datas;
    },
};

export default events2;
