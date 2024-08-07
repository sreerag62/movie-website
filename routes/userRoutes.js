import { signin, signup } from '../controllers/userControllers.js';
import express from "express"

const router=express.Router()


router.post('/signup',signup)
router.post('/signin',signin)


export default router;

