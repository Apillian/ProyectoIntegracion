import {v4 as uuidv4} from 'uuid';
import { validationResult } from 'express-validator';
import Zona16 from '../models/zona16.js';
import HttpError from '../models/http-error.js';
import Zona10 from '../models/zona10.js';
import Zona7 from '../models/zona7.js';
import oferta from '../models/oferta.js';
//Obtener oferta
//La idea es hacer esto
//const zona = localStorage.getItem('1')


  //ZONA 10
export const getzone10 = async (req, res, next) => {
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
    //ZONA 16
  export const getzone16 = async (req, res, next) => {
    let offers;
    try {
        offers = await Zona16.find();
    } catch (err) {
      const error = new HttpError(
        'No se pudo encontrar las ofertas solicitado.',
        500
      );
      return next(error);
    }
    res.status(200).send(offers);
  };

  //ZONA 7
  export const getzone7 = async (req, res, next) => {
    let offers;
    try {
        offers = await Zona7.find();
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
export const postOffer = async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );}
        else
    
   {
    const restaurante1=req.body.title;
    const tipooferta1=req.body.content;
    const fechafinal1=req.body.content2;
    console.log(restaurante1);
    console.log(tipooferta1);
    console.log(fechafinal1);
    const newoffer = new oferta({
      restaurante1,
      tipooferta1,
      fechafinal1

    })
    await newoffer.save();


   }
}

//Borrar una oferta
export const deleteOffer = (req, res, next) => {
    const idOferta = req.params.pid;
    DUMMY_Ofertas = DUMMY_Ofertas.filter(p => (p.id != idOferta));
    res.status(200).json({mensaje: 'Sitio Eliminado.'})
}

