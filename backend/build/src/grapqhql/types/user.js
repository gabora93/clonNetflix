"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserInputType = exports.UserType = undefined;

var _graphql = require("graphql");

var grapqhl = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var UserType = exports.UserType = new grapqhl.GraphQLObjectType({
    name: "Users",
    description: "Users in MongoDB",
    fields: function fields() {
        return {
            _id: {
                type: grapqhl.GraphQLNonNull(grapqhl.GraphQLID)
            },
            name: {
                type: grapqhl.GraphQLString
            },
            lastName: {
                type: grapqhl.GraphQLString
            },
            isPremium: {
                type: grapqhl.GraphQLBoolean
            },
            email: {
                type: grapqhl.GraphQLString
            },
            phone: {
                type: grapqhl.GraphQLString
            },
            birthDate: {
                type: grapqhl.GraphQLString
            },
            password: {
                type: grapqhl.GraphQLString
            }

        };
    }
});

var UserInputType = exports.UserInputType = new grapqhl.GraphQLInputObjectType({
    name: 'Add Users',
    description: 'Types of add Users',
    fields: function fields() {
        return {
            name: {
                type: grapqhl.GraphQLString
            },
            lastName: {
                type: grapqhl.GraphQLString
            },
            isPremium: {
                type: grapqhl.GraphQLBoolean
            },
            email: {
                type: grapqhl.GraphQLString
            },
            phone: {
                type: grapqhl.GraphQLString
            },
            birthDate: {
                type: grapqhl.GraphQLString
            },
            password: {
                type: grapqhl.GraphQLString
            }
        };
    }
});