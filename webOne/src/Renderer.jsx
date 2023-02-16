import React from 'react'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import AppCSS from  './App.module.css';
import Cards from './Components/Cards'; 
import Navbar from './Components/Navbar'; 
import Paragraph from './Components/Paragraph';
import Footer from './Components/Footer.jsx';  
import Picture from './Components/Picture'; 
import Text from './Components/Text'; 
import About from './Components/About'; 



import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Renderer() {
  return (
   <div> 
   <Link to='text'>Text</Link>
   <Link to='about'>About</Link>
   
   
   </div>
  )
}

export default Renderer
