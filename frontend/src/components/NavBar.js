import React, {useState} from 'react'
import MainHeader from './MainHeader';
import './NavBar.css';
import {Link, NavLink} from 'react-router-dom'

const NavBar = (props) => {
  return (
<MainHeader>
 <nav className='Yo'>
    <Link to='/'>Where2</Link>
</nav>
            </MainHeader>
  );
}

export default NavBar;