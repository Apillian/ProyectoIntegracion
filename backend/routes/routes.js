import express from "express";
import oferta from "../models/oferta.js";
//importamos controler.
import {postOffer,deleteOffer,getzone16,getzone7,getzone10} 
        from "../controllers/controllers.js";
const router = express.Router()


router.route('/create').post((req,res) =>{
        const restaurante=req.body.restaurante;
        const tipooferta=req.body.tipooferta;
        const fechafinal=req.body.fechafinal;
        console.log(restaurante);
        console.log(tipooferta);
        console.log(fechafinal);
        const newoffer = new oferta({
          Restaurante: restaurante,
          TipoOferta: tipooferta,
          FechadeExpiracion: fechafinal
    
        });
        console.log(newoffer);
         newoffer.save();
         console.log(newoffer);
});
router.delete('/:pid', deleteOffer);
router.get('/zona16', getzone16);
router.get('/zona10', getzone10);
router.get('/zona7', getzone7);





export default router;