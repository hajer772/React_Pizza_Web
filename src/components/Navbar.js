//rfce make the structure by default 
//import ReorderIcon from '@mui/icons-material/Reorder'; from material-ui-icon
import React from 'react'
import { useState } from 'react';
import Logo from "../assets/Logo.png"
import {Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function Navbar() {
  const [openLinks, setOpenLinks]=useState(false);
  
  const toggleNavbar=()=>{

    setOpenLinks(!openLinks);
    
  }

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}> 
        <img src={Logo}/>
        <div className='hiddenLinks'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
            <ReorderIcon />
        </button>
      </div>
      
    </div>
  )
}

export default Navbar
