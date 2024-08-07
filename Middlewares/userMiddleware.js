import jwt from "jsonwebtoken"
import serverconfig from "../config/serverConfig.js"


const authenticateuser = (req,res,next)=>{
    const token =req.cookies.token;

    jwt.verify(token,serverconfig.token,(err,result) =>{
        if(err){
            console.log(err);
            return res.status(401).send("not verified");
        }

        console.log("admin token result",result)

        if(result.role !== "user"){
            return res.status(401).send("not a user")
        }

        req.user =result;

        next();
    })
}
 export default authenticateuser