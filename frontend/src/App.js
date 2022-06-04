import './App.css';
import React from 'react';
import { useState } from 'react';
import NavBar from './components/NavBar';
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


