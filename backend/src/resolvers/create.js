import jwt from 'jsonwebtoken';
import User from '../schemas/users';
import bcrypt from 'bcrypt';

const expiresIn = '1d'; //TIEMPO DE EXPIRACION unode
const secret = 'sample2018' // SECRET KEY

/**
 * Use email as login, use password as password
 * @param {string} email 
 * @param {string} password
 */

export const createToken = (email,password) => {
    if(!email || !password){ //CHECAR SI VIENEN CREDENCIALES
        return false
    }

    const user = User.findOne({'email': email}).then((user)=>{
        const compare = new Promise((resolve,reject)=>{
            bcrypt.compare(password, user.password, function(err,res){
                if(res){
                    const payload ={
                        email: user.email,
                        id: user._id
                    }

                    const token = jwt.sign(payload,secret,{
                        expiresIn
                    })

                    resolve(token)
                }
                else{
                    reject(false)
                }
            })
        })
        return compare
    }).catch()
    return user
}