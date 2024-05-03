import Joi from "joi";

const userschema = Joi.object({
    name : Joi.string().min(3).required(),
    email : Joi.string().required(),
    password : Joi.string().required().min(10),
    age : Joi.number().required(),

})

function validate1(schema){
    return (req, res, next)=>{
        const result = validate.schema(req.body);
            if(result.error){
                res.json(result.error)
            
        }else{
            next()
        }
    }
}

export {
    validate1,
    userschema
}
