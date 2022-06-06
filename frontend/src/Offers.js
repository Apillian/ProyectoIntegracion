import React from 'react';
import './Offers.css';
import { useEffect,useState,useRef } from 'react';
import xtype from 'xtypejs'



const Offers = () => {

    const [dal,setdal]=useState([]);
    let arei = [];
    const zona = localStorage.getItem('1')


useEffect(()=>{
    //Hacer un switch para elegir que zona

    const Getz = async () => {
        try {
            console.log(localStorage.getItem('1'))
            if(zona=="Zona 10"){
                const res = await fetch('http://localhost:5002/api/Zona/zona10', {method: 'GET', mode: 'cors',
                headers: {'Content-Type': 'application/json'}});
                const data = await res.json();
                data.forEach(element => {
                    arei.push(element);
                    
                });
                                                                            
  }
            if(zona=="Zona 16"){
                const res = await fetch('http://localhost:5002/api/Zona/zona16', {method: 'GET', mode: 'cors',
                headers: {'Content-Type': 'application/json'}});
                const data = await res.json();
                data.forEach(element => {
                    arei.push(element);
                    
                });
            }

            if(zona=="Zona 7"){
                const res = await fetch('http://localhost:5002/api/Zona/zona7', {method: 'GET', mode: 'cors',
                headers: {'Content-Type': 'application/json'}});
                const data = await res.json();
                data.forEach(element => {
                    arei.push(element);
                    
                });
            }
            

           setdal(arei);
            

        } catch (err) {
            console.log(err);
        }
    }

    Getz();
},[])




useEffect(()=> {
    //console.log(xtype(dal));

},[dal])


function Helo({restaurante,tipooferta,fechadeexpiracion}) {
    return(
<table>
    <thead classname="frontofertas">
        <tr>
          <th scope='col' >Restaurante</th>
          <th scope='col' >Oferta</th>
          <th scope='col' >Fecha (Limite)</th>

        </tr>

        </thead>
        <tbody className="oferta">
        <tr>
            <td >{restaurante}</td>
            <td >{tipooferta}</td>
            <td >{fechadeexpiracion}</td>
        </tr>
        </tbody>
        </table>
    )
}
console.log(dal);

return (
    
    <table>
    <tbody>
        <tr>
            <td> 
                <table>
                    
                    <tbody>
                        
                    {dal.map((i,indice) => <Helo
                    restaurante={i.Restaurante}   
                    tipooferta={i.TipoOferta}
                    fechadeexpiracion={i.FechaDeExpiracion}
    />)}
    </tbody>
    </table>
    </td>
        </tr>
    </tbody>
    </table>
        )



}

        

export default Offers;

