import {addReviewadmin,addReview,getreview} from '../controllers/reviewController.js'
import authenticateadmin from '../Middlewares/adminMiddlewares.js';


import express from "express"

const router = express.Router()

router.post('/addReviewadmin',authenticateadmin,addReviewadmin)
router.post('/addReview/:id',addReview)
router.get('/getreview',getreview)



export default router;

