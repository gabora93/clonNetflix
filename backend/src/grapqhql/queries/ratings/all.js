import * as graphql from 'graphql';

import Rating from '../../../schemas/ratings';
import {RatingType} from '../../types/rating';

const queryAllRatings = {
    type: new graphql.GraphQLList(RatingType),
    resolve(){
        const ratings = Rating.find().exec()
        if(!ratings) throw new Error("Error at fetching ratings")
        return ratings
    }
}

export default queryAllRatings;