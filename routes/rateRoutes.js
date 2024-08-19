import {addRate,updateRate} from "../controllers/rateController.js";
import express from "express"




const router = express.Router()

router.post('/addRate/:id',addRate)
router.patch('/updateRate/:id',updateRate)



export default router;

