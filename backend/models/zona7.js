import mongoose from 'mongoose';
//import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

const zona7Schema = new Schema({
  Restaurante: {type: String, required: true },
  TipoOferta: { type: String, required: true},
  FechadeExpiracion: { type: String, required: true}
});

//zona16Schema.plugin(uniqueValidator);

const Zona7 = mongoose.model('Zona7',zona7Schema);
export default Zona7;