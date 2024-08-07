import jwt from "jsonwebtoken";
import serverConfig from "../config/serverConfig";



 const adminToken =(user)=>{

    return jwt.sign({data:user.email,role:user.role},serverConfig.token || "", {expiresIn: "1d"})

}
export default adminToken;