import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AppCSS from  './App.module.css';
import Cards from './Components/Cards'; 
import Navbar from './Components/Navbar'; 
import Paragraph from './Components/Paragraph';
import Footer from './Components/Footer.jsx';  
import Picture from './Components/Picture'; 
  

function App() {
  
    return (
    <>
    <div className="App">
        
    <section className={AppCSS.container} >
    
    <div className={AppCSS.navbar}>
    <Navbar className={AppCSS.navbar} />
    </div>
    
    
    {/* Add in the picture here  */}
    <div className={AppCSS.picture}>
    <Picture className={AppCSS.picture}  />  
    </div>
    
    
    <div className={AppCSS.paragraphContainer}>
    <div className={AppCSS.paragraph}>
    <Paragraph className={AppCSS.paragraphTag}/>     
    </div>
    </div>
    
    {/* Add in the Cards here  */}
    <div className={AppCSS.cards}>
    <Cards className={AppCSS.cards} />
    </div>
    
    {/* Add in the Footer here */}
    <div className={AppCSS.footer}>
    <Footer className={AppCSS.footer}/>
    </div>
      
    {/* <NewCards/> */}
    </section>
    
    {/* Add in the new cards here */}
    
    
    </div>
    
    </>
    
  );
  
}

export default App
