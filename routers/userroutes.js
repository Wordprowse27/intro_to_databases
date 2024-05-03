import express from "express";
import checkforauthtoken from "../helper function/Bruce.js";
import {getuser,  userlogin, createuser } from "../controllers/usercontroller.js"
import { userschema, validate1} from "../helper function/user-validation.js";
const router = express.Router()

router.get("/",checkforauthtoken,validate1(userschema),getuser)
router.patch("/:id",checkforauthtoken,validate1(userschema),)
router.post("/login", userlogin)
router.post("/", createuser)

export default router