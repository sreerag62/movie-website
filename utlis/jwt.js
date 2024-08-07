import jwt from "jsonwebtoken";
import serverConfig from "../config/serverConfig.js";



 const generateToken =(email)=>{

    return jwt.sign({data:email}, serverConfig.token || "",{expiresIn: "1d"});

}
export default generateToken;