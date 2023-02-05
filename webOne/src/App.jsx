import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AppCSS from  './App.module.css';
import Cards from './Components/Cards'; 
import Navbar from './Components/Navbar'; 
import HamburgerPrototype from './Components/HamburgerPrototype';
import Footer from './Components/Footer.jsx'; 
import NewHamburger from './Components/NewHamburger';
import ExampleHamburger from './Components/ExampleHamburger'; 


function App() {
  
    return (
    <div className="App">
        
        {/* Add in the Hamburger prototype here  */}
        {/* <HamburgerPrototype/> */}
   
   
    <Navbar/>
    
    </div>
    
    
  );
  
}

export default App
