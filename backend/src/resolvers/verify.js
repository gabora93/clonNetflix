import User from '../schemas/users';
import jwt from 'jsonwebtoken';


const secret = 'sample2018' // SECRET KEY
const prefixToken = 'JWT';

export const verifyToken = async(token)=>{
    return new Promise((resolve, reject)=>{
        const [prefix, payload] = token.split(' ');

        if(!payload) return reject('No token privded');
        if(prefix !== prefixToken) return reject('Invalid header Format');

        jwt.verify(payload,secret, (err,data)=>{
            if(err){
                return reject(err);

            }
            User.findOne({'_id':data.id}).exec()
                .then(res=>{
                    return resolve(res);
                })
                .catch(err =>{
                    return reject(err);
                })
        })
    })
}