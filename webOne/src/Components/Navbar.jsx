import React from 'react';
import NavbarCSS from '../Styles/Navbar.module.css'; 
// Import the react hooks here 


/** So the plan is now to Assemble everything together. 
There is still quite a lot of work to do. 

First of all the navbar works for the most part. 

So it has functionality. But it needs contents and it needs to be 
assembled and placed in the right place. 

Then we can focus on styling and polishing the whole thing. 

And once that is done we can focus on integration and then Routing. 


So 

*/
// Try importing the Hamburger Menu here 
import NewHamburger from './NewHamburger';

function Navbar() {
  return (
    
    // Add in the container here 
    <div className={NavbarCSS.container}>
    <nav className={NavbarCSS.navBar}>   
    {/* Add in the navbar contents here  */}
    {/* Add in the navbar container here  */}
    <div className={NavbarCSS.navContainer}> 
    
    {/* Add in the Logo here  */}
    <div className={NavbarCSS.logoContainer}> 
    
    <div className={NavbarCSS.logo}> 
    Logo
    </div>
    </div>
    
    {/* add in the Hamburger Composite Component here  */}
    {/* Add a wrapper to this component  */}
    <div className={NavbarCSS.wrapper}>
    <NewHamburger className={NavbarCSS.newHamburger}/>  
    </div>

    
    
    {/* Add in the list container here  */}
    <div className={NavbarCSS.listContainer}> 
    
    {/* Add in the List here  */}
    <ul className={NavbarCSS.list} >

    {/* Add in the list contents here  */}
    <li className={NavbarCSS.listItem}>
    {/* Add in the nested list item contents here  */}
    <a href='#' alt="alt"> 
    Ministry 
    </a>
    </li>    
    
    <li className={NavbarCSS.listItem}>
    <a href='#' alt="alt">
    Volunteering 
    </a>
    </li>
    
    <li className={NavbarCSS.listItem}>
    <a href="#" alt="alt">
    Meetings 
    </a>
    </li>
    
    <li className={NavbarCSS.listItem}> 
    <a href='#' alt="alt"> 
    About 
    </a>
    </li>
    <li className={NavbarCSS.listItem}>
      <a href="#" alt="alt"> 
      Kids Ministry 
      </a>
    </li>
    <li className={NavbarCSS.listItem}> 
    <a href='#' alt="alt"> 
    Outreach
    </a>
    </li>
    
    
    </ul>
    </div>
    
    
    
    </div>
    </nav>
    </div>
  );
}

export default Navbar
