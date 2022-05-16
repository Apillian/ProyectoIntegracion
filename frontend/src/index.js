import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes ,Router,Route, Navigate } from 'react-router-dom';
import App2 from './App2';
import {Link, NavLink, Outlet} from 'react-router-dom'

ReactDOM.render(<React.StrictMode>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/app2" element={<App2 />}/>

        </Routes>
    </BrowserRouter>
    </React.StrictMode>, document.getElementById('root'));


/*const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <BrowserRouter>
<Routes>
    <Route path='/' element={<App/>}>
    <Route path='/asda' element={<App2/>}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
    </React.StrictMode>)*/
    



