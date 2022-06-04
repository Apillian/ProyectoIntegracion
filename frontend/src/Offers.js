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

            const res = await fetch('http://localhost:5002/api/Zona', {method: 'GET', mode: 'cors',
                                                                                headers: {'Content-Type': 'application/json'}});
            const data = await res.json();
            
            data.forEach(element => {
                arei.push(element);
                
            });

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
    <header>
        <tr>
          <th scope='col' className='frontofertas'>Restaurante</th>
          <th scope='col' className='frontofertas'>Oferta</th>
          <th scope='col' className='frontofertas'>Fecha</th>
        </tr>
        </header>
        <tr>
            <td className='frontofertas'>{restaurante}</td>
            <td className='frontofertas'>{tipooferta}</td>
            <td className='frontofertas'>{fechadeexpiracion}</td>
        </tr>
        </table>
    )
}
console.log(dal);
//Meter el helo en otra pagina, y exportarla para aca (offers)

return (
    
    <table className='tablita'>
    <tbody className='ofertas'>
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

