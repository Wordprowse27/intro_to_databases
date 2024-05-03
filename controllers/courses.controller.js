import {PrismaClient} from '@prisma/client';
import {StatusCodes} from 'http-status-codes';
import 'dotenv/config';
const prisma = new PrismaClient()
 
async function postcourse(req, res){
    let course = await prisma.Course.create({
        data:req.body
    })
    res.status(StatusCodes.CREATED).json(
        course
    )
}

export default postcourse