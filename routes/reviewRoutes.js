import create from '../controllers/reviewController.js'
import express from "express"

const router = express.Router()

router.post('/create',create)



export default router;

