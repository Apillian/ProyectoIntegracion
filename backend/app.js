import express from "express";
import bodyParser from "body-parser";
import router from './routes/routes.js';
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/cliente', router )
app.use('/api/where2', router )
app.use('/api/filtro', router )
app.use('/api/Zona16', router)
const constring = "mongodb+srv://api:Warcraft12345@clusterzero.kygwu.mongodb.net/?retryWrites=true&w=majority"
mongoose
  .connect(constring)
.then(() => {
  app.listen(5002);
})
.catch(err => {
  console.log(err);
});

