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

const YoutubeData = Model.define('YoutubeData', {

    id: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV1,
        primaryKey: true,
    },

    videoId: {
        type: DataType.STRING(255),
    },


    title: {
        type: DataType.STRING(255),

    },

    description: {
        type: DataType.STRING(255),

    },
    tags: {
        type: DataType.STRING(255),

    },
}, {

        indexes: [
            { fields: ['videoId'] },
        ],

    });

export default YoutubeData;
