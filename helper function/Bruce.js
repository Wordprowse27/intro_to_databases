import jwt from 'jsonwebtoken';
import 'dotenv/config';

function checkforauthtoken(req, res, next){
        // console.log(req.headers)
        if (req.headers.authorization){
            let authHeader = req.headers.authorization
            let token = authHeader.split(' ')[1];
            // verify if token is authentic 
            if (token){
                // res.send("Token exists")
                jwt.verify(token, process.env.JWT_SECRET, (error, token)=>{
                    if(error){
                        res.send("token is invalid")
                    }else{
                        // res.send(token)
                        req.tokendata = token
                        next()
                    }
                })
                
            } 
            else{
                res.send("Token is missing.")
            }
    
        }else{
            res.send("Missing Authorization headers")
        }
        
}
export default checkforauthtoken;