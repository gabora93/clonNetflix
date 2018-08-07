import * as grapqhl from 'graphql';

export const UserType = new grapqhl.GraphQLObjectType({
    name : "Users",
    description : "Users in MongoDB",
    fields: () =>({
        _id : {
            type: grapqhl.GraphQLNonNull(grapqhl.GraphQLID)
        },
        name : {
            type : grapqhl.GraphQLString
        },
        lastName: {
            type : grapqhl.GraphQLString
        },
        isPremium : {
            type: grapqhl.GraphQLBoolean
        },
        email : {
            type: grapqhl.GraphQLString
        },
        phone:{
            type: grapqhl.GraphQLString
        },
        birthDate: {
            type: grapqhl.GraphQLString
        },
        password: {
            type: grapqhl.GraphQLString
        }

    })
});

export const UserInputType = new grapqhl.GraphQLInputObjectType({
    name: 'Add Users',
    description : 'Types of add Users',
    fields : () => ({
        name : {
            type : grapqhl.GraphQLString
        },
        lastName: {
            type : grapqhl.GraphQLString
        },
        isPremium : {
            type: grapqhl.GraphQLBoolean
        },
        email : {
            type: grapqhl.GraphQLString
        },
        phone:{
            type: grapqhl.GraphQLString
        },
        birthDate: {
            type: grapqhl.GraphQLString
        },
        password: {
            type: grapqhl.GraphQLString
        }
    })
})