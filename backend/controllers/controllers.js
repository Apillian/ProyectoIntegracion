import {v4 as uuidv4} from 'uuid';
import { validationResult } from 'express-validator';

import HttpError from '../models/http-error.js';

const DUMMY_Zonas = [
    {
        idZona: '1',
        nombreZona: 'Zona 1'

        },
        {
            idZona: '5',
            nombreZona: 'Zona 5'
    
            },
            {
                idZona: '16',
                nombreZona: 'Zona 16'
        
                },


        
];
const DUMMY_Ofertas = [
{
    idOferta: 'offf221',
    idRestaurante: 'Dom',
    restaurante: 'Dominoes',
    fechaInicio: 23/9/2013,
    fechaFinal: 25/10/2013,

},

{
    idOferta: 'offf562',
    idRestaurante: 'mc',
    restaurante: 'McDonalds',
    fechaInicio: 23/9/2013,
    fechaFinal: 25/10/2013,

}


];

const DUMMY_BLACK = [
    {
        idOferta: 'offf221',
        restaurante: 'Dominoes',
        fechaInicio: 23/9/2013,
        fechaFinal: 25/10/2013,
    
    }
    
    
    ];




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
            fechaInicio,
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