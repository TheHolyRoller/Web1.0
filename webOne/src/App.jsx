import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AppCSS from  './App.module.css';
import Cards from './Components/Cards'; 
// import Navbar from './Components/Navbar'; 
import HamburgerPrototype from './Components/HamburgerPrototype';
import Footer from './Components/Footer.jsx'; 
import NewHamburger from './Components/NewHamburger';


function App() {
  
    return (
    <div className="App">
    
    {/* The the components in here  */}
    {/* <Navbar className={AppCSS.navbar} /> */}
    {/* Add the cards in here  */}
    {/* <Cards className={AppCSS.cards}/>  */}
    
    {/* Add in the Hamburger Prototype here  */}
    <HamburgerPrototype/> 
    {/* Add in the Footer here  */}
    {/* <Footer/> */}
    {/* <NewHamburger /> */}
    
    </div>
  );
  
}

export default App
