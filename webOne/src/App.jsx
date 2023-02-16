import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import AppCSS from  './App.module.css';
import Cards from './Components/Cards'; 
import Navbar from './Components/Navbar'; 
import Paragraph from './Components/Paragraph';
import Footer from './Components/Footer.jsx';  
import Picture from './Components/Picture'; 
import Text from './Components/Text'; 
import Renderer from './Renderer';
import Home from './Components/Home'; 


// import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
// import Renderer   from './Renderer';
import About from './Components/About'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Meetings from './Components/Meetings';
import KidsMinistry from './Components/KidsMinistry';
import Volunteering from './Components/Volunteering';
import Outreach from './Components/Outreach';
import Ministry from './Components/Ministry'; 

/**
 * 
 * 
 * 
 <section className={AppCSS.container} >
    
    <div className={AppCSS.navbar}>
    <Navbar className={AppCSS.navbar} />
    </div>
    
   
    <div className={AppCSS.picture}>
   
    <Picture className={AppCSS.picture}  />
    </div> 
    
    
    <div className={AppCSS.paragraphContainer}>
    <div className={AppCSS.paragraph}>
    <Paragraph className={AppCSS.paragraphTag}/>     
    </div>
    </div>
    
    <div className={AppCSS.cards}>
    <Cards className={AppCSS.cards} />
    </div>
    
    <div className={AppCSS.footer}>
    <Footer className={AppCSS.footer}/>
    </div>
      
    </section>
   
 
 
 
 */


function App() {
  
  return (
    <>

    <div className="App">
    
    {/* <section className={AppCSS.container} >
    
    <div className={AppCSS.navbar}>
    <Navbar className={AppCSS.navbar} />
    </div>
    
   
    <div className={AppCSS.picture}>
   
    <Picture className={AppCSS.picture}  />
    </div> 
    
    
    <div className={AppCSS.paragraphContainer}>
    <div className={AppCSS.paragraph}>
    <Paragraph className={AppCSS.paragraphTag}/>     
    </div>
    </div>
    
    <div className={AppCSS.cards}>
    <Cards className={AppCSS.cards} />
    </div>
    
    <div className={AppCSS.footer}>
    <Footer className={AppCSS.footer}/>
    </div>
      
    </section> */}
    
    <Renderer/>
    
    <Routes>
    {/* <Route exact path="/" element={<Pic ture/>}>Picture</Route> */}
    <Route path='/' element={<Home/>}>Home </Route>
    <Route exact path='about' element={<About/>}>About</Route>
    <Route path='text' element={<Text/>}>Text</Route> 
    {/* Find out why this is rendering with other components  */}
    <Route exact path='meetings' element={<Meetings/>}>Meetings</Route>
    
    {/* Routes for the navbar might need some work  */}
    
    {/* Add in the Rest of the routes for the navbar here  */}
    {/* This is not the right path add in the right path  */}
    <Route exact path='kidsministry' element={<KidsMinistry/>}>Kids Ministry</Route>
    <Route exact path='volunteering' element={<Volunteering/>}>Volunteering</Route>
    <Route exact path='outreach' element={<Outreach/>}>Outreach</Route>
    
    {/* This is working again now  */}
    <Route exact path='ministry' element={<Ministry/>}>Ministry</Route>
    
    
    
    </Routes>
   
    </div>
    
    </>
    
  );
  
}

export default App
