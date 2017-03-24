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
    GraphQLString as StringType,
    GraphQLNonNull as NonNull,
} from 'graphql';

const EventsType = new ObjectType({
    name: 'Events',
    fields: {
        title: { type: new NonNull(StringType) },
        startTime: { type: new NonNull(StringType) },
        description: { type: StringType },
        speaker: { type: StringType },
    },
});

export default EventsType;
