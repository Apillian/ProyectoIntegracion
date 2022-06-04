import mongoose from 'mongoose';
//import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

const zona10Schema = new Schema({
  Restaurante: {type: String, required: true },
  TipoOferta: { type: String, required: true},
  FechadeExpiracion: { type: String, required: true}
});



const Zona10 = mongoose.model('Zona10',zona10Schema);
export default Zona10;