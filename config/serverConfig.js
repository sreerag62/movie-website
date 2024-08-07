import dotenv from "dotenv";
dotenv.config();

export default {
    Port:process.env.Port || 3000,
    db:process.env.dbURL || "",
    token:process.env.TOKEN_SECRET || "",
    
    
}