import React from 'react';
import NavbarCSS from '../Styles/Navbar.module.css'; 
import NewHamburger from './NewHamburger';  
import Logo from '../assets/logo-black.svg';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link   } from 'react-router-dom'; 
import Meetings from '../Components/Meetings'; 
import Outreach from '../Components/Outreach'; 
import KidsMinistry from '../Components/KidsMinistry'; 
import Volunteering from '../Components/Volunteering'; 
import Ministry from '../Components/Ministry'; 

  
  
  function Navbar() {
  
    return (
      <>
    <div className={NavbarCSS.container}>
    <nav className={NavbarCSS.navBar}>   
    
    <div className={NavbarCSS.navContainer}> 
    
    <div className={NavbarCSS.logoContainer}> 
    
    
    
    <div className={NavbarCSS.wrapper}>
    <NewHamburger className={NavbarCSS.newHamburger}/>  
    </div>
    
    <div className={NavbarCSS.listContainer}> 
    {/* <div className={NavbarCSS.logoContainer}>
      <img src={Logo} style={{width: "200px" }} className={NavbarCSS.logoImage}></img>
    </div> */}
 
    <ul className={NavbarCSS.list} >

    <li className={NavbarCSS.listItem}>
    
    
    {/* For some reason this is breaking everything */}
    {/* <Link to='ministry' element={<Ministry/>}>
    Ministry 
    </Link> */}
    
    </li>    
    
    <li className={NavbarCSS.listItem}>
    <Link to='volunteer' element={<Volunteering/>}>
    Volunteering 
    </Link>
   
    </li>
    
    <li className={NavbarCSS.listItem}>
    <Link to='meetings' element={<Meetings/>}>
    Meetings 
    </Link>
    </li>
    
    <li className={NavbarCSS.listItem}> 
    <Link to='about' element={<About/>}>About</Link>
    </li>
    <li className={NavbarCSS.listItem}>
    <Link to='kidsMinistry' element={<KidsMinistry/>}>
      Kids Ministry 
    </Link> 
    
    </li>
    <li className={NavbarCSS.listItem}> 
    <Link to='outreach' element={<Outreach/>}>
    Outreach
    </Link>
    </li>
    
    
    </ul>
    </div>
    
    
    </div>
    </div>
    </nav>
    </div>
    
    </>
  );
}

export default Navbar
