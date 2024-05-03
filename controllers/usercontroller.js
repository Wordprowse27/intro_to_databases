import {PrismaClient} from '@prisma/client';
import jwt from 'jsonwebtoken';
import {StatusCodes} from 'http-status-codes';
import 'dotenv/config';
import 'bcrypt'
const prisma = new PrismaClient()
 
async function getuser(req, res){
        const users = await prisma.User.findMany()
        res.status(StatusCodes.OK).json(users)
}
// create a user
async function createuser(req, res){
    // console.log(req.body)
    const {email} = req.body
    // console.log(email)
    try{
        const users = await prisma.user.findUnqiue({
            where :{
                email : email
            }
        })
        console.log(users)
        if(users.email !== null && users.email === email){
            console.log(users.email,email)
            const newuser = await prisma.user.create({
                data : req.body
            })
            res.status(StatusCodes.CREATED).json({message:"success",newuser})
            console.log(newuser)
        }else{
            res.status(StatusCodes.CREATED).json({message:"Failed to create the user."})
        }
    }catch(error){
        res.status(StatusCodes.BAD_REQUEST).json({error})
    }
    
}


async function userlogin(req, res){

// provide email and password.
const {email, password} = req.body;
console.log(email,password)
// check if there is a user with the given email,
try{
const userdata = await prisma.user.findUnqiue({
    where : {
        email : email
        
    }
})
console.log(email)
// check if password provided is equal to the one stored in the DB
// if password matches,send the user a token,
// create the token
if(userdata.email && data.password === password){
    // hash password

    console.log(user.email)
    let userData = {name: user.name, email: user.email, rolebase: user.role}
    let hash = jwt.sign(userData, process.env.JWT_SECRET, {expiresIn: "24h"})
    res.status(StatusCodes.CREATED).json({message: "User Created", hash})
// else send error message
}else{
res.status(StatusCodes.BAD_REQUEST).json({error: "password or Email is incorrect. Login again"})
}}


catch(error){
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error)
}

 
}

async function patchuser(req, res){
    const patchuser = await prisma.User.findUnqiue({
        where : {
            id : +req.params.id
        }
    })
}
export  {getuser,
        userlogin,
        createuser
}