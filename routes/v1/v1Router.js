
import express from "express"
import UserRouter from "../userRoutes.js"
import adminRouter from '../adminRoutes.js' 
import reviewRouter from '../reviewRoutes.js'
import movieRouter from '../movieRoutes.js'



export const v1Router =express.Router();

v1Router.get("/",(req,res)=>{
    return res.send("helo world")
})

v1Router.use("/user",UserRouter)

v1Router.use("/admin",adminRouter)

v1Router.use("/review",reviewRouter)
v1Router.use("/movie",movieRouter)




