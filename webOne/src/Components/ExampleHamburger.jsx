import React from 'react'
// Import the style sheet here 
import '../Styles/ExampleHamburger.css'; 

// Import the React Hooks here 

function ExampleHamburger() {
  
//   Set the React Hooks here 
  
  return (
    <nav>
    <div class="navbar">
      <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>  
        <div class="logo">
          <h1>Navbar</h1>
        </div>
        <div class="menu-items">
          <li><a href="#">Home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">blogs</a></li>
          <li><a href="#">portfolio</a></li>
          <li><a href="#">contact</a></li>
        </div>
      </div>
    </div>
  </nav>
   
  );
}

export default ExampleHamburger
