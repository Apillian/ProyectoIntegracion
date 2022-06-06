import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ofertaSchema = new Schema({
    Restaurante: {type: String, required: true },
    TipoOferta: { type: String, required: true},
    FechadeExpiracion: { type: String, required: true}
});

const oferta = mongoose.model('offer',ofertaSchema);
export default oferta;