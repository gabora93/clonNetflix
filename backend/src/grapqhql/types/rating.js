import * as grapqhql from 'graphql';

import Ratings from '../../schemas/ratings';

export const RatingType = new grapqhql.GraphQLObjectType({
    name: 'Ratings',
    description: 'Ratings in MongoDB',
    fields: () => ({
        _id: {
            type: grapqhql.GraphQLNonNull(grapqhql.GraphQLID)
        },
        name: {
            type: grapqhql.GraphQLString
        },
        description: {
            type: grapqhql.GraphQLString
        },
        age: {
            type: grapqhql.GraphQLInt
        }
    })
});

export const RatingInputType = new grapqhql.GraphQLInputObjectType({
    name: 'RatingInput',
    description: 'Insert Rating',
    fields : () => ({
        name: {
            type: grapqhql.GraphQLString
        },
        description: {
            type: grapqhql.GraphQLString
        },
        age: {
            type: grapqhql.GraphQLInt
        }
    })
})