import './App.css';
import './Selectable.css'
import React from 'react';
import Select from 'react-select'
import { useState } from 'react';
import NavBar from './components/NavBar';
import App2 from './App2';
import {Link, NavLink} from 'react-router-dom'
import {BrowserRouter, Routes ,Router } from 'react-router-dom';


const Selectable = () => {

    const [count, setCount] = useState(0);
    const options = [
        { value: 'Zona 1', label: 'Zona1' },
        { value: 'Zona 2', label: 'Zona2' },
        { value: 'Zona 3', label: 'Zona3' },
        { value: 'Zona 4', label: 'Zona4' },
        { value: 'Zona 5', label: 'Zona5' },
        { value: 'Zona 6', label: 'Zona6' },
        { value: 'Zona 7', label: 'Zona7' },
        { value: 'Zona 10', label: 'Zona10' },
        { value: 'Zona 16', label: 'Zona16' }
      ]

      const MyComponent = () => (
        <Select options={options} />
      )

      const handle = ()=>{
          localStorage.setItem('1',selectedOption.value);
      }
  const [selectedOption, setSelectedOption] = useState(null);
  //Valor del selectable
  //const [cuenta, setcuenta]= useState('');



    return (
        //Trying on click in the app2 link

        
        <table className = 'tablas'>
<tbody>
  <tr>
    <td>
    <h1>Seleccione la Zona</h1>
    <Select className='Selectin'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />


<nav>
    <Link to='/app2' className='button'
    onClick={handle}
    >Enter</Link>
</nav>
    </td>
    </tr>
  </tbody>
  
</table>
    );
    
}

export default Selectable;