import { StatusCodes } from "http-status-codes"

function isADMIN(req, res){
    if(req.tokendata.roles === 'ADMIN'){
        next()
    }
    else{
        res.status(StatusCodes.FORBIDDEN).json({status: "Access Denied."})
    }
}

function isSTUDENT(req, res){
    if(req.tokendata.roles === 'STUDENT'){
        next()
    }
    else{
        res.status(StatusCodes.FORBIDDEN).json({status: "Access Denied."})
    }
}

function isTEACHER(req, res){
    if(req.tokendata.roles === 'TEACHER'){
        next()
    }
    else{
        res.status(StatusCodes.FORBIDDEN).json({status: "Access Denied."})
    }
}

export {
    isADMIN,
    isSTUDENT,
    isTEACHER
}