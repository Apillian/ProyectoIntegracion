import React from 'react';
import './Offers.css';
import Select from 'react-select'
import { useState } from 'react';
import NavBar from './components/NavBar';
import App2 from './App2';
import {Link, NavLink} from 'react-router-dom'
import {BrowserRouter, Routes ,Router } from 'react-router-dom';
import { render } from 'react-dom';


const Offers = () => {
    const zona = localStorage.getItem('1')
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