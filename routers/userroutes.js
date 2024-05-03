import express from "express";
import checkforauthtoken from "../helper function/Bruce.js";
import {getuser,  userlogin, createuser } from "../controllers/usercontroller.js"
import { userschema, validate1} from "../helper function/user-validation.js";
import {isADMIN} from "../helper function/role.access.js"
const router = express.Router()

router.get("/",[checkforauthtoken,validate1(userschema),isADMIN],getuser)
router.patch("/:id",checkforauthtoken,validate1(userschema),)
router.post("/login", userlogin)
router.post("/", createuser)

export default router