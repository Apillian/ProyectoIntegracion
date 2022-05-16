import './App.css';
import React from 'react';
import Select from 'react-select'
import { useState } from 'react';
import NavBar from './components/NavBar';
import App2 from './App2';
import {Link, NavLink, Outlet} from 'react-router-dom'
import {BrowserRouter, Routes ,Router } from 'react-router-dom';
import Selectable from './Selectable';



export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  //console.log(selectedOption.value);



  return (
    <div className="App">
      <NavBar>
      </NavBar>
<Selectable/>
    </div>


  );
}


