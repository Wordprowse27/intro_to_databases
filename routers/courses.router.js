import express from "express";
import checkforauthtoken from "../helper function/Bruce.js";
import postcourse from "../controllers/courses.controller.js"
import {courseschema,validate} from "../helper function/data-validation.js"





const Coursesrouter = express.Router()

// Coursesrouter.get("/",checkforauthtoken,getuser)

Coursesrouter.post("/",validate(courseschema), postcourse)



export default Coursesrouter