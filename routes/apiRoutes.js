import express from "express"
import  {v1Router}  from "../routes/v1/v1Router.js"

  const Router =express.Router();

Router.use("/v1",v1Router)


export default Router;
