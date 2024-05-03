import Joi from "joi";

const courseschema = Joi.object({
    name : Joi.string().min(10).max(20).required(),
    descripttion : Joi.string().min(8).max(100).required(),
    price : Joi.string().min(2).required()
})

function validate(schema){
    return (req, res, next)=>{
        const result = schema.validate(req.body);
        if(result.error){
            res.json(result.error)
        }else{
            next()
        }
        }
    }
export {
    validate,
    courseschema
}