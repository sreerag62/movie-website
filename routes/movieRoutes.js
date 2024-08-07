import {getMovie,addMovie,deleteMovie,createMovie,getReview,updateMovie } from '../controllers/movieControllers.js'
import {upload} from '../Middlewares/uploadMiddlewares.js';
import authenticateadmin from '../Middlewares/adminMiddlewares.js';
import express from "express"
import multer from 'multer'




const router = new express.Router()

router.post('/addMovie',addMovie)
router.post('/createMovie/:id',upload.single("image"),createMovie)
router.get('/getMovie',getMovie)
router.delete('/deleteMovie/:id',deleteMovie)
router.get('/getReviews',getReview)
router.put('/updateMovie/:id',updateMovie)



export default router;