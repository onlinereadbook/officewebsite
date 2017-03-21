/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
    GraphQLObjectType as ObjectType,
    GraphQLID as ID,
    GraphQLString as StringType,
    GraphQLNonNull as NonNull,
} from 'graphql';

const YoutubeType = new ObjectType({
    name: 'Youtube',
    fields: {
        id: { type: new NonNull(ID) },
        title: { type: StringType },
        videoId: { type: StringType },
        description: { type: StringType },
        tags: { type: StringType },
    },
});

export default YoutubeType;
