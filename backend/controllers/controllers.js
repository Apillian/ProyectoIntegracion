import {v4 as uuidv4} from 'uuid';
import { validationResult } from 'express-validator';
import Zona16 from '../models/zona16.js';
import HttpError from '../models/http-error.js';
import Zona10 from '../models/zona10.js';
//Obtener oferta



export const getOffers = async (req, res, next) => {
    let offers;
    try {
        offers = await Zona10.find();
    } catch (err) {
      const error = new HttpError(
        'No se pudo encontrar las ofertas solicitado.',
        500
      );
      return next(error);
    }
    res.status(200).send(offers);
  };


//Postear una oferta
export const postOffer = async(req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );}
        else
    
   {const {restaurante,fechaInicio,fechaFinal} = req.body;
        const newoff = {
            idOferta: uuidv4(),
            restaurante,
            fechaFinal
        }
        DUMMY_Ofertas.push(newoff);
        res.status(201).json(newoff);
    }
}

//Borrar una oferta
export const deleteOffer = (req, res, next) => {
    const idOferta = req.params.pid;
    DUMMY_Ofertas = DUMMY_Ofertas.filter(p => (p.id != idOferta));
    res.status(200).json({mensaje: 'Sitio Eliminado.'})
}

