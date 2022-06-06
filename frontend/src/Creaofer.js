import React, {useState} from "react"
import axios from 'axios';
import './Creaofer.css';

function Creaofer(){
    const [input,setInput] = useState({
        restaurante: '',
        tipooferta: '',
        fechafinal: ''

    })

    function handleChange(event){
        const {name,value} = event.target;
        setInput(prevInput=>{
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        const newoffer ={
            restaurante: input.restaurante,
            tipooferta: input.tipooferta,
            fechafinal: input.fechafinal

        }
        axios.post('http://localhost:5002/api/Zona/create',newoffer)
    }

    return <div className="container">
        <h1 className="title">Creacion de Ofertas.</h1>
        <form>
            <div>
                <input value={input.restaurante} placeholder="Restaurante"name="restaurante"  onChange={handleChange} className="form-control"></input>
            </div>
            <div>
                <input value={input.tipooferta} placeholder="Tipo de Oferta"name="tipooferta"  onChange={handleChange} className="form-control"></input>
            </div>
            <div>
                <input value={input.fechafinal} placeholder="Fecha de vencimiento"name="fechafinal"  onChange={handleChange} className="form-control"></input>
            </div>
            <button onClick={handleClick} className="btn">Enviar</button>
        </form>
    </div>
}


export default Creaofer;