import React from 'react';
import HamburgerPrototypeCSS from '../Styles/HamburgerPrototype.module.css'; 




function HamburgerPrototype() {
  return (
    <nav role="navigation">
      <div className={HamburgerPrototypeCSS.menuToggle}>
 
        <input type="checkbox" />
       
        <span></span>
        <span></span>
        <span></span>
        
        
        <ul className={HamburgerPrototypeCSS.menu}>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Info</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
        </ul>
      </div>
    </nav>
  );
}

export default HamburgerPrototype
