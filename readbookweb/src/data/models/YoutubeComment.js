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

const YoutubeComment = Model.define('YoutubeComment', {

    id: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV1,
        primaryKey: true,
    },

    videoId: {
        type: DataType.STRING(255),
    },


    UserId: {
        type: DataType.STRING(255),

    },

    Comment: {
        type: DataType.STRING(255),

    },
    Comment: {
        type: DataType.STRING(255),

    },

}, {

        indexes: [
            { fields: ['videoId', 'UserId'] },
        ],

    });

export default YoutubeComment;
