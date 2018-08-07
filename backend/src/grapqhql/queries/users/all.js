import * as graphql from 'graphql';

import User from '../../../schemas/users';
import { UserType } from '../../types/user';

const queryAllUsers = {
    type : new graphql.GraphQLList(UserType),
    resolve(){
        const users = User.find().exec()
        if(!users) throw new Error("Error at fetching users");
        return users
    }
}

export default queryAllUsers;