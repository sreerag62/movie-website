import {getMovie,addMovie,deleteMovie,createMovie,updateMovie } from '../controllers/movieControllers.js'
import {upload} from '../Middlewares/uploadMiddlewares.js';
import authenticateadmin from '../Middlewares/adminMiddlewares.js';
import authenticateuser from '../Middlewares/userMiddleware.js'
import express from "express"
//import multer from multer

const router = express.Router()

router.post('/addMovie',addMovie)
router.post('/createMovie/:id',upload.single("image"),createMovie)
router.get('/getMovie',getMovie)
router.delete('/deleteMovie/:id',authenticateadmin,deleteMovie)

router.put('/updateMovie/:id',authenticateadmin,updateMovie)





export default router;