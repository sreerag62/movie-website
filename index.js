import  express from "express"
import cookieParser from "cookie-parser";
import bodyparser from "body-parser";
import multer from "multer";



import userRouter from './routes/userRoutes.js'
import adminRouter from './routes/adminRoutes.js'
import reviewRouter from './routes/reviewRoutes.js'
import movieRouter from './routes/movieRoutes.js'
import rateRouter from './routes/rateRoutes.js'
//import rateRouter from './routes/rateRoutes.js'
import { connectDB } from "./db.js";
import serverconfig from "./config/serverConfig.js";
import  apiRouter  from "./routes/apiRoutes.js";


const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(bodyparser.json()); // parse application/json
app.use(bodyparser.urlencoded({ extended: true })); 


connectDB();


app.get("/", (req,res)=>{
    res.send("Hello Welcome to movie loft");
    
})










app.use("/api",apiRouter)
app.use("/v1/user",userRouter)
app.use("/v1/admin",adminRouter)
app.use("/v1/review",reviewRouter)
app.use("/v1/movie",movieRouter)
app.use("/v1/rate",rateRouter)









const port =3000;

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`);
})