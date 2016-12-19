/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const Events = Model.define('Events', {
    id: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV1,
        primaryKey: true,
    },
    title: {
        type: DataType.STRING(255),
    },
    calendar: {
        type: DataType.STRING(255),
    },
    memo: {
        type: DataType.TEXT(),
    },
    speaker: {
        type: DataType.STRING(255),
    },
    publishedDate: {
        type: DataType.STRING(255),
    },


});

export default Events;
