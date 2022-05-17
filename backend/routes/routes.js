import express from "express";

//importamos controler.
import {postOffer,deleteOffer,getOffers} 
        from "../controllers/controllers.js";
const router = express.Router()


router.post('/', postOffer);
router.delete('/:pid', deleteOffer);
router.get('/', getOffers);





export default router;