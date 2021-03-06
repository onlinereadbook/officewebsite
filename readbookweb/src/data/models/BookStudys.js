/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';   //這邊已經有綁Model了 所以照理說 Events應該就是一個ORM

const BookStudys = Model.define('BookStudys', {
    id: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV1,
        primaryKey: true,
    },
    title: {
        type: DataType.STRING(255),
    },
    picture: {
        type: DataType.STRING(255),
    },
    memo: {
        type: DataType.TEXT(),
    },
    specialmemo: {
        type: DataType.STRING(255),
    },
    publishedDate: {
        type: DataType.STRING(255),
    },


});
//console.log("Events",Events);
console.log("EventsTest");
export default BookStudys;
