import express, { json } from 'express';
import morgan from 'morgan';
import router from './routers/userroutes.js';
import cors from 'cors';
import Coursesrouter from "./routers/courses.router.js" 

// import getoken from "./controllers/usercontroller.js";

const app = express()
app.use(cors())
app.use(express.json())

// app.use()

// app.get("/users", (req,res)=>{
    // res.send("Send your MVC architrcture.")
// })
app.use(morgan("dev"))
app.use("/courses",Coursesrouter )
app.use("/users", router)
// console.log("print1")

// app.post('/users', async(req,res)=>{
    

app.listen(5000,()=>{
    console.log("Server has started.")
})

