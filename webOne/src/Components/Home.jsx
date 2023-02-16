import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Picture from './Picture'; 
import Paragraph from './Paragraph';
import Footer from './Footer';
import Cards from './Cards'; 
import HomeCSS from '../Styles/Home.module.css'; 





function Home() {
  return (
  <>
    <div className='home'>
    <div className={HomeCSS.navbar}>
    <Navbar />
    </div>
    <div className={HomeCSS.picture}>
    <Picture/>
    </div>
    <div className={HomeCSS.paragraph}>
    <Paragraph/>
    </div>
    <div className={HomeCSS.cards}>
    <Cards/>
    </div>
    <div className={HomeCSS.footer}>
    <Footer/>
    </div>
    </div>
  </>
  );
  
  
}

export default Home
