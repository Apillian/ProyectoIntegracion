import React from 'react';
import './Offers.css';
import { useEffect } from 'react';


const Offers = () => {
    const zona = localStorage.getItem('1')


useEffect(()=>{

    //Hacer un switch para elegir que zona
    const Getz16 = async () => {
        try {

            const res = await fetch('http://localhost:5002/api/Zona16/', {method: 'GET', mode: 'cors',
                                                                                headers: {'Content-Type': 'application/json'}});
            const data = await res.json();
            console.log(data);

        } catch (err) {
            console.log(err);
        }
    }
    Getz16();
},[])

    return (
<table>
<tbody className='ofertas'>
  <tr>
    <td>
        {zona}, Oferta
    </td>
    </tr>
    <tr>
    <td>
        {zona}, Oferta
    </td>
    </tr>
    <tr>
    <td>
        {zona}, Oferta
    </td>
    </tr>
    
    </tbody>
    </table>
    
    )

}
export default Offers;