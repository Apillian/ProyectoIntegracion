import express from "express";
import { check } from "express-validator";
import { route } from "express/lib/application";

//importamos controler.
import {postOffer,deleteOffer} 
        from "../controllers/controllers.js";
const router = express.Router()


router.post('/', postOffer);
router.delete('/:pid', deleteOffer);





export default router;