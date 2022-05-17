import mongoose from 'mongoose';
//import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

const zona16Schema = new Schema({
  Restaurante: { type: String, required: true },
  TipoOferta: { type: String, required: true},
  FechadeExpiracion: { type: String, required: true}
});

//zona16Schema.plugin(uniqueValidator);

const Zona16 = mongoose.model('Zona16',zona16Schema);

export default Zona16;